import React from 'react';
// import { useRef, useState } from 'react';

export default function Nav() {

    return (
        <header className="md:w-full bg-white py-4 fixed font-semibold">
            <nav id="navContainer" className="flex items-center">
                <a id="navbar-logo" href="#" className="flex items-center ml-auto text-2xl ">
                    <span>Kevin Lazaro</span>
                </a>
                <div id="nav-menu" className="bg-white m-auto text-lg">
                    <ul className="flex space-x-10">
                        <li class="nav_item">
                            <a href="#" >Home</a>
                        </li>
                        <li class="nav_item">
                            <a href="#" >About</a>
                        </li>
                        <li class="nav_item">
                            <a href="#" >Projects</a>
                        </li>
                        <li class="nav_item">
                            <a href="#" >Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}