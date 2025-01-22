import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from "three";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Model = ({ onWheelClick }) => {
    const { scene, nodes } = useGLTF('/mclaren_f1_2022.glb');
    const navigate = useNavigate();  // For navigation on click

    useEffect(() => {
        // Log nodes to the console for inspection
        console.log(nodes);
    }, [nodes]);

    // Set a default material if the model has no materials
    scene.traverse((child) => {
        if (child.isMesh && !child.material) {
            child.material = new THREE.MeshStandardMaterial({ color: 'orange' });
        }
    });

    return (
        <primitive object={scene} rotation={[0, Math.PI / -2, 56.4]} position={[0, 2, 0]}>
            {(nodes?.Object_35 || nodes?.Object_39 || nodes?.Object_40 || nodes?.Object_41 || nodes?.Object_43 || nodes?.Object_44) && (
                <group rotation={[Math.PI / -2, 0, 0]} onClick={onWheelClick}>
                    {nodes?.Object_35 && (
                        <mesh geometry={nodes.Object_35.geometry}>
                            <meshStandardMaterial color="orange" transparent={true} opacity={0} depthWrite={false} />
                        </mesh>
                    )}
                    {nodes?.Object_39 && (
                        <mesh geometry={nodes.Object_39.geometry}>
                            <meshStandardMaterial color="orange" transparent={true} opacity={0} depthWrite={false} />
                        </mesh>
                    )}
                    {nodes?.Object_40 && (
                        <mesh geometry={nodes.Object_40.geometry}>
                            <meshStandardMaterial color="orange" transparent={true} opacity={0} depthWrite={false} />
                        </mesh>
                    )}
                    {nodes?.Object_41 && (
                        <mesh geometry={nodes.Object_41.geometry}>
                            <meshStandardMaterial color="orange" transparent={true} opacity={0} depthWrite={false} />
                        </mesh>
                    )}
                    {nodes?.Object_43 && (
                        <mesh geometry={nodes.Object_43.geometry}>
                            <meshStandardMaterial color="orange" transparent={true} opacity={0} depthWrite={false} />
                        </mesh>
                    )}
                    {nodes?.Object_44 && (
                        <mesh geometry={nodes.Object_44.geometry}>
                            <meshStandardMaterial color="orange" transparent={true} opacity={0} depthWrite={false} />
                        </mesh>
                    )}
                </group>
            )}
        </primitive>
    );
};

const ModelComponent = () => {
    const [open, setOpen] = useState(false);  // State to control the dialog

    const handleWheelClick = () => {
        setOpen(true);  // Open the dialog
    };

    const handleClose = () => {
        setOpen(false);  // Close the dialog
    };

    return (
        <div style={{ height: '100vh', width: '99%' }}>
            <Canvas
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                }}
                camera={{ position: [0, 3, 7] }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Model onWheelClick={handleWheelClick} />
                <OrbitControls />
            </Canvas>

            {/* MUI Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{
//                    backgroundColor: '#FF1e00',
                    color: '#FF1e00',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '10px 10px 0 0'
                }}>Reifen</DialogTitle>
                <DialogContent>
                    <p>Pro Rennwochenende werden pro Fahrer 13 Reifensätze à 4 Reifen zur Verfügung gestellt.  Auf 23 Rennwochenenden sind das bereits 23'920 Reifen, welche gebraucht werden. Für die Testfahrten werden pro Team 35 weitere  Reifensätze mitgebracht. Das bedeutet, dass zusätzlich zu den 23'920 Reifen aller Rennen 1'400  Reifen nur fürs Testing abgefahren werden.
                        Der Reifenhersteller Pirelli,  nimmt die gebrauchten Reifen wieder entgegen und Produziert durch deren Verbrennung Energie für ihre Werke zu erzeugen.
                    </p>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                        style={{
                            backgroundColor: '#FF1e00',
                            color: 'white',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Close
                    </Button>                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModelComponent;