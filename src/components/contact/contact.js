import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser'
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import GithubIcon from "../../assets/github-logo.png"
import InstagramIcon from "../../assets/instagram.png"


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a12j34o', 'template_7tjjhcb', form.current, 'vl0pHnwumLTXBVgiS')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill the form for contacting me</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name" className="name" name='from_name'/>
                    <input type="email" placeholder="Email" className="email" name="from_email"/>
                    <input type="text" placeholder="Subject" className="subject" name='subject'/>
                    <textarea placeholder="Message" className="msg" rows="5" name='message'></textarea>
                    <button type="submit" value='Send' className="submitBtn">Send</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="" className="link"></img>
                        <img src={TwitterIcon} alt="" className="link"></img>
                        <img src={GithubIcon} alt="" className="link"></img>
                        <img src={InstagramIcon} alt="" className="link"></img>
                    </div>
                </form>

            </div>
        </section>
    )
}
export default Contact;