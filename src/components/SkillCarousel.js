import React from 'react';
import Slider from 'react-slick';
import pythonImg from './images/python-127-svgrepo-com.svg';
import javaImg from './images/java-svgrepo-com.svg';
import jsImg from './images/javascript-155-svgrepo-com.svg';
import cImg from './images/c-plus-plus-14367.svg';
import './About.css'

function SkillCarousel() {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  centerMode: true, // Enables centered view where active slide is in the center
};


 const skills = [
    { name: "JavaScript", imagePath: jsImg, description: "Dynamic scripting language." },
    { name: "Python", imagePath: pythonImg, description: "High-level, versatile language." },
    { name: "Java", imagePath: javaImg, description: "Used in a wide variety of computing platforms." },
    { name: "C++", imagePath: cImg, description: "Used in a wide variety of computing platforms." },
  ];

  return (
      <div className="skill-carousel-container">
          <Slider {...settings}>
              {skills.map(skill => (
                  <div key={skill.name} style={{textAlign: 'center', padding: '10px'}}>
                      <img src={skill.imagePath} alt={skill.name} style={{width: "100px", height: "100px"}}/>
                      <h3>{skill.name}</h3>
                  </div>
              ))}
          </Slider>
      </div>
  );
}

export default SkillCarousel;
