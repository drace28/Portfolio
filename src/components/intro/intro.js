import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import { useEffect } from "react";



const Intro = () => {
    useEffect(() => {
        const introContent = document.querySelector('.introContent');
        const introName = document.querySelector('.introName');
        const resumeButton = document.querySelector('.resume');

        const fadeIn = () => {
            introContent.style.opacity = '1';
            introName.style.opacity = '1';
            resumeButton.style.opacity = '1';
        };

        fadeIn(); // Trigger the fade-in effect on mount
    }, []);
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, I'm </span>
                <span className="introName">Devashish Jindal</span><span className="introText">Software engineering student</span>
                <p className="introPara">I am currently an Associate Manager at Strategyz Inc., where I've been gaining valuable experience in the industry for the past year.<br></br> My role involves strategic planning, project management, and driving key initiatives that align with our company's goals.<br></br> I am passionate about leveraging data-driven insights to enhance business strategies and optimize operations.<br></br> I am committed to delivering innovative solutions and achieving excellence in every project I undertake.</p>
                <a href="Resume.pdf" download="Devashish Jindal.pdf" className="resume" >Download Resume </a> 
            </div>
            
        </section>
    )
    
}

export default Intro