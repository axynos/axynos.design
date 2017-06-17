import React, { Component } from 'react';
import poster from '../../img/poster.jpg';
import video_webm from '../../video/head-bg.webm';
import video_mp4 from '../../video/head-bg.mp4';

class Header extends Component {
  render() {
    return (
      <div id="landing">

        {/* TODO: Implement IE8 HTML5 fallback */}
        <div className="header-container">
          <div id="overlay"></div>
          <video id="bgVideo" playsInline autoPlay muted loop poster={poster}>
            <source src={video_webm} type="video/webm"></source>
            <source src={video_mp4} type="video/mp4"></source>
          </video>

          <div className="heading-container">
            <div className="text-container">
              <h1>Silver Sten Kruus</h1>
            </div>
            <div className="text-container">
              <h4>designer // developer</h4>
            </div>
          </div>

          <div id="scrollDown-container">
            <i className="material-icons">keyboard_arrow_down</i>
          </div>


        </div>
      </div>
    );
  }
}

export default Header;
