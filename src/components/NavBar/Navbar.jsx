import '../NavBar/NavBar.css';


const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <div className='profilePic-div'>
                <div className='profile-div'>
                    <img className='profile-pic' src="images/profilepicUP.jpg" alt='profile picture'/>
                </div>
                <div className='name-title-div'>
                    <p>Cristian Contreras</p>
                </div>
            </div>
            <div className='ul-div'>
                <ul className="ul-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;