import React from 'react';
import SocialButton from '../components/SocialButton';
import twitterIcon from '../../svg/social/twitter.svg';
import behanceIcon from '../../svg/social/behance.svg';
import discordIcon from '../../svg/social/discord.svg';
import mcmarketIcon from '../../svg/social/mcmarket.svg';

export default function Contact() {
  return (
    <div id="contact">
      <div className="contact-text-container">
        <h2 className="u-text-center">Like what you see?</h2>
        <h3 className="u-text-center">check these out</h3>
      </div>
      <div className="social-icons">
        <SocialButton 
          link="https://twitter.com/axynos" 
          image={twitterIcon} 
          alt="twitter"
          label="@axynos" />
        <SocialButton 
          link="https://behance.net/axynos" 
          image={behanceIcon} 
          alt="behance"
          label="axynos" />
        <SocialButton 
          image={discordIcon} 
          alt="discord"
          label="axynos#0973" />
          <SocialButton 
            link="http://bit.ly/axynos-site-shop" 
            image={mcmarketIcon} 
            alt="mcmarket thread"
            label="mcm thread" />
      </div>
    </div>
  )
}
