import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  ContactShadows,
  Environment,
  OrbitControls,
  Stats,
} from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/5.glb");
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });
  return <primitive ref={ref} object={scene} {...props} />;
}

export default function ThreeJs() {
  return (
    <Canvas
      eventSource={document.getElementById("XU")}
      eventPrefix="client"
      camera={{ position: [-10, 0, 0], fov: 70 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Stats />
      <axesHelper />
      <ambientLight intensity={2.3} />
      <spotLight
        intensity={1}
        angle={0.3}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      <Environment preset="sunset" />
      <ContactShadows
        resolution={512}
        position={[0, 0, 0]}
        opacity={0.7}
        scale={10}
        blur={2.5}
      />

      <Model
        onClick={(e) => {
          const { x, y, z } = e.object.position;
          const { x: rotX, y: rotY, z: rotZ } = e.object.rotation;
          console.log(`Position: x=${x}, y=${y}, z=${z}`);
          console.log(`Rotation: x=${rotX}, y=${rotY}, z=${rotZ}`);
        }}
        scale={0.8}
        position={[-2, 2, -3]}
        castShadow
        receiveShadow
      />
    </Canvas>
  );
}
