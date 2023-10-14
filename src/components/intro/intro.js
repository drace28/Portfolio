import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, I'm </span>
                <span className="introName">Devashish Jindal</span><span className="introText">Software engineering student</span>
                <p className="introPara">I am a passionate and dedicated third-year Computer Science student, eager to share my journey and experiences<br></br> in the world of technology. Over the years, I have honed my skills, tackled challenging projects, and explored various facets of <br></br>computer science, all of which I am excited to present to you in this portfolio.</p>
                <Link><button className="btn"><img src={btnImg} alt="btnImg" className="btnImg" />Hire Me</button></Link> 
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
    
}

export default Intro