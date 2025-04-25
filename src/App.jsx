import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import HTML from "./html";
// Simple loading UI component

export default function App() {
  return (
    <>
      <HTML></HTML>
      <Canvas
        shadows
        camera={{ position: [0, 65, 0], near: 30, far: 155, fov: 12 }}
      >
        {/* Optional background color */}
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={2} />

        {/* Suspense wraps things that load async */}
        <Scene position={[0, 0, 2]} />

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </>
  );
}

// GLB model loader
function Scene(props) {
  const gltf = useGLTF("/models/Graduation2.glb");
  return <primitive object={gltf.scene} {...props} />;
}
