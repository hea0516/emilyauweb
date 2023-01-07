import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    //const [showMenu, setSho]
    return (
        <nav className='container navbar'>
            <div className='logo'>
            </div>
            <menu>
                <ul className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutMe">About Me</a></li>
                    <li><a href="#interest">Interests</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#footer">Contact Me</a></li>
                </ul>
            </menu>
        </nav>
    )
}

export default Navbar
