import React from "react";
import ModelComponent from "./ModelComponent";

const Home = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Auswirkungen der Formel 1 auf die Umwelt</h1>
                <p style={styles.subtitle}>Autoren: Aaron, Eleni, Jonas</p>
            </header>
            <div style={styles.modelWrapper}>
                <div style={styles.canvasContainer}>
                    <ModelComponent />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Zentriere die Seite vertikal
        alignItems: 'center', // Zentriere die Seite horizontal
        height: '100vh', // Volle Höhe für die gesamte Seite
        backgroundColor: '#f0f4f8', // Sanfter Hintergrund für eine moderne Darstellung
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Moderne Schriftart
        color: '#333', // Textfarbe
        overflow: 'hidden', // Verhindert, dass Elemente aus dem Viewport ragen
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px', // Abstand zwischen Titel und ModelComponent
    },
    title: {
        fontSize: '2.5rem',
        margin: '0',
        color: '#007bff', // Moderne, ansprechende Farbe für den Titel
    },
    subtitle: {
        fontSize: '1.2rem',
        marginTop: '10px',
        color: '#6c757d',
    },
    modelWrapper: {
        width: '80%',
        height: '70vh', // Höhe für das ModelComponent-Container
        display: 'flex',
        justifyContent: 'center', // Zentriere das Canvas horizontal
        alignItems: 'center', // Zentriere das Canvas vertikal
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Schatten für moderne Optik
        backgroundColor: 'white', // Weißer Hintergrund für das ModelComponent
        borderRadius: '15px', // Abgerundete Ecken
        padding: '20px', // Innenabstand um das ModelComponent
        position: 'relative', // Verhindert, dass das Canvas den Container verlässt
        overflow: 'hidden', // Begrenze das Canvas auf den Containerbereich
    },
    canvasContainer: {
        width: '100%', // Fülle den gesamten Platz im Wrapper aus
        height: '100%', // Fülle die gesamte Höhe im Wrapper aus
        position: 'relative',
        overflow: 'hidden', // Verhindert, dass das Canvas herausragt
    },
};

export default Home;
