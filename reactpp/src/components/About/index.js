import React from 'react';
import { motion } from "framer-motion";
import gitHubLogo from "../../images/icons/githublogo.svg"
import linkedInLogo from "../../images/icons/linkedinlogo.svg"
import heroImage from "../../images/heroImage.png"

const parentVariant = {
    initial: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transtion: {
            staggerChildren: .2
        }
    }
}

const childvariant = {
    intial: {}
}
export default function About() {
    return (
        <motion.section id="hero-container" className="grid md:flex justify-center mx-auto gap-16 pt-10 items-center mx-auto ">
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
            <motion.div id="about-data" className=" font-semibold pl-12 p-9"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: .3 }}>
                <h1 className="text-7xl text-[#1E287F] font-bold">
                    About Me.
                </h1>
                <h2 className="text-xl flex py-6">Hello, I'm currently a student at UCI's <br />
                full stack web development program
                    <motion.div
                        animate={{ rotate: 90 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
                    >👋</motion.div>
                </h2>
                <p className="py-6 text-lg ">
                    Always looking for more knowledge and
                    learning. 💻
                </p>
                <motion.div className="flex space-x-4 "
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.3, delay: .6 }}>
                    <a href="https://www.github.com/keeezy" target="_blank">
                        {/* <img src={gitHubLogo} alt="github" /> */}
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-lazaro-b0aa08231/" target="_blank">
                    <img src={linkedInLogo} style={{ color: '#9c9c9c', fontSize: '2rem' }}fill="black" alt="linkedin" />
                    </a>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}