import React from "react";
import "../styles/Footer.css";
import { links } from "../data";

const Footer = () => {
    return (
        <footer className="footer-body">
            <div className="footer-flex">
                <div className="left-section">
                    <h2>Cristian Contreras</h2>
                    <p>A Web Developer building the Frontend of Websites and Web Applications that leads to the success of overall product</p>
                </div>
                <div className="right-section">
                    <h2>SOCIAL</h2>
                    <ul className="footer-ul">
                        {
                            links.map((link) => {
                                const {id, url, icon, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url} target="blank">{icon}{text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <p className="copyright">© Copyright 2023. Made by Cristian Contreras</p>       
        </footer>
    )
}

export default Footer;