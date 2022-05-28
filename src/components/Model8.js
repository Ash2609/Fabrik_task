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
        const { nodes, materials } = useGLTF('/P9.glb')
        return (
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.05, 0.06]}>
              <mesh geometry={nodes.mesh_79_2.geometry} material={materials['Material.019']} />
              <mesh geometry={nodes.mesh_79_4.geometry} material={materials['Material.016']} />
              <mesh geometry={nodes.mesh_79_0.geometry} material={materials['Material.018']} />
              <mesh geometry={nodes.mesh_79_1.geometry} material={materials['Material.020']} />
              <mesh geometry={nodes.mesh_79_5.geometry} material={materials['Material.017']} />
              <mesh geometry={nodes.mesh_79_3.geometry} material={materials['Material.021']} />
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
