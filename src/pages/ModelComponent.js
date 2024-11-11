// ModelComponent.js
import React, {useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import {useNavigate} from 'react-router-dom';
import * as THREE from "three";

const Model = () => {
    const {scene, nodes} = useGLTF('/mclaren_f1_2022.glb');
    const navigate = useNavigate();  // Für die Navigation bei Klick

    useEffect(() => {
        // Ausgabe der Nodes zur Untersuchung in der Konsole
        console.log(nodes);
    }, [nodes]);

    // Falls das Modell keine Materialien hat, setze ein Standardmaterial
    scene.traverse((child) => {
        if (child.isMesh && !child.material) {
            child.material = new THREE.MeshStandardMaterial({color: 'orange'});
        }
    });

    // Klick-Event-Handler für das Rad
    const handleWheelClick = (event) => {
        navigate('/about');  // Weiterleitung zur /about-Seite
    };

    return (
        // Hier wird das Modell rotiert, z.B. um die Y-Achse um -90 Grad, um es richtig zu orientieren
        <primitive object={scene} rotation={[0, Math.PI / -2, 56.4]}>

            {/* Zugriff auf die Räder und das Klick-Event hinzufügen */}

            {(nodes?.Object_35 || nodes?.Object_39 || nodes?.Object_40 || nodes?.Object_41 || nodes?.Object_43 || nodes?.Object_44) && (
                <group
                    rotation={[Math.PI / -2, 0, 0]}  // Rotation um die X-Achse für die gesamte Gruppe
                    onClick={handleWheelClick}        // Klick-Event für die gesamte Gruppe
                >
                    {nodes?.Object_35 && (
                        <mesh geometry={nodes.Object_35.geometry}>
                            <meshStandardMaterial
                                color="orange"
                                transparent={true}
                                opacity={0}
                                depthWrite={false}
                            />
                            {/*   <Text
                                position={[nodes.Object_35.position.x , nodes.Object_35.position.y + 3, nodes.Object_35.position.z]}
                                fontSize={0.1}
                                color="white"
                                anchorX="center"
                                anchorY="middle"
                            >
                                Rad 35
                            </Text>*/}
                        </mesh>
                    )}
                    {nodes?.Object_39 && (
                        <mesh geometry={nodes.Object_39.geometry}>
                            <meshStandardMaterial
                                color="orange"
                                transparent={true}
                                opacity={0}
                                depthWrite={false}
                            />

                        </mesh>
                    )}
                    {nodes?.Object_40 && (
                        <mesh geometry={nodes.Object_40.geometry}>
                            <meshStandardMaterial
                                color="orange"
                                transparent={true}
                                opacity={0}
                                depthWrite={false}
                            />

                        </mesh>
                    )}
                    {nodes?.Object_41 && (
                        <mesh geometry={nodes.Object_41.geometry}>
                            <meshStandardMaterial
                                color="orange"
                                transparent={true}
                                opacity={0}
                                depthWrite={false}
                            />

                        </mesh>
                    )}
                    {nodes?.Object_43 && (
                        <mesh geometry={nodes.Object_43.geometry}>
                            <meshStandardMaterial
                                color="orange"
                                transparent={true}
                                opacity={0}
                                depthWrite={false}
                            />

                        </mesh>
                    )}
                    {nodes?.Object_44 && (
                        <mesh geometry={nodes.Object_44.geometry}>
                            <meshStandardMaterial
                                color="orange"
                                transparent={true}
                                opacity={0}
                                depthWrite={false}
                            />
                        </mesh>
                    )}
                </group>
            )}
        </primitive>
    );
};

const ModelComponent = () => {
    return (
        <div style={{height: '100vh', width: '99%'}}> {/* Volle Höhe und Breite */}
            <Canvas
                style={{
                    height: '100%',
                    width: '100%',
                    border: '2px solid black',
                    backgroundColor: '#202020',
                }}
            >
                <ambientLight intensity={0.5}/>
                {/* Helligkeit des Umgebungslichts erhöhen */}
                <pointLight position={[10, 10, 10]} intensity={1}/>
                {/* Intensität des Punktlichts anpassen */}
                <directionalLight position={[5, 5, 5]} intensity={1}/>
                {/* Directional Light hinzufügen */}
                <Model/>
                <OrbitControls/>
            </Canvas>
        </div>
    );
};

export default ModelComponent;
