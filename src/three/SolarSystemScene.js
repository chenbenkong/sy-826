import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createSun } from './sun/createSun.js';
import { createPlanets } from './planets/createPlanets.js';
import { createStarfield } from './utils/createStarfield.js';
import { createComposer } from './postprocessing/createComposer.js';
import { createAsteroidBelt } from './objects/createAsteroidBelt.js';

export class SolarSystemScene {
  constructor(container) {
    this.container = container;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.sun = null;
    this.solarSystem = null;
    this.starField = null;
    this.planetMeshes = [];
    this.sunLight = null;
    
    this.isPaused = false;
    this.timeSpeed = 1;
    this.showOrbits = true;
    this.showStars = true;
    this.showNames = false;
    this.globalScale = 1.0;
    
    this.currentTargetPlanet = null;
    this.targetDistance = 300;
    this.cameraMoveSpeed = 0.05;
    
    this.animationId = null;
    this.onPlanetClick = null;
    this.onSunClick = null;
    this.onMoonClick = null;
    this.onCharonClick = null;
    
    this.raycaster = null;
    this.mouse = null;

    this.composer = null;
    this.bloomPass = null;
    this.godRaysPass = null;
    this.chromaticPass = null;
    this.colorGradingPass = null;
    this.vignetteGrainPass = null;
    this.composerBroken = false;
    this.bloomEnabled = true;
    this.godRaysEnabled = true;
    this.chromaticEnabled = true;
    this.asteroidBelt = null;
    this.loadingManager = null;
    this.onLoaded = null;
    this.suspended = false;
  }

  init() {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      20000
    );
    this.camera.position.set(0, 300, 800);
    
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enablePan = true;
    this.controls.enableRotate = true;
    this.controls.enableZoom = true;
    this.controls.minDistance = 50;
    this.controls.maxDistance = 3000;
    
    // 监听鼠标/触摸事件来区分操作类型
    let isZooming = false;
    
    this.renderer.domElement.addEventListener('wheel', () => {
      isZooming = true;
      setTimeout(() => { isZooming = false; }, 100);
    }, { passive: true });
    
    this.controls.addEventListener('start', () => {
      // 只有在非缩放操作时取消追踪
      if (this.currentTargetPlanet && !isZooming) {
        this.currentTargetPlanet = null;
      }
    });
    
    this.setupLighting();
    
    this.starField = createStarfield();
    this.scene.add(this.starField);
    
    this.solarSystem = new THREE.Group();
    this.scene.add(this.solarSystem);
    
    // 加载管理器：所有贴图加载完成后通知 UI 关闭加载页
    this.loadingManager = new THREE.LoadingManager();
    this.loadingManager.onLoad = () => {
      if (this.onLoaded) this.onLoaded();
    };
    
    this.sun = createSun(this.loadingManager);
    this.sun.castShadow = false;
    this.solarSystem.add(this.sun);
    
    // 银河全景背景（在 LoadingManager 中加载，确保所有贴图就绪后再关闭加载页）
    this.scene.background = this.createSpaceBackground(this.loadingManager);
    
    this.planetMeshes = createPlanets(this.solarSystem, this.loadingManager);
    
    // 火星—木星之间的小行星带
    this.asteroidBelt = createAsteroidBelt();
    this.solarSystem.add(this.asteroidBelt);
    
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    
    this.setupResize();
    this.setupClick();

    // 后期电影级管线（构造失败自动退回普通渲染）
    try {
      const pp = createComposer(this.renderer, this.scene, this.camera);
      this.composer = pp.composer;
      this.bloomPass = pp.bloomPass;
      this.godRaysPass = pp.godRaysPass;
      this.chromaticPass = pp.chromaticPass;
      this.colorGradingPass = pp.colorGradingPass;
      this.vignetteGrainPass = pp.vignetteGrainPass;
    } catch (e) {
      console.error('[solar] 后期管线初始化失败，退回普通渲染：', e);
      this.composer = null;
      this.bloomPass = null;
      this.godRaysPass = null;
      this.chromaticPass = null;
      this.colorGradingPass = null;
      this.vignetteGrainPass = null;
    }

