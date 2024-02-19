import React, { useEffect } from "react";
import icon from "../../assets/reservoir_islands_221224.png";
import './Interest.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Interest = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section id='interest' class='subSection' >
            <div class="container">
                <div class="row" data-aos="fade-right">
                    <div class="col-12 col-md-6">
                        <img id="reservoirIslands" src={icon} alt="reservoir_islands_221224"></img>
                        <p id="photoDescription">The Reservoir Island Viewpoint, Hong Kong, 24.12.22</p>
                    </div>
                    <div class="col-12 col-md-6" id='interestBox'>
                        <div class='sectionBox'>
                            <h1 class='subHeading'>Interests</h1>
                            <p>
                                I like to explore and learn new knowledge about Data Analysis and Machine Learning! (｀・ω・´)<br /><br />
                                It is interesting to investiagte different Mathematical approaches and Computing Techniques <br /><br />
                                Also, I like hiking and listening to music as they helped me to relax~
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Interest