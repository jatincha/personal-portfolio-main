import React from 'react';
import './Home.css';
import Resume from '../../assests/resume.pdf';

const Action = () => {
  return (
    <div>
    <div className='paralax'>   
        <div className='paralax-item p-item1'></div>
        <div className='paralax-item p-item2'></div>
        <div className='paralax-item p-item3'></div>
        <div className='paralax-item p-item4'></div>
    </div>
    <div className='container'>
        <div className='content-header'>
            <h1>Front</h1><h2>-</h2><h3>End</h3><h2>+</h2><h1>Back</h1><h2>-</h2><h3>End</h3>
        </div>
    </div>
    <div className='content'>
        <img src="me.png" alt=''></img>
    </div>
    </div>
  )
}

export default Action;