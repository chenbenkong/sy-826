import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════
// 1. GOD RAYS — 屏幕空间径向模糊（太阳光柱效果）
// ═══════════════════════════════════════════════════════════════
export const GodRaysShader = {
  uniforms: {
    tDiffuse: { value: null },
    sunPosition: { value: new THREE.Vector2(0.5, 0.5) },
    intensity: { value: 0.55 },
    decay: { value: 0.96 },
    exposure: { value: 0.14 },
    numSamples: { value: 64 },
    rayColor: { value: new THREE.Color(1.0, 0.7, 0.3) }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec2 sunPosition;
    uniform float intensity;
    uniform float decay;
    uniform float exposure;
    uniform int numSamples;
    uniform vec3 rayColor;
    varying vec2 vUv;

    void main() {
      vec2 texCoord = vUv;
      vec2 deltaTextCoord = texCoord - sunPosition;
      deltaTextCoord *= 1.0 / float(numSamples) * intensity;

      vec4 color = texture2D(tDiffuse, texCoord);
      float illuminationDecay = 1.0;
      vec4 accumulated = vec4(0.0);

      vec2 sampleCoord = texCoord;
      for (int i = 0; i < 128; i++) {
        if (i >= numSamples) break;
        sampleCoord -= deltaTextCoord;
        vec4 sampleColor = texture2D(tDiffuse, sampleCoord);
        // 只累积高亮区域（阈值过滤暗部）
        sampleColor.rgb *= max(sampleColor.rgb - vec3(0.6), vec3(0.0));
        sampleColor.rgb *= illuminationDecay * rayColor;
        accumulated.rgb += sampleColor.rgb;
        illuminationDecay *= decay;
      }

      accumulated.rgb *= exposure / float(numSamples);
      gl_FragColor = vec4(color.rgb + accumulated.rgb, color.a);
    }
  `
};

// ═══════════════════════════════════════════════════════════════
// 2. CHROMATIC ABERRATION — RGB 通道径向偏移（镜头色差）
// ═══════════════════════════════════════════════════════════════
export const ChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    amount: { value: 0.003 },
    angle: { value: 0.0 }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float angle;
    varying vec2 vUv;

    void main() {
      // 从中心向外的径向偏移（越靠近边缘偏移越大）
      vec2 dir = vUv - vec2(0.5);
      float dist = length(dir);
      float offset = amount * dist * dist; // 二次方衰减，中心几乎无偏移

      vec2 dirNorm = normalize(dir);
      vec2 rOffset = dirNorm * offset;
      vec2 bOffset = -dirNorm * offset;

      float r = texture2D(tDiffuse, vUv + rOffset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv + bOffset).b;
      float a = texture2D(tDiffuse, vUv).a;

      gl_FragColor = vec4(r, g, b, a);
    }
  `
};

// ═══════════════════════════════════════════════════════════════
// 3. COLOR GRADING — 电影色调校正（暗部偏冷 / 中间调偏暖 / 亮部自然）
// ═══════════════════════════════════════════════════════════════
export const ColorGradingShader = {
  uniforms: {
    tDiffuse: { value: null },
    // Lift: 暗部颜色偏移
    lift: { value: new THREE.Vector3(0.01, 0.005, 0.03) },
    // Gamma: 中间调颜色校正 (1.0 = 无变化)
    gamma: { value: new THREE.Vector3(1.0, 0.97, 0.92) },
    // Gain: 亮部颜色偏移
    gain: { value: new THREE.Vector3(1.0, 1.02, 0.98) },
    // 饱和度增强
    saturation: { value: 1.15 },
    // 对比度
    contrast: { value: 1.08 }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec3 lift;
    uniform vec3 gamma;
    uniform vec3 gain;
    uniform float saturation;
    uniform float contrast;
    varying vec2 vUv;

    // RGB 转亮度
    float luminance(vec3 c) {
      return dot(c, vec3(0.2126, 0.7152, 0.0722));
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      vec3 c = color.rgb;

      // Lift: 暗部提亮 + 着色
      c = c * (1.0 - lift) + lift;

      // Gamma: 中间调校正
      c = pow(max(c, vec3(0.0)), 1.0 / gamma);

      // Gain: 亮部调整
      c *= gain;

      // 对比度（围绕中灰 0.18）
      c = (c - 0.18) * contrast + 0.18;

      // 饱和度
      float lum = luminance(c);
      c = mix(vec3(lum), c, saturation);

      gl_FragColor = vec4(clamp(c, 0.0, 1.0), color.a);
    }
  `
};

// ═══════════════════════════════════════════════════════════════
// 4. VIGNETTE + FILM GRAIN — 暗角 + 胶片颗粒
// ═══════════════════════════════════════════════════════════════
export const VignetteGrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    vignetteIntensity: { value: 0.4 },
    vignetteFalloff: { value: 0.8 },
    grainIntensity: { value: 0.035 },
    time: { value: 0 }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float vignetteIntensity;
    uniform float vignetteFalloff;
    uniform float grainIntensity;
    uniform float time;
    varying vec2 vUv;

    // 高质量伪随机（避免条带）
    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);

      // --- 暗角 ---
      vec2 center = vUv - 0.5;
      float dist = length(center);
      // smoothstep 实现柔和过渡：从中心到边缘逐渐变暗
      float vignette = smoothstep(0.5, 0.5 - vignetteFalloff * 0.5, dist);
      color.rgb *= mix(1.0 - vignetteIntensity, 1.0, vignette);

      // --- 胶片颗粒 ---
      // 每帧使用不同随机种子，产生动态噪点
      float grain = rand(vUv * 1000.0 + fract(time * 137.0)) * 2.0 - 1.0;
      color.rgb += grain * grainIntensity;

      gl_FragColor = color;
    }
  `
};
