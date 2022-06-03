import React from "react";
import "./Landing.css";
import {
    BsInstagram,
    BsFacebook,
    BsLinkedin,
    BsGithub
} from "react-icons/bs";

const Landing = () => {
    return (
        <div className="rotated-parent">
            <div className="row h-100 align-items-center">
                <div className="col-md-6">
                    <div className="lg:h-75 lg:p-5 md:h-50 md:p-0 sm:p-0 sm:h-50">
                        <lottie-player
                            src="https://assets10.lottiefiles.com/private_files/lf30_fqygznk9.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="rotated-text-part">
                        <h1
                            data-aos="slide-right"
                            data-aos-duration='1000'
                        >
                            <b>AFNAN</b>
                        </h1>
                        <p
                            data-aos="slide-left"
                            data-aos-duration='1300'
                        >
                            MERN stack <b />Developer
                        </p>
                        <div 
                        data-aos="slide-right"
                        data-aos-duration='900'
                        className="icons-container">
                        <a className="icons" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/afnanferdousi130/"><BsInstagram /></a>
                        <a className="icons" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/profile.php?id=100076214209550"><BsFacebook /></a>
                        <a className="icons" target="_blank" rel="noreferrer noopener" href="https://www.aedin.com/in/afnanferdousi550/"><BsLinkedin /></a>
                        <a className="icons" target="_blank" rel="noreferrer noopener" href="https://github.com/AfnanFerdousi"><BsGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;