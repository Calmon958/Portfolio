import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="hero">
            <img
                src="images/profile.jpg"
                alt="Your profile"
                className="profile-image"
                style={{
                    width: isSmallScreen ? '100px' : '150px',
                    height: isSmallScreen ? '100px' : '150px',
                }}
            />
            <h1>Wilfred Njuguna</h1>
            <p>Full Stack Developer / Cyber Security </p>
            <p>Making the best we can with the technology we have.</p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Hero;


