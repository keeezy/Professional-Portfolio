import React from 'react';

export default function Hero() {

    return (
        <section id="hero-container" className="grid grid md:grid-cols-2 box-border pt-32 items-center gap-x-8 md">
            <div id="home-data" className="ml-auto bg-slate-50 border border-black rounded-xl font-semibold pl-12 p-9">
                <p className="pt-6">Hello 👋, I'm Kevin.</p>
                <h1 className="text-5xl text-[#1E287F]">
                    Full Stack <br />
                    Developer
                </h1>
                <p className="py-3 ">
                    Always looking for more knowledge and
                    learning. 💻
                </p>
            </div>

            <div>
                <img
                    className="hidden md:flex"
                    src="../assets/images/kevinSelfie.png"
                />
            </div>
        </section>
    )
}