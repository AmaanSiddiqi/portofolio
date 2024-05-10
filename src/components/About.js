import React, { useState } from 'react';
import './About.css';
import SkillCarousel from './SkillCarousel';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function About() {

    const [aboutText] = useTypewriter({
    words: ['About Me'],
    loop: 1, // Loop once
    delaySpeed: 2000
  });

  const [languagesText] = useTypewriter({
    words: ['Languages I Use'],
    loop: 1, // Loop once
    delaySpeed: 1700
  });
 return (
     <div>
         <div className="about-me">
             <h2>{aboutText}<Cursor cursorColor='black'/></h2>
             <p style={{fontFamily: 'Courier New, monospace', fontSize: '18px', fontWeight: 'bold'}}>I am a fourth-year
                 Computer Engineering
                 student at the University of British Columbia.<br/><br/>
                 I am particularly interested in projects involving machine learning and its applications in the real
                 world,<br/><br/> especially on
                 actual hardware. Outside of my studies and projects, I enjoy hitting the gym,<br/><br/> traveling, and
                 discovering the latest culinary delights that Vancouver has to offer.</p>
         </div>
         <div className={"languages"}>
             <h2>{languagesText}<Cursor cursorColor='black'/></h2>
         </div>
         <div className="skill-carousel-container">
         <SkillCarousel/>
         </div>
     </div>
 );
}

export default About;
