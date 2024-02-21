import React from "react";
import "./skills.css";
import UIDesign from '../../assets/ui-design.png'
import MachineLearning from '../../assets/machine-learning.png'
// import { Fade } from 'react-reveal';
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">My Skills</span>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Developer</h2>
                        <p><span><b>Frontend Technologies:</b></span> Proficient in HTML, CSS, and JavaScript. Experienced with popular frontend frameworks such as React and Angular.</p>
                        <p><span><b>Backend Technologies:</b></span> Strong understanding of server-side development using Node.js, Express, and familiarity with serverless architectures.</p>
                        <p><span><b>Database Management:</b></span> Skilled in designing and managing relational databases (SQL) and NoSQL databases (MongoDB).</p>
                        <p><span><b>RESTful APIs:</b></span> Expertise in building and consuming RESTful APIs, ensuring efficient communication between the frontend and backend.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MachineLearning} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p><b>Data Preprocessing:</b> Strong ability to preprocess and clean datasets, including handling missing data, outlier detection, and feature scaling.</p>
                        <p><b>Deep Learning:</b> Skilled in developing neural networks using frameworks like TensorFlow and PyTorch for tasks such as image recognition, natural language processing, and more.</p>
                        <p><b>Model Evaluation:</b> Proficient in evaluating machine learning models using various metrics and techniques, including cross-validation and hyperparameter tuning.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills