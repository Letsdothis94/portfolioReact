import { React } from 'react';
import { useGlobalContext} from '../Context';


const Navbar = () => {
    return (
        <nav className='navBar'>
            <div className='profilePicDiv'>
                <img className='profile-pic' src="./src/images/profilepic.jpg" alt='profile picture'/>
            </div>
            <div className='devName'>
                <p>Cristian Contreras</p>
            </div>
            <div className='ulDiv'>
                <ul className="ulNav">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;