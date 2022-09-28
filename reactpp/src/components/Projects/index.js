import React from 'react';
import { motion } from "framer-motion";
import aldente from '../../images/projectimages/aldente.png'
import notetaker from '../../images/projectimages/notetaker.png'
import oldegg from '../../images/projectimages/oldegg.png'
import NFTScheduler from '../../images/projectimages/NFTpic.png'
const projects = [
    {
        name: "Al Dente",
        image: aldente,
        description: "Recipes that fit your ingredients",
        link: "https://keeezy.github.io/Al-Dente/",
    },
    {
        name: "OldEgg",
        image: oldegg,
        description: "Tech E-Commerce application that sells electronics",
        link: "https://oldegg.herokuapp.com/",
    },
    {
        name: "NFT Scheduler",
        image: NFTScheduler,
        description: "Scheduler application",
        link: "https://nofreetoes.herokuapp.com/",
    },

]

const containerVariantBox = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .3
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100

    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: .2,
            duration: 1.3,
        }
    }
}

const worksMap = projects.map((work) => (
    <motion.div variants={childVariants} className='text-center border border-[#D1D1D1] bg-[#FBFBFB] rounded-3xl' id='project-data'>
        <div>
            <a href={work.link}>
                <h3 className="font-bold text-xl pt-6">
                    {work.name}
                </h3>
            </a>
        </div>
        <a className="" href={work.link}>
            <img className="h-80 p-10 rounded-[50px]" src={work.image} alt={work.name} />
        </a>
        <p className="font-semibold text-base pb-6">
            {work.description}
        </p>
    </motion.div>
))






export default function Projects() {

    return (
        <motion.section className="grid mx-auto gap-16 pt-10" id='projects-container'
            variants={containerVariantBox}
            initial="hidden"
            whileInView="visible">
            <h1 className="flex justify-center text-5xl font-semibold">
                Projects
            </h1>
            <div className="md:grid gap-10 grid-cols-3" id='projects-list'>
                {worksMap}
            </div>
        </motion.section>
    )
}