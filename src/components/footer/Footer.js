import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import './Footer.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div id="footer">
            <footer>
                <div className='logo'>
                    <a href="https://github.com/hea0516" alt="https://github.com/hea0516"><AiFillGithub size={25} /></a>
                    <a href="https://www.linkedin.com/in/tsz-nga-au-535084229/" alt="https://www.linkedin.com/in/tsz-nga-au-535084229/"><AiFillLinkedin size={25} /></a>
                </div>
                <menu>
                    <ul className='nav-links'>
                        <li>Email: emilyaua10@gmail.com </li>
                    </ul>
                </menu>
            </footer>
        </div>
    )
}

export default Footer