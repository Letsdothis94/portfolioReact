import { useEffect, useState } from "react";
import { projects } from "../../data";
import '../Projects/Projects.css';

const Projects = () => {
    const project = projects;
    const [index, setIndex] = useState(0);
    console.log(project);

    useEffect(() => {
        const lastIndex = project.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, project]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 9000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);
    console.log(index);

    return (
        <section className="projects-Section" id="projects">
            <div className="project-container">
                <h2>Projects</h2>
                <span className="sub-About">
                    &quot;Here you will find some of the personal and clients projects that I created recentlty&quot;
                </span>
            </div>
            <section className="section-center">
                {
                    project.map((project, projectIndex) => {
                        const { id, url, title, image } = project;
                        let position = 'nextSlide';
                        if (projectIndex === index) {
                            position = 'activeSlide';
                        }
                        if (projectIndex === index - 1 ||
                            (index === 0 && projectIndex === project.length - 1)
                            ) {
                                position = 'lastSlide';
                            }
                        return (
                            <article key={id} className={position}>
                                <div className="img-pro">
                                    <a href={url} target="_blank" rel="noreferrer">
                                        <img src={image} alt={title}></img>
                                    </a>
                                </div>
                                <div className="description">
                                    <h3>{title}</h3>
                                </div>
                            </article>
                        )
                    })
                }
                <div className="prev" onClick={() => setIndex(index - 1)}>
                    <img src='images/double-arrow-left.png' alt="double arrow left"/>
                </div>
                <div className="next" onClick={() => setIndex(index + 1)}>
                    <img src='images/double-arrow-right.png' alt="double arrow right" />
                </div>
            </section> 
            <hr />
        </section>
    )
};

export default Projects;