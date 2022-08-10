import React from 'react';
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa"; 
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Hero() {

    return (
        <section id="hero-container" className="grid md:grid-cols-2 box-border pt-32 items-center gap-x-4 md">
            <motion.div id="home-data" className="ml-auto bg-[#FBFBFB] border border-[#D1D1D1] rounded-xl font-semibold pl-12 p-9"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: .3 }}>
                <p className="">Hello 👋, I'm Kevin.</p>
                <h1 className="text-5xl text-[#1E287F]">
                    Full Stack <br />
                    Developer
                </h1>
                <p className="py-6 ">
                    Always looking for more knowledge and
                    learning. 💻
                </p>
                <div className="flex space-x-4 ">
                    <a href="https://www.github.com/keeezy" target="_blank">
                        <FaGithub style={{ color: '#9c9c9c', fontSize: '2rem' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-lazaro-b0aa08231/" target="_blank">
                        <FaLinkedinIn style={{ color: '#9c9c9c', fontSize: '2rem' }} />
                    </a>
                    <a href="https://www.instagram.com/keezylazaro/" target="_blank">
                        <FaInstagram style={{ color: '#9c9c9c', fontSize: '2rem' }} />
                    </a>
                    <a href="https://twitter.com/Keezylazaro" target="_blank">
                        <FaTwitter style={{ color: '#9c9c9c', fontSize: '2rem' }} />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: .5, type: "spring", duration: 3, bounce: .4, }}
            >
                <img
                    className="hidden md:flex mx-auto"
                    src="../assets/images/kevinSelfie.png"
                />
            </motion.div>
        </section>
    )
}