import React from 'react';
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import heroImage from "../../images/heroImage.png"
export default function Hero() {

    return (
        <section id="hero-container" className="grid md:flex gap-16 pt-32 items-center mx-auto ">
            <motion.div id="home-data" className=" bg-[#FBFBFB] border border-[#D1D1D1] rounded-xl font-semibold pl-12 p-9"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: .3 }}>
                <p className="text-lg flex">Hello
                    <motion.div
                    animate={{rotate:90}}
                    transition={{ repeat: Infinity, duration: 1, repeatType:"mirror" }}
                    >👋</motion.div>, I'm Kevin.
                </p>
                <h1 className="text-7xl text-[#1E287F] font-bold">
                    Full Stack <br />
                    Developer
                </h1>
                <p className="py-6 text-lg ">
                    Always looking for more knowledge and
                    learning. 💻
                </p>
                <motion.div className="flex space-x-4 "
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.3, delay: .6 }}>
                    <a href="https://www.github.com/keeezy" target="_blank">
                        <FaGithub style={{ color: '#9c9c9c', fontSize: '2rem' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-lazaro-b0aa08231/" target="_blank">
                        <FaLinkedinIn style={{ color: '#9c9c9c', fontSize: '2rem' }} />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: .5, type: "spring", duration: 3, bounce: .4 }}
            >
                <img
                    className="hidden md:flex h-[32rem]"
                    src={heroImage}
                />
            </motion.div>
        </section>
    )
}