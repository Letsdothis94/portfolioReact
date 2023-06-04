import React from "react";
import "../styles/Home.css";

const Home = () => {
    return (
        <main className="mainSection">
            <div className="introDiv">
                <h1 className="myName">hi i am cristian contreras</h1>
                <p className="home-p">A Web Developer building the Frontend of Websites and Web Applications that leads to the success of overall product</p>
                <div className="btn">
                    <a href="#projects">PROJECTS</a>
                </div>
            </div>
        </main>
    )
};

export default Home;