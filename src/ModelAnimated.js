import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

export function ModelAnimated() {
  let mixer = null;
  const { scene, animations } = useLoader(GLTFLoader, "/atek.glb");
  //console.log(scene.animations);
    
    scene.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
            node.receiveShadow = true;
            
    });

  mixer = new THREE.AnimationMixer(scene);
  void mixer.clipAction(animations[0]).play();
  
  useFrame((state, delta) => {
    mixer.update(delta);
    // console.log(ca);
    //window.onkeydown = checkKey;
    //function checkKey(e) {
    //    e = e || window.event;
    //
    //    if(e.keyCode =='87'){ //w
    //        scene.position.z += delta * 10;

    //    }
    //    if(e.keyCode =='65'){ //a
    //         scene.position.x += delta * 10;
    //    }
    //    if(e.keyCode =='83'){ //s
    //        scene.position.z -= delta * 10;
    //    }
    //    if(e.keyCode =='68'){ //d
    //        scene.position.x -= delta * 10;
    //    }
    //}
  });
  return <primitive object={scene} position={[0, 0, 3]} scale={1} />;
}