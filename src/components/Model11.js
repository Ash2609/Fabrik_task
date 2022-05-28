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
        const { nodes, materials } = useGLTF('/P17.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.04, 0.18]}>
              <mesh geometry={nodes.mesh_31_4.geometry} material={materials['Material.054']} />
              <mesh geometry={nodes.mesh_31_0.geometry} material={materials['Material.056']} />
              <mesh geometry={nodes.mesh_31_5.geometry} material={materials['Material.055']} />
              <mesh geometry={nodes.mesh_31_2.geometry} material={materials['Material.057']} />
              <mesh geometry={nodes.mesh_31_3.geometry} material={materials['Material.059']} position={[0, 0, -0.02]} />
              <mesh geometry={nodes.mesh_31_1.geometry} material={materials['Material.058']} />
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
