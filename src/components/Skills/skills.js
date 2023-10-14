import React from "react";
import "./skills.css";
import UIDesign from '../../assets/ui-design.png'
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
                        <h2>Frontend/Backend</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
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