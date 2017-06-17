import React from 'react';
import PropTypes from 'prop-types';

export default function PortfolioImage(props) {
  return (
    <div className="portfolio-image">
      <img className={"main-image " + (props.animate ? "animate" : "")} src={props.image} alt=""></img>
      <div className={"blur-background " + (props.animate ? "animate" : "")}>
        <img className="blur-image" src={props.image} alt=""></img>
      </div>
    </div>
  )
}

PortfolioImage.propTypes = {
  image: PropTypes.string.isRequired,
  animate: PropTypes.bool
}

PortfolioImage.defaultProps = {
  animate: false
}
