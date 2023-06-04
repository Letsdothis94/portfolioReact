import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <section className="aboutSection" id="about">
            <h2 className="h2About">ABOUT ME</h2>
            <p className="sub-About">"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"</p>
            <div className="aboutGrid">
                <div className="know-me">
                    <h3>Get to know me!</h3>
                    <div>
                        <p>I'm a <strong>Frontend Web Developer</strong> building the client side of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                        <p>I also like to share content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="#">Linkedin</a> where I post useful content related to Web Development and Programming.</p>
                        <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                    </div>
                    <div className="btn">
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
                <div className="mySkills">
                    <h3>My Skills</h3>
                    <div className="skillBoxes">
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>HTML</div>
                        <div>Ruby</div>
                        <div>Ruby on Rails</div>
                        <div>NodeJS</div>
                        <div>Express</div>
                        <div>CSS</div>
                        <div>Github</div>
                        <div>Git</div>
                        <div>CLI</div>
                        <div>Tailwind CSS</div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
};

export default About;