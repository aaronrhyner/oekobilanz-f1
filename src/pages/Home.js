import React, { useState } from "react";
import ModelComponent from "./ModelComponent";

const Home = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div style={{ ...styles.container, paddingTop: isMenuOpen ? '200px' : '0' }}>
            {isMenuOpen && (
                <nav style={styles.menu}>
                    <ul style={styles.menuList}>
                        <li style={styles.menuItem}><a href="#home" style={styles.menuLink}>Home</a></li>
                        <li style={styles.menuItem}><a href="#environment" style={styles.menuLink}>Environment Impact</a></li>
                        <li style={styles.menuItem}><a href="#authors" style={styles.menuLink}>Authors</a></li>
                        {/* Add more menu items as needed */}
                    </ul>
                </nav>
            )}
            <button style={styles.menuButton} onClick={toggleMenu}>
                ☰ {/* Menu icon */}
            </button>

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
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: '#333',
        overflow: 'hidden',
        transition: 'padding-top 0.3s', // Smooth transition for content shift
    },
    menuButton: {
        position: 'fixed',
        top: '20px',
        left: '20px',
        fontSize: '1.5rem',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: '1001', // Ensure the button stays above other elements
    },
    menu: {
        left: '0',
        width: '100%',
        backgroundColor: '#007bff',
        color: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        textAlign: 'left',
    },
    menuList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    menuItem: {
        padding: '10px 0',
        fontSize: '1.2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    },
    menuLink: {
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    title: {
        fontSize: '2.5rem',
        margin: '0',
        color: '#007bff',
    },
    subtitle: {
        fontSize: '1.2rem',
        marginTop: '10px',
        color: '#6c757d',
    },
    modelWrapper: {
        width: '80%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
    },
    canvasContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
};

export default Home;
