import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero'


export default function renderPage() {
    return (
        <div className="flex justify-center px-6 bg-white font-['Poppins', sans-serif]">
            <Nav />
            <Hero />
        </div>
    );
}