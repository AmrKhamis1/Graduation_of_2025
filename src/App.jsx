import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import HTML from "./html";
// Simple loading UI component

function useResponsiveCamera() {
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 65, 0],
    fov: 12,
  });

  useEffect(() => {
    function updateCamera() {
      const width = window.innerWidth;

      if (width < 600) {
        // Mobile
        setCameraConfig({
          position: [0, 80, 0], // Pull back a little
          fov: 20, // Wider angle to fit scene
        });
      } else if (width < 1024) {
        // Tablet
        setCameraConfig({
          position: [0, 70, 0],
          fov: 15,
        });
      } else {
        // Desktop
        setCameraConfig({
          position: [0, 65, 0],
          fov: 12,
        });
      }
    }

    updateCamera(); // Initial
    window.addEventListener("resize", updateCamera);
    return () => window.removeEventListener("resize", updateCamera);
  }, []);

  return cameraConfig;
}

export default function App() {
  const camera = useResponsiveCamera(); // 👈 dynamic values
  return (
    <>
      <HTML></HTML>
      <Canvas
        shadows
        camera={{
          position: camera.position,
          near: 0.1,
          far: 155,
          fov: camera.fov,
        }}
      >
        {/* Optional background color */}
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={2} />

        {/* Suspense wraps things that load async */}
        <Scene position={[0, 0, 2]} />

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.6}
          enablePan={false}
          enableZoom={true}
          maxZoom={0.5}
          minZoom={0}
          minDistance={3}
          maxDistance={80}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </>
  );
}

// GLB model loader
function Scene(props) {
  const gltf = useGLTF(import.meta.env.BASE_URL + "/models/Graduation2.glb");
  return <primitive object={gltf.scene} {...props} />;
}
