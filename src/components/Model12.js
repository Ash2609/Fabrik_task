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
        const { nodes, materials } = useGLTF('/P18.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.04, 0.18]}>
              <mesh geometry={nodes.mesh_21_1.geometry} material={materials['Material.070']} />
              <mesh geometry={nodes.mesh_21_2.geometry} material={materials['Material.069']} />
              <mesh geometry={nodes.mesh_21_4.geometry} material={materials['Material.066']} />
              <mesh geometry={nodes.mesh_21_0.geometry} material={materials['Material.068']} />
              <mesh geometry={nodes.mesh_21_3.geometry} material={materials['Material.071']} />
              <mesh geometry={nodes.mesh_21_5.geometry} material={materials['Material.067']} />
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
		    <directionalLight intensity={2} position={[0,0,50]}/>
        <Model/>
	      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
      </Suspense>
    </Canvas>
    </div>
    </>
  );
}

export default App;
