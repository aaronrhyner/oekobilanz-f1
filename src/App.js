import React, {useState} from 'react';
import MyBrowserRouter from "./components/Router";

// App Component with Routing
const App = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (<div>
        {isMenuOpen && (<nav style={styles.menu}>
            <ul style={styles.menuList}>
                <li style={styles.menuItem}><a href="/" style={styles.menuLink}>Home</a></li>
                <li style={styles.menuItem}><a href="/flashcards" style={styles.menuLink}>Flashcards</a></li>
                <li style={styles.menuItem}><a href="/quiz" style={styles.menuLink}>Quiz</a></li>
            </ul>
        </nav>)}
        <button style={styles.menuButton} onClick={toggleMenu}>
            ☰ {/* Menu icon */}
        </button>
        <MyBrowserRouter/>
    </div>);
};

const styles = {
    menuButton: {
        position: 'fixed',
        top: '20px',
        left: '20px',
        fontSize: '1.5rem',
        padding: '10px',
        backgroundColor: '#4b7543',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: '1001', // Ensure the button stays above other elements
    }, menu: {
        left: '0',
        width: '100%',
        backgroundColor: '#4b7543',
        color: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        textAlign: 'left',
    }, menuList: {
        listStyle: 'none', padding: '0', margin: '0',
    }, menuItem: {
        padding: '10px 0', marginLeft: '100px', fontSize: '1.2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    }, menuLink: {
        color: 'white', textDecoration: 'none', cursor: 'pointer',
    },
}
export default App;
