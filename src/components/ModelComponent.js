import React, {useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import * as THREE from "three";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';

const Model = ({ onWheelClick }) => {
    const { scene, nodes } = useGLTF('/mclaren_f1_2022.glb');

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
                }}>Wheel Clicked</DialogTitle>
                <DialogContent>
                    <p>You clicked on the wheel!</p>
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