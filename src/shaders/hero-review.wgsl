struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

// OKLCH-inspired palette: cool slate (~265) + signal coral (~38)
fn slate_base(uv: vec2f) -> vec3f {
  let depth = 0.11 + 0.04 * (1.0 - uv.y);
  return vec3f(depth * 0.92, depth * 0.95, depth * 1.08);
}

fn coral_glow(p: vec2f, center: vec2f, radius: f32, intensity: f32) -> f32 {
  let d = distance(p, center);
  return intensity * exp(-d * d / (radius * radius));
}

fn scanlines(uv: vec2f) -> f32 {
  let line = sin(uv.y * params.texel.y * 1.35) * 0.5 + 0.5;
  return mix(1.0, 0.94, line);
}

fn film_grain(uv: vec2f, t: f32) -> f32 {
  let n = fract(sin(dot(uv * 420.0 + t * 0.07, vec2f(12.9898, 78.233))) * 43758.5453);
  return (n - 0.5) * 0.035;
}

fn timeline_markers(uv: vec2f, t: f32) -> f32 {
  var glow = 0.0;
  let markers = array<f32, 3>(0.18, 0.42, 0.71);
  for (var i = 0u; i < 3u; i++) {
    let x = markers[i] + sin(t * 0.25 + f32(i)) * 0.008;
    let d = abs(uv.x - x);
    glow += smoothstep(0.012, 0.0, d) * 0.55;
  }
  return glow;
}

fn monitor_bloom(uv: vec2f, t: f32) -> vec3f {
  let center = vec2f(0.68 + sin(t * 0.18) * 0.03, 0.38 + cos(t * 0.14) * 0.02);
  let g = coral_glow(uv, center, 0.38, 0.22);
  let g2 = coral_glow(uv, vec2f(0.22, 0.72), 0.28, 0.08 + 0.04 * sin(t * 0.3));
  return vec3f(0.72, 0.38, 0.18) * (g + g2);
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let t = params.time;
  var col = slate_base(uv);

  // Soft vignette — review-room darkness at edges
  let vig = smoothstep(1.15, 0.25, distance(uv, vec2f(0.42, 0.48)));
  col *= mix(0.55, 1.0, vig);

  // Monitor bloom + timeline markers
  col += monitor_bloom(uv, t);
  col += vec3f(0.85, 0.42, 0.15) * timeline_markers(uv, t);

  // Horizontal sweep — playback head drift
  let sweep = smoothstep(0.02, 0.0, abs(uv.y - (0.62 + sin(t * 0.45 + uv.x * 2.0) * 0.04)));
  col += vec3f(0.9, 0.45, 0.12) * sweep * 0.12;

  // Scanlines + grain
  col *= scanlines(uv);
  col += film_grain(uv, t);

  // Fade left for copy legibility
  let copy_mask = smoothstep(0.05, 0.55, uv.x);
  col = mix(col * 0.35, col, copy_mask);

  return vec4f(col, 1.0);
}
