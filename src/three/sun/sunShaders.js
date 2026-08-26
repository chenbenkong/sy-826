import * as THREE from 'three';

// 太阳表面着色器：以真实贴图为基础，叠加流动噪声，营造翻滚的等离子感
export function createSunSurfaceShader(mapTexture) {
  return new THREE.ShaderMaterial({
    uniforms: {
      map: { value: mapTexture },
      time: { value: 0 },
      brightness: { value: 1.0 }
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D map;
      uniform float time;
      uniform float brightness;
      varying vec2 vUv;
      varying vec3 vNormal;

      // 基于哈希的值噪声 + fbm
      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 5; i++) {
          v += amp * noise(p);
          p *= 2.0;
          amp *= 0.5;
        }
        return v;
      }

       void main() {
         // 沿表面缓慢流动的扰动
         vec2 flow = vec2(
           fbm(vUv * 6.0 + vec2(time * 0.03, 0.0)),
           fbm(vUv * 6.0 + vec2(0.0, time * 0.025) + 7.3)
         );

         vec2 uv2 = vUv + (flow - 0.5) * 0.012;

         vec3 base = texture2D(map, uv2).rgb;

         // 翻滚的明亮颗粒
         float n = fbm(vUv * 10.0 + flow * 2.0 + time * 0.06);
         float granule = pow(n, 2.0);

          // 米粒间较暗区域 + 颗粒高光
           vec3 darkCol = base * 0.75;
           vec3 brightCol = base * 1.2 + vec3(0.16, 0.08, 0.0) * granule;
          vec3 col = mix(darkCol, brightCol, smoothstep(0.3, 0.75, n));

          // 低频黑子：成片略暗的活动区，缓慢漂移（模拟太阳黑子随表面流动）
          float spotN = fbm(vUv * 4.0 + vec2(11.0, 5.0) + time * 0.008);
          float spot = smoothstep(0.58, 0.7, spotN);
          col *= mix(1.0, 0.7, spot);

         // 临边昏暗：球面边缘自然变暗（而非亮环），增强立体感
         float ndv = clamp(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0, 1.0);
         float limb = mix(0.5, 1.0, pow(ndv, 0.55));
         col *= limb;

         // 整体轻微闪动
         float flicker = 0.96 + 0.04 * sin(time * 2.0 + n * 10.0);
         col *= brightness * flicker;

         gl_FragColor = vec4(col, 1.0);
       }
    `
  });
}

// 太阳外层日冕：背面渲染的菲涅尔边缘辉光 + fbm 湍流脉动
export function createCoronaShader(radius) {
  return new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 }
    },
    vertexShader: /* glsl */`
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */`
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vWorldPos;

      float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }
      float noise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                       mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                       mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm(vec3 p) {
        float v = 0.0; float a = 0.5;
        for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
        return v;
      }

      void main() {
        // 视空间法线 z：边缘接近 0，正面接近 1 -> 用 1-dot 得到边缘亮环
        float fres = pow(clamp(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.5);
        float turb = fbm(normalize(vWorldPos) * 3.0 + vec3(0.0, 0.0, time * 0.12));
        float intensity = fres * (0.35 + 0.65 * turb);
        vec3 color = mix(vec3(1.0, 0.5, 0.12), vec3(1.0, 0.82, 0.45), turb);
        gl_FragColor = vec4(color, intensity * 0.35);
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false
  });
}
