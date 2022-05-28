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
        const { nodes, materials } = useGLTF('/P8.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.03, 0.09]}>
              <mesh geometry={nodes.mesh_39_1.geometry} material={materials['Material.040']} />
              <mesh geometry={nodes.mesh_39_2.geometry} material={materials['Material.039']} />
              <mesh geometry={nodes.mesh_39_0.geometry} material={materials['Material.038']} />
              <mesh geometry={nodes.mesh_39_4.geometry} material={materials['Material.036']} />
              <mesh geometry={nodes.mesh_39_5.geometry} material={materials['Material.037']} />
              <mesh geometry={nodes.mesh_39_3.geometry} material={materials['Material.041']} />
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
