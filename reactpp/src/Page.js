import React, { useState } from 'react';
import Nav from './components/Nav';


export default function renderPage() {
    return (
        <div className="container max-w-screen-xl bg-white font-['Poppins', sans-serif]">
            <Nav />
        </div>
    );
}