import React from 'react';
import PropTypes from 'prop-types';

export default function SocialButton(props) {
  return (
    <a href={props.link} className="social-button" target="_top">
      <img alt={props.alt} src={props.image}></img>
      {props.label}
    </a>
  )
}

SocialButton.propTypes = {
  link: PropTypes.string,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string
}
