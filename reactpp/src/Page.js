import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'


export default function renderPage() {
    return (
        <div className="px-6 bg-white font-['Poppins', sans-serif]">
            <Nav />
            <div className="container flex flex-col justify-center mx-auto">
                <Hero />
                <About />
                <Projects />
            </div>
        </div>
    );
}