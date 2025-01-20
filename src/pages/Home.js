import React from "react";
import ModelComponent from "../components/ModelComponent";
import TextPreview from "../components/TextPreview";
import textsData from "../data/text.json";

const Home = () => {
    return (
        <div style={{ ...styles.container }}>
            <header style={styles.header}>
                <h1 style={styles.title}>Auswirkungen der Formel 1 auf die Umwelt</h1>
                {/*<p style={styles.subtitle}>Autoren: Aaron, Eleni, Jonas</p>*/}
            </header>
            <div style={styles.modelWrapper}>
                <div style={styles.canvasContainer}>
                    <ModelComponent />
                </div>
            </div>
            <div style={styles.textContainer}>
                {textsData.map((text, index) => (
                    <TextPreview key={index} text={text.content} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: '#333',
        overflow: 'auto', // Enable scrolling
        transition: 'padding-top 0.3s', // Smooth transition for content shift
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '20px',
    },
    title: {
        fontSize: '2.5rem',
        margin: '0',
        color: '#ff1e00', // Moderne, ansprechende Farbe für den Titel
    },
    subtitle: {
        fontSize: '1.2rem',
        marginTop: '10px',
        color: '#202020',
    },
    modelWrapper: {
        width: '80%',
        height: '50vh', // Adjust the height of the ModelComponent
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '20px',
        position: 'relative',
        //overflow: 'hidden',
    },
    canvasContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    textContainer: {
        width: '80%',
        marginTop: '20px',
    },
};

export default Home;