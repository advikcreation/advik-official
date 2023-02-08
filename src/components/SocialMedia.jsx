import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsInstagram onClick={() => window.open('https://www.instagram.com/officials_advik/', '_blank')}/>
    </div>
    <div>
      <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/advikofficial', '_blank')}/>
    </div>
    <div>
      <BsTwitter onClick={() => window.open('https://www.instagram.com/officials_advik/', '_blank')}/>
    </div>
    
  </div>
);

export default SocialMedia;
