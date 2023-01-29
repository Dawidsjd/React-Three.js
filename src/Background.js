import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'

export function Background(){
    const texture = useLoader(THREE.TextureLoader, '/nig.jpg')
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[200, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}