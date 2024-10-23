import React from "react";
import ModelComponent from "./ModelComponent";

const Home = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Welcome to the 3D Model Viewer</h1>
                <p style={styles.subtitle}>Explore the amazing 3D car model below</p>
            </header>
            <div style={styles.modelWrapper}>
                <ModelComponent />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column', // Anordnung in einer Spalte
        justifyContent: 'flex-start', // Elemente von oben nach unten anordnen
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8', // Sanfter Hintergrund für einen modernen Look
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Moderne Schriftart
        color: '#333', // Textfarbe
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
        height: '60%', // Höhe angepasst, um Platz für Header zu schaffen
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Leichter Schatten für einen modernen Effekt
        backgroundColor: 'white', // Weißer Hintergrund hinter dem ModelComponent
        borderRadius: '15px', // Abgerundete Ecken für ein modernes Design
        padding: '20px', // Innenabstand um das ModelComponent
        marginTop: '40px', // Abstand nach oben, um Titel und Modell zu trennen
    },
};

export default Home;
