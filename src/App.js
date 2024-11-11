import React from 'react';
import './App.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';


function App() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            {/* Other components like About, Projects, etc., go here */}
        </div>
    );
}

export default App;
