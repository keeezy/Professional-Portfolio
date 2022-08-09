import React from 'react';
import { motion, Variants } from "framer-motion"
export default function Hero() {

    return (
        <section id="hero-container" className="grid md:grid-cols-2 box-border pt-32 items-center gap-x-4 md">
            <motion.div id="home-data" className="ml-auto bg-slate-50 border border-black rounded-xl font-semibold pl-12 p-9"
            initial={{x:-100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.3, delay:.3}}>
                <p className="">Hello 👋, I'm Kevin.</p>
                <h1 className="text-5xl text-[#1E287F]">
                    Full Stack <br />
                    Developer
                </h1>
                <p className="py-6 ">
                    Always looking for more knowledge and
                    learning. 💻
                </p>
            </motion.div>

            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.3, delay:.5}}>
                <img
                    className="hidden md:flex mx-auto"
                    src="../assets/images/kevinSelfie.png"
                />
            </motion.div>
        </section>
    )
}