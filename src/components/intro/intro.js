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
                <p className="introPara">I am a passionate and dedicated third-year Computer Science student, eager to share my journey and experiences<br></br> in the world of technology. Over the years, I have honed my skills, tackled challenging projects, and explored various facets of <br></br>computer science, all of which I am excited to present to you in this portfolio.</p>
                <a href="Resume.pdf" download="Devashish Jindal.pdf" className="resume" >Download Resume </a> 
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
    
}

export default Intro