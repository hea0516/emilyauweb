import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import cuSimulatorSample1 from "../../assets/cu_simulator_sample_1.png";
import quizdleSample1 from "../../assets/quizdle_sample.png";
import quizdleLogo from "../../assets/quizdle_logo.png";
import uropPresentation from "../../assets/UROP_Presentation_final_version.pdf";
import pmModelPresentation from "../../assets/572project_final.pdf"
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
                                Some of my projects:
                            </p>
                            <ul>
                                <li>Image Denoising Project - Investigate and Improve Perona Malik Model<br />
                                    <div class="row projectDescription">
                                        &nbsp; - Studied about Heat Equation Model and Perona Malik Model<br />
                                        &nbsp; - Reengineered Perona Malik Model and aimed to improve it by removing noise with high intensity difference<br />
                                        <a href={pmModelPresentation}>Presentation about Perona Malik Model</a>
                                        <br /><br />
                                    </div>
                                </li>
                                <li>Undergraduate Research Opportunity Program(UROP) Project<br />
                                    <div class="row projectDescription">
                                        &nbsp; - Studied Neural Network and Reduced Order Modelling to solve Computational Fluid Dynamics (CFD) Problem under supervision of Prof. Eric T.Chung<br />
                                        &nbsp; - Reengineered a research paper work and improve its efficiency and accuracy by constructing another neural network by TensorFlow in Python<br />
                                        <a href={uropPresentation}>Presentation in UROP Workshop 2020-21</a>
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
                                        <a href="https://github.com/KelvinChim-ComSci/csci3100-project">Github Repository <AiFillGithub /></a>
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