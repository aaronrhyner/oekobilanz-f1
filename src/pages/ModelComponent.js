// ModelComponent.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from "three";

const Model = () => {
    const { scene } = useGLTF('/mclaren_f1_2022.glb');

    // Falls das Modell keine Materialien hat, setze ein Standardmaterial
    scene.traverse((child) => {
        if (child.isMesh && !child.material) {
            child.material = new THREE.MeshStandardMaterial({ color: 'orange' });
        }
    });

    return <primitive object={scene} />;
};

const ModelComponent = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />  {/* Helligkeit des Umgebungslichts erhöhen */}
            <pointLight position={[10, 10, 10]} intensity={1} />  {/* Intensität des Punktlichts anpassen */}
            <directionalLight position={[5, 5, 5]} intensity={1} />  {/* Directional Light hinzufügen */}
            <Model />
            <OrbitControls />
        </Canvas>
    );
};

export default ModelComponent;
