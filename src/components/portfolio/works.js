import React from "react";
import ProjectCard from './ProjectCard';
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
            <h2 className="worksTitle">Projects</h2>
            <p>Here are some projects I have worked on:</p>
            
            <div className="projectContainer"> 
                <ProjectCard
                    
                    title="NewsBuzz"
                    githubLink="https://github.com/drace28/NewsBuzz"
                    liveLink="https://news-buzz-git-main-draces-projects.vercel.app/register"
                    description="A news app that provides the latest news from around the world. It uses the NewsAPI to fetch news articles and display them to the user. The user can also search for news articles based on keywords."
                />
            </div>
        </section>
    );
}

export default Works;