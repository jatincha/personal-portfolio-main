import React, { useRef } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import animationData from '../../lotties/contact.json';
import { Player } from '@lottiefiles/react-lottie-player';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dnhrfye', 'template_dqt7qsk', form.current, 'DjHZQNsT0iHPWW_nq');
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                    <div className='animation__container'>
                        <Player className='animation__item'
                            autoplay
                            loop
                            src={animationData}
                        >
                        </Player>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
            {/* <div className="container contact__container">
                <article className="contact__option">
                    <HiOutlineMail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>jatin200020@gmail.com</h5>
                    <a href="mailto:lucasyannul13@gmail.com">Email me!</a>
                </article>
                <article className="contact__option">
                    <BsLinkedin className='contact__option-icon' />
                    <h4>LinkedIn</h4>
                    <h5>in/jatin-chanchalani</h5>
                    <a href='https://www.linkedin.com/in/jatin-chanchalani-419546136/' target='_blank'>Message me on LinkedIn!</a>
                </article>
            </div> */}
        </section>
    );
}

export default Contact;