import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter onClick={() => window.open('https://www.instagram.com/officials_advik/', '_blank')}/>
    </div>
    <div>
      <FaFacebookF onClick={() => window.open('https://www.instagram.com/officials_advik/', '_blank')}/>
    </div>
    <div>
      <BsInstagram onClick={() => window.open('https://www.instagram.com/officials_advik/', '_blank')}/>
    </div>
  </div>
);

export default SocialMedia;
