import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Galaxy() {
  const pointsRef = useRef();

  const {
    positions,
    colors
  } = useMemo(() => {
    const count = 50000;
    const radius = 12;
    const branches = 5;
    const spin = 1.5;

    const insideColor = new THREE.Color("#ffae00");
    const outsideColor = new THREE.Color("#4b7cff");

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const r = Math.random() * radius;

      const branchAngle =
        ((i % branches) / branches) * Math.PI * 2;

      const spinAngle = r * spin;

      const randomX =
        (Math.random() - 0.5) * 0.4 * r;

      const randomY =
        (Math.random() - 0.5) * 0.15;

      const randomZ =
        (Math.random() - 0.5) * 0.4 * r;

      positions[i3] =
        Math.cos(branchAngle + spinAngle) * r +
        randomX;

      positions[i3 + 1] = randomY;

      positions[i3 + 2] =
        Math.sin(branchAngle + spinAngle) * r +
        randomZ;

      const mixedColor = insideColor.clone();

      mixedColor.lerp(
        outsideColor,
        r / radius
      );

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return {
      positions,
      colors
    };
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}