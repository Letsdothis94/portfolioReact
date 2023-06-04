import React from "react";
import "../styles/Projects.css";
import { projects } from "../data";

const Projects = () => {
    console.log(projects)
    return (
        <section className="projects-Section" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <span className="sub-About">
                    "Here you will find some of the personal and clients projects that I
                    created recentlty"
                </span>
            </div>
            <ul>
                {
                    projects.map((project) => {
                        const { id, url, title, image } = project;
                        return (
                            <li key={id} className="project-row">
                                <div className="description">
                                    <h3>{title}</h3>
                                </div>
                                <div className="img-pro">
                                    <a href={url} target="_blank">
                                        <img src={image} alt={title}></img>
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> 
            <hr />
        </section>
    )
};

export default Projects;