import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling
import instaIcon from './images/instagram-svgrepo-com (2).svg';
import gitIcon from './images/github-142-svgrepo-com.svg';
import linkedIcon from './images/linkedin-svgrepo-com.svg';


function Footer() {
  return (
      <div className="footer">
          <a href="https://instagram.com/amaansii" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon}/>
          </a>
          <a href="https://github.com/AmaanSiddiqi" target="_blank" rel="noopener noreferrer">
              <img src={gitIcon}/>
          </a>
          <a href="https://www.linkedin.com/in/amaan-siddiqi-38b7021b0/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIcon}/>
          </a>
      </div>
  );
}

export default Footer;
