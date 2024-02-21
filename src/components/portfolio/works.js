import React from "react";
import './works.css';
import newsbuzz from '../../assets/newsbuzz.png'
import techmo from '../../assets/techmo.png'
import minthub from '../../assets/minthub.png'
import texture from '../../assets/texture.png'
import galaxy from '../../assets/galaxy.png'
import Portfolio6 from "../../assets/portfolio-6.png";
const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">my Portfolio</h2>
            <span className="worksdesc">I take pride in smallest detail</span>
            <p>Some sample images of my work </p>
            <div className="worksimgs">
                <img src={newsbuzz} alt="" className="worksImg"></img>
                <img src={techmo} alt="" className="worksImg"></img>
                <img src={minthub} alt="" className="worksImg"></img>
                <img src={texture} alt="" className="worksImg"></img>
                <img src={galaxy} alt="" className="worksImg"></img>
                <img src={Portfolio6} alt="" className="worksImg"></img>
            </div>
            <button className="worksBtn">See more</button>
        </section>
    );
}

export default Works;