import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Component
const Home = () => {
  return <h2>Home Page</h2>;
};

// About Component
const About = () => {
  return <h2>About Page</h2>;
};

// Contact Component
const Contact = () => {
  return <h2>Contact Page</h2>;
};

// App Component with Routing
const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