    this.animate();
  }

  // 深空背景：银河全景贴图（等距柱状投影），比纯色渐变更有纵深感
  createSpaceBackground(manager) {
    if (manager) {
      const tex = new THREE.TextureLoader(manager).load(
        import.meta.env.BASE_URL + 'textures/milkyway.jpg'
      );
      tex.mapping = THREE.EquirectangularReflectionMapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      return tex;
    }
    // 兜底：细微的蓝紫径向渐变
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 46);
    g.addColorStop(0, '#0b0b1c');
    g.addColorStop(0.55, '#05060f');
    g.addColorStop(1, '#000007');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  setupLighting() {
    // 明亮的环境光：暗面也有清晰可辨的细节，不再黑乎乎一片
    const ambientLight = new THREE.AmbientLight(0x8899bb, 1.15);
    this.scene.add(ambientLight);

    // 半球光：天空冷色、地面暖色，给背阳面充足底光
    const hemiLight = new THREE.HemisphereLight(0x9ab0d8, 0x241c14, 0.85);
    this.scene.add(hemiLight);

    // 太阳点光源：无距离衰减，保证内外行星都被均匀照亮
    this.sunLight = new THREE.PointLight(0xfff2e0, 4.2, 0, 0);
    this.sunLight.position.set(0, 0, 0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 2000;
    this.sunLight.shadow.bias = -0.0001;
    this.scene.add(this.sunLight);

    // 补光，勾出球体体积感
    const fillLight = new THREE.DirectionalLight(0x88aaff, 0.6);
    fillLight.position.set(-300, 120, -300);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x99ccff, 0.35);
    rimLight.position.set(0, 200, -400);
    this.scene.add(rimLight);
  }

  setupClick() {
    this.renderer.domElement.addEventListener('click', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      this.raycaster.setFromCamera(this.mouse, this.camera);
      
      // 首先检测月球（因为它是子对象，需要优先检测）
      const moonMeshes = [];
      this.planetMeshes.forEach(planet => {
        if (planet.moon) moonMeshes.push(planet.moon);
      });
      const moonIntersects = this.raycaster.intersectObjects(moonMeshes);
      if (moonIntersects.length > 0 && this.onMoonClick) {
        const planet = this.planetMeshes.find(p => p.moon === moonIntersects[0].object);
        if (planet) {
          const moonTarget = {
            name: '月球',
            mesh: planet.moon,
            radius: planet.moon.geometry.parameters.radius,
            isMoon: true,
            parentPlanet: planet
          };
          this.currentTargetPlanet = moonTarget;
          this.moveCameraToPlanet(moonTarget);
          this.onMoonClick();
        }
        return;
      }
      
      // 然后检测行星（含云层/大气等子网格：递归检测后向上回溯所属行星）
      const planetIntersects = this.raycaster.intersectObjects(
        this.planetMeshes.map(p => p.mesh),
        true
      );

      if (planetIntersects.length > 0) {
        let obj = planetIntersects[0].object;
        let planet = null;
        while (obj) {
          planet = this.planetMeshes.find(p => p.mesh === obj);
          if (planet) break;
          obj = obj.parent;
        }
        if (planet && this.onPlanetClick) {
          this.currentTargetPlanet = planet;
          this.moveCameraToPlanet(planet);
          this.onPlanetClick(planet);
        }
        return;
      }
      
      // 最后检测太阳
      const sunIntersects = this.raycaster.intersectObject(this.sun);
      if (sunIntersects.length > 0 && this.onSunClick) {
        const sunTarget = {
          name: '太阳',
          mesh: this.sun,
          radius: 50
        };
        this.currentTargetPlanet = sunTarget;
        this.moveCameraToPlanet(sunTarget);
        this.onSunClick();
        return;
      }
    });
  }

  moveCameraToPlanet(planet) {
    const worldPosition = new THREE.Vector3();
    planet.mesh.getWorldPosition(worldPosition);
    
    // 计算特写距离 - 根据星球大小调整
    let closeUpDistance;
    if (planet.name === '太阳') {
      closeUpDistance = 120; // 太阳特写距离
    } else if (planet.name === '月球') {
      closeUpDistance = 15; // 月球特写距离
    } else if (planet.name === '土星') {
      closeUpDistance = planet.radius * 4; // 土星要考虑环
    } else if (planet.name === '木星') {
      closeUpDistance = planet.radius * 2.5;
    } else {
      closeUpDistance = planet.radius * 3; // 其他行星
    }
    
    // 设置相机目标位置（星球前方）
    const targetCameraPos = new THREE.Vector3(
      worldPosition.x + closeUpDistance,
      worldPosition.y + closeUpDistance * 0.3,
      worldPosition.z + closeUpDistance
    );
    
    // 平滑移动相机
    this.animateCameraToPosition(targetCameraPos, worldPosition);
  }
  
  animateCameraToPosition(targetPos, lookAtPos) {
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const duration = 1000; // 1秒动画
    const startTime = Date.now();
    
    // 动画过程中暂时禁用控制器更新，避免冲突
    const wasTracking = this.currentTargetPlanet !== null;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 使用缓动函数 (ease-out cubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      // 插值相机位置
      this.camera.position.lerpVectors(startPos, targetPos, easeProgress);
      
      // 插值目标点
      this.controls.target.lerpVectors(startTarget, lookAtPos, easeProgress);
      
      // 更新控制器
      this.controls.update();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (this.composer) this.composer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // 黑洞体验期间挂起太阳系渲染，让出全部 GPU
    if (this.suspended) return;

    const time = Date.now() * 0.001;
    
    if (!this.isPaused) {
      this.updatePlanets();
      this.updateSun();
    }
    
    if (this.starField && this.starField.children) {
      // 三层星场：各自旋转速度不同，产生视差
      this.starField.children.forEach(layer => {
        if (layer.userData.material) {
          layer.userData.material.uniforms.time.value = time;
        }
        if (layer.userData.rotSpeed) {
          layer.rotation.y += layer.userData.rotSpeed * this.timeSpeed;
        }
      });
    }
    
    if (this.currentTargetPlanet) {
      this.updateCameraTracking();
    } else {
      this.controls.update();
    }
    
    // 防止相机进入星球内部
    this.preventCameraInsidePlanets();

    // 更新后期处理 uniforms
    this.updatePostProcessing(time);

    // 渲染：后期管线正常时走电影级渲染，否则普通渲染
    if (this.composerBroken || !this.composer || !this.bloomEnabled) {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    try {
      this.composer.render();
    } catch (e) {
      console.error('[solar] composer.render 失败，退回普通渲染：', e);
      this.composerBroken = true;
      try {
        this.renderer.render(this.scene, this.camera);
      } catch (_) { /* 忽略，下一帧继续 */ }
    }
  }

  updatePlanets() {
    const time = Date.now();
    
    this.planetMeshes.forEach(planet => {
      if (planet.name === '土星') {
        planet.mesh.rotation.y += 0.0008 * this.timeSpeed;
        if (planet.ring && planet.ring.userData.ringMaterial) {
          const saturnWorld = new THREE.Vector3();
          planet.mesh.getWorldPosition(saturnWorld);
          planet.ring.userData.ringMaterial.uniforms.sunDirection.value
            .copy(saturnWorld).multiplyScalar(-1).normalize();
        }
      } else if (planet.name === '火星') {
        planet.mesh.rotation.y += 0.0002 * this.timeSpeed;
      } else if (planet.name === '金星') {
        planet.mesh.rotation.y -= 0.0001 * this.timeSpeed;
      } else {
        planet.mesh.rotation.y += planet.rotationSpeed * this.timeSpeed;
      }
      
      const angle = time * 0.0001 * planet.orbitSpeed * this.timeSpeed;
      const x = Math.cos(angle) * planet.distance;
      const z = Math.sin(angle) * planet.distance;
      planet.mesh.position.set(x, 0, z);
      
      if (planet.moon) {
        const moonAngle = time * 0.001 * 2 * this.timeSpeed;
        const moonRadius = planet.radius * 2;
        planet.moon.position.x = moonRadius * Math.cos(moonAngle);
        planet.moon.position.z = moonRadius * Math.sin(moonAngle);
        planet.moon.rotation.y += 0.0003 * this.timeSpeed;
      }

      if (planet.name === '地球') {
        if (planet.clouds) {
          planet.clouds.rotation.y += 0.00012 * this.timeSpeed;
        }
        if (planet.material && planet.material.uniforms && planet.material.uniforms.sunDirection) {
          const earthWorld = new THREE.Vector3();
          planet.mesh.getWorldPosition(earthWorld);
          planet.material.uniforms.sunDirection.value
            .copy(earthWorld).multiplyScalar(-1).normalize();
        }
        if (planet.atmosphere && planet.atmosphere.userData.material) {
          const earthWorld = new THREE.Vector3();
          planet.mesh.getWorldPosition(earthWorld);
          planet.atmosphere.userData.material.uniforms.sunDirection.value
            .copy(earthWorld).multiplyScalar(-1).normalize();
        }
      }
    });
    
    // 小行星带整体缓慢公转
    if (this.asteroidBelt) {
      this.asteroidBelt.rotation.y += 0.0003 * this.timeSpeed;
    }
  }

  updateSun() {
    if (this.sun) {
      this.sun.rotation.y += 0.005 * this.timeSpeed;
      
      const pulseFactor = Math.sin(Date.now() * 0.001) * 0.02 + 1;
      this.sun.scale.set(pulseFactor, pulseFactor, pulseFactor);
      
      if (this.sunLight) {
          this.sunLight.intensity = 4.2 + Math.sin(Date.now() * 0.002) * 0.25;
      }
      
      const time = Date.now() * 0.001;
      
      if (this.sun.userData) {
        if (this.sun.userData.surfaceMaterial && this.sun.userData.surfaceMaterial.uniforms) {
          this.sun.userData.surfaceMaterial.uniforms.time.value = time;
        }

        if (this.sun.userData.particles && this.sun.userData.particles.userData.material) {
          this.sun.userData.particles.userData.material.uniforms.time.value = time;
        }
      }
    }
  }

  updateCameraTracking() {
    const worldPosition = new THREE.Vector3();
    this.currentTargetPlanet.mesh.getWorldPosition(worldPosition);
    
    // 根据时间速度动态调整相机跟随速度
    // 基础速度0.08，时间速度越快，跟随速度也越快
    const adaptiveSpeed = Math.min(0.08 * Math.max(this.timeSpeed, 1), 0.3);
    
    // 计算相机相对于目标的位置偏移
    const offset = new THREE.Vector3().subVectors(this.camera.position, this.controls.target);
    
    // 更新目标点到行星位置（使用自适应速度）
    this.controls.target.lerp(worldPosition, adaptiveSpeed);
    
    // 保持相机相对位置跟随目标
    const newCameraPosition = new THREE.Vector3().addVectors(worldPosition, offset);
    this.camera.position.lerp(newCameraPosition, adaptiveSpeed);
    
    this.controls.update();
  }

  setPaused(paused) {
    this.isPaused = paused;
  }

  setBloom(enabled) {
    this.bloomEnabled = enabled;
  }

  setGodRays(enabled) {
    this.godRaysEnabled = enabled;
    if (this.godRaysPass) {
      this.godRaysPass.uniforms.intensity.value = enabled ? 0.55 : 0.0;
    }
  }

  setChromatic(enabled) {
    this.chromaticEnabled = enabled;
    if (this.chromaticPass) {
      this.chromaticPass.uniforms.amount.value = enabled ? 0.003 : 0.0;
    }
  }

  // 每帧更新后期处理 uniforms（太阳屏幕坐标、时间等）
  updatePostProcessing(time) {
    if (!this.composer || this.composerBroken) return;

    // God Rays: 投影太阳到屏幕空间，传递 UV 坐标
    if (this.godRaysPass && this.sun) {
      const sunNDC = this.sun.position.clone().project(this.camera);
      // 太阳在相机背后时 z > 1，禁用光柱
      const behind = sunNDC.z > 1;
      this.godRaysPass.uniforms.sunPosition.value.set(
        (sunNDC.x + 1) * 0.5,
        (sunNDC.y + 1) * 0.5
      );
      if (this.godRaysEnabled && !behind) {
        this.godRaysPass.uniforms.intensity.value = 0.55;
      } else {
        this.godRaysPass.uniforms.intensity.value = 0.0;
      }
    }

    // Vignette + Grain: 更新时间（驱动动态颗粒）
    if (this.vignetteGrainPass) {
      this.vignetteGrainPass.uniforms.time.value = time;
    }
  }

  // 挂起/恢复渲染循环（黑洞体验期间使用）
  setSuspended(suspended) {
    this.suspended = !!suspended;
  }

  // 供导航面板调用：按名称跳转并聚焦某天体
  focusByName(name) {
    if (name === '太阳') {
      const t = { name: '太阳', mesh: this.sun, radius: 50 };
      this.currentTargetPlanet = t;
      this.moveCameraToPlanet(t);
      if (this.onSunClick) this.onSunClick();
      return;
    }
    if (name === '月球') {
      const planet = this.planetMeshes.find(p => p.moon);
      if (planet && planet.moon) {
        const t = {
          name: '月球',
          mesh: planet.moon,
          radius: planet.moon.geometry.parameters.radius,
          isMoon: true,
          parentPlanet: planet
        };
        this.currentTargetPlanet = t;
        this.moveCameraToPlanet(t);
        if (this.onMoonClick) this.onMoonClick();
        return;
      }
    }
    const target = this.planetMeshes.find(p => p.name === name);
    if (target) {
      this.currentTargetPlanet = target;
      this.moveCameraToPlanet(target);
      if (this.onPlanetClick) this.onPlanetClick(target);
    }
  }

  setTimeSpeed(speed) {
    this.timeSpeed = speed;
  }

  // 单位方向（避免零向量 normalize 产生 NaN 导致整屏黑）
  safeDir(from, to) {
    const d = new THREE.Vector3().subVectors(from, to);
    if (d.lengthSq() < 1e-6) d.set(0, 1, 0);
    return d.normalize();
  }

  preventCameraInsidePlanets() {
    const cameraPos = this.camera.position.clone();

    // 检查太阳
    const sunDistance = cameraPos.distanceTo(this.sun.position);
    const sunMinDistance = 55; // 太阳半径50 + 缓冲5
    if (sunDistance < sunMinDistance) {
      const direction = this.safeDir(cameraPos, this.sun.position);
      this.camera.position.copy(this.sun.position.clone().add(direction.multiplyScalar(sunMinDistance)));
    }

    // 检查所有行星
    this.planetMeshes.forEach(planet => {
      const worldPosition = new THREE.Vector3();
      planet.mesh.getWorldPosition(worldPosition);
      const distance = cameraPos.distanceTo(worldPosition);
      const minDistance = planet.radius * 1.2; // 行星半径 + 20%缓冲

      if (distance < minDistance) {
        const direction = this.safeDir(cameraPos, worldPosition);
        this.camera.position.copy(worldPosition.clone().add(direction.multiplyScalar(minDistance)));
      }

      // 检查月球
      if (planet.moon) {
        const moonWorldPosition = new THREE.Vector3();
        planet.moon.getWorldPosition(moonWorldPosition);
        const moonDistance = cameraPos.distanceTo(moonWorldPosition);
        const moonMinDistance = planet.radius * 0.27 * 1.2; // 月球半径 + 缓冲

        if (moonDistance < moonMinDistance) {
          const direction = this.safeDir(cameraPos, moonWorldPosition);
          this.camera.position.copy(moonWorldPosition.clone().add(direction.multiplyScalar(moonMinDistance)));
        }
      }
    });
  }

  // 镜头光晕：一组加色混合精灵，挂在相机下，按太阳的屏幕投影位置排布
  createLensFlare() {
    const group = new THREE.Group();
    const dist = 200; // 位于相机前方固定距离，纯屏幕空间叠加

    const glow = this.makeFlareSprite(150, 'rgba(255,240,205,0.55)');
    group.add(glow);

    const ghostDefs = [
      { t: -0.18, size: 70, mul: 0.45, color: 'rgba(255,170,110,0.5)' },
      { t: 0.30, size: 46, mul: 0.35, color: 'rgba(170,200,255,0.4)' },
      { t: 0.58, size: 28, mul: 0.30, color: 'rgba(255,220,160,0.35)' },
      { t: 1.00, size: 130, mul: 0.22, color: 'rgba(120,160,255,0.25)' },
      { t: 1.42, size: 56, mul: 0.18, color: 'rgba(255,150,120,0.2)' }
    ];
    const ghosts = ghostDefs.map(d => {
      const s = this.makeFlareSprite(d.size, d.color);
      group.add(s);
      return { sprite: s, t: d.t, mul: d.mul };
    });

    this.camera.add(group);
    this.lensFlare = group;
    this.lensFlareGlow = glow;
    this.lensFlareGhosts = ghosts;
    this.lensFlareDist = dist;
  }

  makeFlareSprite(size, color) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, color);
    g.addColorStop(0.5, color.replace(/[\d.]+\)$/g, '0.25)'));
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      opacity: 0
    });
    const sp = new THREE.Sprite(mat);
    sp.scale.set(size, size, 1);
    sp.renderOrder = 999;
    return sp;
  }

  updateLensFlare() {
    if (!this.lensFlare) return;
    const ndc = new THREE.Vector3(0, 0, 0).project(this.camera);
    const behind = ndc.z > 1;
    const onScreen = !behind && Math.abs(ndc.x) < 1.3 && Math.abs(ndc.y) < 1.3;

    const aspect = this.camera.aspect;
    const h = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const dist = this.lensFlareDist;

    const intensity = onScreen ? (0.2 + 0.8 * Math.max(0, 1 - Math.hypot(ndc.x, ndc.y) * 0.9)) : 0;

    const gx = ndc.x * aspect * h * dist;
    const gy = ndc.y * h * dist;
    this.lensFlareGlow.position.set(gx, gy, -dist);
    this.lensFlareGlow.material.opacity = intensity * 0.9;

    this.lensFlareGhosts.forEach(gh => {
      const px = ndc.x + (0 - ndc.x) * gh.t;
      const py = ndc.y + (0 - ndc.y) * gh.t;
      gh.sprite.position.set(px * aspect * h * dist, py * h * dist, -dist);
      gh.sprite.material.opacity = onScreen ? intensity * gh.mul : 0;
    });
  }

  setShowOrbits(show) {
    this.showOrbits = show;
    this.planetMeshes.forEach(planet => {
      if (planet.orbit) {
        planet.orbit.visible = show;
      }
    });
  }

  setShowStars(show) {    this.showStars = show;
    if (this.starField) {
      this.starField.visible = show;
    }
  }

  setShowNames(show) {
    this.showNames = show;
  }

  setGlobalScale(scale) {
    this.globalScale = scale;
    if (this.solarSystem) {
      this.solarSystem.scale.set(scale, scale, scale);
    }
  }

  resetView() {
    this.camera.position.set(0, 300, 800);
    this.controls.reset();
    this.currentTargetPlanet = null;
  }

  cancelTracking() {
    this.currentTargetPlanet = null;
  }

  getPlanetScreenPositions() {
    const positions = {};
    
    this.planetMeshes.forEach(planet => {
      const vector = new THREE.Vector3();
      vector.setFromMatrixPosition(planet.mesh.matrixWorld);
      vector.project(this.camera);
      
      const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
      
      positions[planet.name] = { x, y, visible: this.showNames };
    });
    
    if (this.sun) {
      const vector = new THREE.Vector3();
      vector.setFromMatrixPosition(this.sun.matrixWorld);
      vector.project(this.camera);
      
      const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
      
      positions['太阳'] = { x, y, visible: this.showNames };
    }
    
    return positions;
  }

  dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.renderer) {
      this.renderer.dispose();
      this.container.removeChild(this.renderer.domElement);
    }
    
    this.scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }
}
