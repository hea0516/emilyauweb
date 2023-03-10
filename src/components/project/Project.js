import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import cuSimulatorSample1 from "../../assets/cu_simulator_sample_1.png";
import quizdleSample1 from "../../assets/quizdle_sample.png";
import quizdleLogo from "../../assets/quizdle_logo.png";
import uropPresentation from "../../assets/UROP_Presentation_final_version.pdf";
import './Project.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section id='project' className='subSection'>
            <div class="container">
                <div class="row" data-aos="fade-left">
                    <div class="col-12" id='projectBox'>
                        <div class="sectionBox">
                            <h1 class='subHeading'>Projects</h1>
                            <p>
                                Some of my course projects:
                            </p>
                            <ul>
                                <li>Undergraduate Research Opportunity Program(UROP) Project<br />
                                    <div class="row projectDescription">
                                        &nbsp; - Studied about using Neural Network and Reduced Order Modelling to solve Computational Fluid Dynamics Problem under supervision of Prof. Eric T.Chung<br />
                                        &nbsp; - Reengineered a research paper work and improve its efficiency and accuracy by constructing another neural network<br />
                                        <a href={uropPresentation}>Presentation Slides in UROP Workshop 2020-21</a>
                                        <a href="https://github.com/CheukHinHoJerry/UROP">Github Repository <AiFillGithub /></a>
                                        <br /><br />
                                    </div>
                                </li>
                                <li>CU Simulator<br />
                                    <div class="row projectDescription">
                                        &nbsp; - A Strategy Game for experiencing university life in The Chinese University of Hong Kong (CUHK)<br />
                                        &nbsp; - Player can create his / her own character and go through different events in CUHK<br />
                                        <div class="samplePic">
                                            <img src={cuSimulatorSample1} alt="CU Simulator Sample Pic"></img>
                                        </div>
                                        <a href="https://csci3100-game.herokuapp.com/">Play!</a>
                                        <br /><br />
                                    </div>
                                </li>
                                <li>Quizdle<br />
                                    <img id="quizdleLogo" src={quizdleLogo} alt="Quizdle App Icon"></img>

                                    <div class="row projectDescription">
                                        &nbsp; - A Multiple Choice Quiz Game for Android<br />
                                        &nbsp; - Players can create and answer different question sets to gain knowledge in different aspects<br />
                                        <div class="samplePic">
                                            <img id="quizdle" src={quizdleSample1} alt="Quizdle Sample Pic"></img>
                                        </div>
                                        <a href="https://github.com/panliu0310/Quizdle">Github Repository <AiFillGithub /></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Project