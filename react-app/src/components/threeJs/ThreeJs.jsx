import React, { useState, useRef } from "react";

import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  CameraControls,
  GizmoHelper,
  GizmoViewport,
  SpotLight,
  Plane,
  MeshReflectorMaterial,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import { useControls } from "leva";

export default function App() {
  // const modelCosole = useControls({
  //   positionX: { value: 0, min: -80, max: 80, step: 0.1 },
  //   positionY: { value: 0, min: -80, max: 80, step: 0.1 },
  //   positionZ: { value: 0, min: -80, max: 80, step: 0.1 },
  //   scale: { value: 1, min: 0, max: 20, step: 0.1 },
  //   rotationX: { value: 0, min: -20, max: 20, step: 0.1 },
  //   rotationY: { value: 0.86, min: -20, max: 20, step: 0.1 },
  //   rotationZ: { value: 0, min: -20, max: 20, step: 0.1 },
  // });

  // const modelCosole = useControls({
  //   positionX: { value: 0, min: -80, max: 80, step: 0.1 },
  //   positionY: { value: 6, min: -80, max: 80, step: 0.1 },
  //   positionZ: { value: 5, min: -80, max: 80, step: 0.1 },
  //   scale: { value: 5, min: 0, max: 200, step: 0.1 },
  // });

  return (
    <Canvas shadows camera={{ position: [0, 0, 75], fov: 45 }}>
      <ambientLight intensity={0.5} />
      {/* <axesHelper args={[5]} /> */}
      {/* <gridHelper args={[50]} /> */}
      {/* <GizmoHelper alignment="bottom-left" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="white"
        />
      </GizmoHelper> */}
      {/* <CameraControls /> */}
      {/* <LightHelpers /> */}
      <Environment files="/env/ballroom_4k.hdr" blur={1} />
      <mesh position={[78, 15, -52]} rotation={[0, 0, 0]} scale={[8.5, 8.5, 1]}>
        <planeGeometry args={[16, 9]} />
        <meshBasicMaterial
          map={useLoader(THREE.TextureLoader, "/img/scene/orig.webp")}
        />
      </mesh>

      <group position={[0, -21, 0]} rotation={[0, 0, 0]} scale={1}>
        <group position={[50, 0, 0]} rotation={[0, 0.86, 0]}>
          <ModelGLTF
            modelUrl="/models/glassBox/glassBox.gltf"
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.9, 0.95, 0.9]}
          >
            <ModelGLTF
              modelUrl="/models/amfora/amfora.gltf"
              position={[0, 6, 0]}
              rotation={[0, 0, 0]}
              scale={8}
              aRotation={true}
              aRotationSpeed={0.008}
            ></ModelGLTF>
            <ModelGLTF
              modelUrl="/models/stend/stend.gltf"
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[14, 7, 11]}
            >
              <mesh
                position={[0, 0.85, 0]}
                rotation={[(Math.PI / 2) * 3, 0, 0]}
              >
                <circleGeometry args={[0.55, 30]} />
                <MeshReflectorMaterial
                  blur={[100, 100]}
                  resolution={2048}
                  mixBlur={1}
                  mixStrength={8}
                  roughness={0.9}
                  depthScale={1.2}
                  color="gold"
                  receiveShadow
                />
              </mesh>
            </ModelGLTF>
            <a.pointLight
              position={[0, 0, 5]}
              intensity={300}
              color="rgb(255, 166, 0)"
            />
            <a.pointLight
              position={[0, 0, -5]}
              intensity={300}
              color="rgb(255, 166, 0)"
            />
            <a.pointLight
              position={[-5, 0, 0]}
              intensity={300}
              color="rgb(255, 166, 0)"
            />

            <a.pointLight
              position={[-20, 45, 15]}
              intensity={2000}
              color="rgb(255, 166, 0)"
            />
          </ModelGLTF>
        </group>

        <MetalicRectangle
          width={280}
          height={80}
          position={[10, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        />
      </group>
    </Canvas>
  );
}

function ModelGLTF({
  modelUrl,
  children,
  aRotation = false,
  aRotationSpeed = 0.01,
  ...props
}) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y += aRotationSpeed;
    }
  });
  const { scene, nodes, materials } = useGLTF(modelUrl);
  scene.traverse(
    (obj) =>
      obj.type === "Mesh" &&
      ((obj.receiveShadow = obj.castShadow = true), (obj.metalness = 0.9))
  );

  materials.glass
    ? Object.assign(materials.glass, {
        color: new THREE.Color("rgb(210, 242, 255)"),
        opacity: 0.15,
        transparent: true,
        roughness: 0.3,
        metalness: 0.8,
      })
    : null;

  materials.metal
    ? Object.assign(materials.metal, {
        color: new THREE.Color("rgb(197, 154, 89)"),
        roughness: 0.1,
        metalness: 0.85,
      })
    : null;

  return (
    <primitive object={scene} {...props} ref={aRotation ? mesh : null}>
      {children}
    </primitive>
  );
}

function MetalicRectangle({ width = 1, height = 1, ...props }) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <planeGeometry args={[width, height]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={0.5}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={5}
        color="#101010"
        // metalness={0.9}
        receiveShadow
      />
    </mesh>
  );
}
