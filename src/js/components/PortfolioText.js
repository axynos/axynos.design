import React from 'react';
import PropTypes from 'prop-types';

export default function PortfolioText(props) {
  return (
    <div className={"portfolio-text  " + (props.animate ? "animate" : "")}>
      <h1 className="u-text-center u-text-left@md">{props.title}</h1>
      <h4 className="u-text-center u-text-left@md">{props.subtitle}</h4>
      <p className="u-text-center u-text-left@md">{props.description}</p>
    </div>
  )
}

PortfolioText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animate: PropTypes.bool
}

PortfolioText.defaultProps = {
  animate: false
}
