import * as THREE from 'three';

export function createMoon(planetRadius, manager) {
  const moonGeometry = new THREE.SphereGeometry(planetRadius * 0.27, 128, 64);

  const textureLoader = new THREE.TextureLoader(manager);
  const moonTexture = textureLoader.load(import.meta.env.BASE_URL + 'textures/moon.jpg');
  moonTexture.colorSpace = THREE.SRGBColorSpace;
  moonTexture.anisotropy = 8;

  const moonMaterial = new THREE.MeshPhongMaterial({
    map: moonTexture,
    shininess: 6,
    emissive: 0x222222,
    emissiveIntensity: 0.12,
    specular: 0x333333
  });

  // 由月球表面贴图实时生成法线贴图，让环形山呈现浮雕立体感
  const img = new Image();
  img.onload = () => {
    const normalTex = buildNormalMap(img, 1024);
    normalTex.colorSpace = THREE.NoColorSpace;
    normalTex.anisotropy = 8;
    moonMaterial.normalMap = normalTex;
    moonMaterial.normalScale = new THREE.Vector2(1.4, 1.4);
    moonMaterial.needsUpdate = true;
  };
  img.src = import.meta.env.BASE_URL + 'textures/moon.jpg';

  const moon = new THREE.Mesh(moonGeometry, moonMaterial);
  moon.position.x = planetRadius * 2;

  const moonOrbitGeometry = new THREE.RingGeometry(planetRadius * 2, planetRadius * 2 + 0.5, 64);
  const moonOrbitMaterial = new THREE.MeshBasicMaterial({
    color: 0x333333,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.3
  });
  const moonOrbit = new THREE.Mesh(moonOrbitGeometry, moonOrbitMaterial);
  moonOrbit.rotation.x = Math.PI / 2;

  return { moon, moonOrbit };
}

// 由灰度高度图（这里用亮度近似）生成法线贴图
function buildNormalMap(img, size) {
  const cw = size;
  const ch = Math.round((img.height / img.width) * size);

  const src = document.createElement('canvas');
  src.width = cw;
  src.height = ch;
  const sctx = src.getContext('2d');
  sctx.drawImage(img, 0, 0, cw, ch);
  const data = sctx.getImageData(0, 0, cw, ch).data;

  const out = document.createElement('canvas');
  out.width = cw;
  out.height = ch;
  const octx = out.getContext('2d');
  const odata = octx.createImageData(cw, ch);

  const lum = (x, y) => {
    const xi = (x + cw) % cw;
    const yi = (y + ch) % ch;
    const i = (yi * cw + xi) * 4;
    return (data[i] + data[i + 1] + data[i + 2]) / 3;
  };

  const strength = 2.2;
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const dx = lum(x + 1, y) - lum(x - 1, y);
      const dy = lum(x, y + 1) - lum(x, y - 1);
      let nx = -dx * strength;
      let ny = -dy * strength;
      let nz = 255;
      const len = Math.hypot(nx, ny, nz);
      nx /= len; ny /= len; nz /= len;
      const i = (y * cw + x) * 4;
      odata.data[i] = (nx * 0.5 + 0.5) * 255;
      odata.data[i + 1] = (ny * 0.5 + 0.5) * 255;
      odata.data[i + 2] = (nz * 0.5 + 0.5) * 255;
      odata.data[i + 3] = 255;
    }
  }
  octx.putImageData(odata, 0, 0);
  return new THREE.CanvasTexture(out);
}
