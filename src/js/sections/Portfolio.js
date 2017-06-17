import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import pihkvaLogo from '../../img/pihkva5-logo.png';
import tenguLogo from '../../img/tengupvp-logo.png';
import paperLogo from '../../img/papermc-logo.png';

export default class Portfolio extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div id="portfolio" className="o-container">
          <PortfolioItem
            image={pihkvaLogo}
            title="Pihkva 5"
            subtitle="esports logo"
            description="Pihkva 5, a local esports team, approached me in December 2016
            to get a new logo for their team. They wanted in the all so familiar
            esports style, and that’s what they got."
          />
          <PortfolioItem
            image={tenguLogo}
            title="TenguPvP"
            subtitle="server network logo"
            description="TenguPvP reached out to me in January 2017 to get a vector logo and
            icon combo made for their new server network in the familiar illustrated style."
          />
          <PortfolioItem
            image={paperLogo}
            title="PaperMC"
            subtitle="spigot-based server software"
            description="PaperMC held a contest back in May of 2016. They were looking for a clean
            logo to replace their old one. It was a fanstastic experience to design for a project
            that I personally use and enjoy."
          />
          
        </div>
      </div>
    );
  }
}
