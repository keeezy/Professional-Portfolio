import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About'


export default function renderPage() {
    return (
        <div className="px-6 bg-white font-['Poppins', sans-serif]">
            <div>
                <Nav />
            </div>
            <div className="flex justify-center items-center flex-col">
                <Hero />
                <About />
            </div>
            
        </div>
    );
}