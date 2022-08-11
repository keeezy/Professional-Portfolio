import React from 'react';
import aldente from '../../images/projectimages/aldente.png'
import notetaker from '../../images/projectimages/notetaker.png'
import oldegg from '../../images/projectimages/oldegg.png'

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
        name: "Note Taker",
        image: notetaker,
        description: "Note Taker application that can be used to write and save notes",
        link: "https://pure-woodland-91033.herokuapp.com/",
    },

]

const worksMap = projects.map((work) => (
    <div className='text-center'id='project-data'>
        <div>
            <a href={work.link}>
                <h3>
                    {work.name}
                </h3>
            </a>
        </div>
        <a className="w-32"href={work.link}>
            <img className="object-cover"src={work.image} alt={work.name} />
        </a>
    </div>
))






export default function Projects() {

    return (
        <section className="grid mx-auto gap-16 pt-10"id='projects-container'>
            <h1 className="flex justify-center">
                Projects
            </h1>
            <div className="grid gap-10 grid-cols-3 " id='projects-list'>
                {worksMap}
            </div>
        </section>
    )
}