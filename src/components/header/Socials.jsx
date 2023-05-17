import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/jatin-chanchalani-419546136/" target='_blank'><BsLinkedin/></a>
       <a href="" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;