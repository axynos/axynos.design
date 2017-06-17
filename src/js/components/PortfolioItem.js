import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioImage from './PortfolioImage';
import PortfolioText from './PortfolioText';
import Waypoint from 'react-waypoint';

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    }
  }
  
  render() {
    return (
      <Waypoint
        onEnter={() => this.setState({ animate: true })}>
        
        <div className="portfolio-item o-grid o-container o-grid--center o-grid--middle">
          <div className="o-grid__col u-1/1@sm u-1/2@md u-1/3@lg u-mb-l u-mb-n@md portfolio-image-container">
            <PortfolioImage 
              animate={this.state.animate}
              image={this.props.image}
            />
          </div>
          
          <div className="o-grid__col u-1/1@sm u-1/2@md u-2/3@lg u-pl-n u-pl-l@md">
            <PortfolioText
              title={this.props.title}
              subtitle={this.props.subtitle}
              description={this.props.description}
              animate={this.state.animate}
            />
          </div>
        </div>
      </Waypoint>
    )
  }
}

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string
}

PortfolioItem.defaultProps = {
  animate: false
}
