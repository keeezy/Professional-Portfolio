import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero'


export default function renderPage() {
    return (
        <div className="px-8 bg-white font-['Poppins', sans-serif]">
            <Nav />
            <Hero />
        </div>
    );
}