import React, { useRef } from 'react';
import "../Style/contact.css";
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q4schvo', 'template_z8e26ah', form.current, 'wfYoK1Ldu8F3sH_g0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });   

          e.target.reset();
    }
    
    return (
        <div className='contact-wrapper' id='contact-me'>
            <h3 className="title">Contact</h3>
            <form ref={form} className='contact-form' onSubmit={sendEmail}>
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className='submit' />
            </form>
            <div className="information-wrapper">
                <div className="links">
                    <div className="github"><a href="https://github.com/andreiandro95" rel='noindex'><FontAwesomeIcon icon={faGithub} /></a></div>
                    <div className="linkedin"><a href="https://www.linkedin.com/in/andrei-andronachi-575923167/" rel='noindex'><FontAwesomeIcon icon={faLinkedin} /></a></div>
                </div>
                <div className="my-email"><FontAwesomeIcon icon={faAt} /> andrei.andronachi95@gmail.com</div>
            </div>
            
        </div>
    );
};

export default Contact;