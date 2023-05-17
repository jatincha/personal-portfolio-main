import React from 'react';
import './About.css';
import ME from '../../assests/me.png';
import { BiMedal, BiUser, BiFolder } from 'react-icons/bi';
import animationData from '../../lotties/profile.json';
import { Player } from '@lottiefiles/react-lottie-player';

const About = () => {
    return (
        <section id='about'>
            {/* <h5>Get to know</h5> */}
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <Player className='animation__item'
                        autoplay
                        loop
                        src={animationData}
                    >
                    </Player>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiMedal className='about__icon' />
                            <h5>Experience</h5>
                            <small>1 Year 6 month</small>
                        </article>
                        <article className='about__card'>
                            <BiUser className='about__icon' />
                            <h5>Education</h5>
                            <small>Anand International College of Engineering<br />B.Tech. CSE</small>
                        </article>
                        <article className='about__card'>
                            <BiFolder className='about__icon' />
                            <h5>Hobbies</h5>
                            <small>Sketching,Painting Basketball & Coding</small>
                        </article>
                    </div>
                    <p>
                        I have experience of development,
                        designing, and database management expertise. I
                        am a trained and experienced web and app
                        developer.
                        I'm imaginative, have strong analytical and
                        problem-solving abilities, and I'm a detail-oriented
                        team player.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;