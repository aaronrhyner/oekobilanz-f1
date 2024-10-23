import React from "react";
import ModelComponent from "./ModelComponent";


const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', marginTop: '20px' }}> {/* Flexbox-Zentrierung und Abstand nach oben */}
            <div style={{ width: '80%', height: '80%' }}> {/* Feste Größe für das Modell */}
                <ModelComponent />
            </div>
        </div>
    );
};
export default Home;
