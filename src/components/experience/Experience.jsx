import React from 'react';
import "./Experience.css";
import { FaReact, FaHtml5, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiCss3, SiSpringboot, SiCplusplus } from 'react-icons/si';
import { MdHttp } from 'react-icons/md';
import { TbBrandNextjs } from 'react-icons/tb';
import js from '../../lotties/js.json';
import angular from '../../lotties/angular.json';
import react from '../../lotties/react.json';
import css from '../../lotties/css.json';
import html from '../../lotties/html.json';
import git from '../../lotties/git.json';
import { Player } from '@lottiefiles/react-lottie-player';


const Experience = () => {
    return (
        <section id='experience'>
            <h5>Technology Stack</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front End</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <Player className='experience__details-icon'
                                autoplay
                                loop
                                src={react}
                            >
                            </Player>
                            <div className='experience__details-name'>
                                <h4>React.js</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <Player className='experience__details-icon'
                                autoplay
                                loop
                                src={js}
                            >
                            </Player>
                            <div className='experience__details-name'>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <Player className='experience__details-icon'
                                autoplay
                                loop
                                src={angular}
                            >
                            </Player>
                            <div className='experience__details-name'>
                                <h4>Angular</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                        <Player className='experience__details-icon'
                                autoplay
                                loop
                                src={html}
                            >
                            </Player>
                            <div className='experience__details-name'>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                        <Player className='experience__details-icon'
                                autoplay
                                loop
                                src={css}
                            >
                            </Player>
                            <div className='experience__details-name'>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                        <Player className='experience__details-icon'
                                autoplay
                                loop
                                src={git}
                            >
                            </Player>
                            <div className='experience__details-name'>
                                <h4>Git</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Back End</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaJava className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Java</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiSpringboot className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Spring Boot</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbBrandNextjs className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>Next.js</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <MdHttp className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>REST API</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiCplusplus className='experience__details-icon' />
                            <div className='experience__details-name'>
                                <h4>C / C++</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;