import React from "react";

import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/cristian-contreras-219888251/',
        text: 'Linkedin',
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        url: 'https://github.com/Letsdothis94',
        text: 'Github',
        icon: <FaGithub />,
    },
];

export const projects = [
    {
        id: 1,
        url: 'https://letsdothis94.github.io/encriptador/',
        title: 'Encriptador de Palabras Alura',
        image: 'images/encriptadorReadme.png',
    },
    {
        id: 2,
        url: 'https://letsdothis94.github.io/TheMixologistAPI/',
        title: 'The~Mixologist, "Cocktail library"',
        image: 'images/cocktailsAPI.png',
    },
    {
        id: 3,
        url: 'https://github.com/Letsdothis94/gtApp',
        title: 'GT-App, "Getting people together"',
        image: 'images/gt_app.png',
    },
    {
        id: 4,
        url: 'https://github.com/Letsdothis94/boringApp',
        title: 'The Boring App',
        image: 'images/chat.png',
    },
];
