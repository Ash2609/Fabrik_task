// import "./App.css";
import React from "react";
// import fabrik from "./components/images/fabrik_full_logo.png";
// import { Color } from "three";
// import Link from "@material-ui/core/Link";
import { Suspense,useRef } from 'react'
import { OrbitControls,useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function App() {


    function Model({ ...props }) {
        const group = useRef()
        const { nodes, materials } = useGLTF('/P2.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.05, 0.2]}>
              <mesh geometry={nodes.mesh_95_0.geometry} material={materials['Material.005']} />
              <mesh geometry={nodes.mesh_95_5.geometry} material={materials['Material.006']} />
              <mesh geometry={nodes.mesh_95_2.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.mesh_95_1.geometry} material={materials['Material.013']} />
              <mesh geometry={nodes.mesh_95_3.geometry} material={materials['Material.014']} />
              <mesh geometry={nodes.mesh_95_4.geometry} material={materials['Material.003']} />
            </group>
          </group>
        )
      }
  return (
    <>
    <Canvas camera={{fov:70,position:[0,10,15]}}>
	    <Suspense fallback={null}>
		    <ambientLight/>
		    <directionalLight intensity={2} position={[0,0,50]}/>
        <Model/>
	      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
      </Suspense>
    </Canvas>
      
    </>
  );
}

export default App;
