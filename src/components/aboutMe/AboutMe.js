import React, { useEffect } from "react";
import icon from "../../assets/emily_au_icon.jpg";
import resume from "../../assets/resume_EmilyAu.pdf"
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
                                Dedicated MSc student with a passion for Data Science and
                                seeking opportunities to leverage and enhance skills in developing Machine Learning Models and Data-Driven Solutions. <br /><br />

                                Currently, I am pursing master studies at the Univeristy of Alberta,
                                majoring in Mathematical and Statistical Sciences, specialization in Modelling, Data and Predictions<br /><br />

                                Before pursuing master studies, I worked as Data Engineer in Hong Kong for 1 year!
                            </p>
                            <a id="cv" href={resume}>Check out my Resume</a>
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

/*
Deleted intro
For undergraduate studies, I studied in Mathematics and Computer Science at The Chinese University of Hong Kong~<br />
<br />
Besides, I like milk tea and coffee so much. They are my spiritual food! ♪( ´▽｀)
*/

export default AboutMe