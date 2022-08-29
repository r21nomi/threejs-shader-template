precision mediump float;

uniform vec2 resolution;
uniform float time;

varying vec2 vUv;
varying vec2 vResolution;

void main() {
    vec2 uv = (vUv.xy * vResolution * 2.0 - vResolution.xy) / min(vResolution.x, vResolution.y);

    vec3 color = vec3(step(0.5, length(uv)));

    gl_FragColor = vec4(color, 1.0);
}