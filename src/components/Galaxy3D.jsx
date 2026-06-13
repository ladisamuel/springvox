import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars
} from "@react-three/drei";

import Galaxy from "./Galaxy";

export default function Galaxy3D() {
  return (
    <Canvas
      camera={{
        position: [0, 4, 18],
        fov: 60
      }}
    >
      <color attach="background" args={["#020207"]} />

      <ambientLight intensity={0.2} />

      <Galaxy />

      <Stars
        radius={100}
        depth={50}
        count={4000}
        factor={4}
        fade
      />

      <OrbitControls
        enablePan={false}
        minDistance={8}
        maxDistance={30}
      />
    </Canvas>
  );
}