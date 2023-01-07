import React, { useEffect } from "react";
import icon from "../../assets/aua_small.png";
import cv from "../../assets/CV_AuTszNga_academic.pdf"
import './AboutMe.css'

import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section id='aboutMe' class='subSection'>
            <div class="container">
                <div class="row" data-aos="fade-left">
                    <div class="col-12 col-md-8 col-lg-8" id='aboutMeBox'>
                        <div class="sectionBox">
                            <h1 class='subHeading'>About Me</h1>
                            <p>
                                I am a fresh graduate from CUHK, majored in Mathematics and minored in Computer Science in my university studies~<br />
                                Currently, I am working as a data engineer.<br />
                                Besides, I love milk tea so much! It is soooooo tasty ♪( ´▽｀)
                            </p>
                            <a id="cv" href={cv}>Check out my CV</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-4">
                        <img id="icon" src={icon} alt="Emily Au photo"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe