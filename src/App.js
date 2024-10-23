import React from 'react';
import BrowserRouter from "./components/Router";
import ModelComponent from "./pages/ModelComponent";


// App Component with Routing
const App = () => {
    return (
        <div>
            <BrowserRouter></BrowserRouter>
            <div style={{height: '100vh', width: 'auto'}}>
                <ModelComponent/>
            </div>
        </div>
    );
};

export default App;
