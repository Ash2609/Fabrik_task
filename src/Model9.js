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
        const { nodes, materials } = useGLTF('/P12.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.04, 0.18]}>
              <mesh geometry={nodes.mesh_35_0.geometry} material={materials['Material.050']} />
              <mesh geometry={nodes.mesh_35_2.geometry} material={materials['Material.051']} />
              <mesh geometry={nodes.mesh_35_3.geometry} material={materials['Material.053']} />
              <mesh geometry={nodes.mesh_35_4.geometry} material={materials['Material.048']} />
              <mesh geometry={nodes.mesh_35_5.geometry} material={materials['Material.049']} />
              <mesh geometry={nodes.mesh_35_1.geometry} material={materials['Material.052']} />
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
