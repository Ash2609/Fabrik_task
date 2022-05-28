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
        const { nodes, materials } = useGLTF('/P7.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.04, 0.03]}>
              <mesh geometry={nodes.mesh_45_0.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_2.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_7.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_9.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_11.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_13.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_15.geometry} material={materials['Material.026']} />
              <mesh geometry={nodes.mesh_45_1.geometry} material={materials['Material.027']} />
              <mesh geometry={nodes.mesh_45_8.geometry} material={materials['Material.027']} />
              <mesh geometry={nodes.mesh_45_12.geometry} material={materials['Material.027']} />
              <mesh geometry={nodes.mesh_45_14.geometry} material={materials['Material.027']} />
              <mesh geometry={nodes.mesh_45_3.geometry} material={materials['Material.028']} />
              <mesh geometry={nodes.mesh_45_6.geometry} material={materials['Material.028']} />
              <mesh geometry={nodes.mesh_45_10.geometry} material={materials['Material.028']} />
              <mesh geometry={nodes.mesh_45_16.geometry} material={materials['Material.028']} />
              <mesh geometry={nodes.mesh_45_4.geometry} material={materials['Material.023']} />
              <mesh geometry={nodes.mesh_45_5.geometry} material={materials['Material.024']} />
            </group>
          </group>
        )
      }
      
  
  return (
    <>
    <div className="size">

    <Canvas camera={{fov:70,position:[0,10,15]}}>
	    <Suspense fallback={null}>
		    <ambientLight/>
		    <directionalLight intensity={12} position={[0,0,50]}/>
        <Model/>
	      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
      </Suspense>
    </Canvas>
    </div>
      
    </>
  );
}

export default App;
