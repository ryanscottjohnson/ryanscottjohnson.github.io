import React from 'react';
import { connect } from 'react-redux';

import '../style/aboutMe.scss';

class AboutMe extends React.Component {
    render() {
        return <section id="about">
            <div id="about-links">
                <a href="mailto:ryanscottjohnson02@gmail.com">Email</a> | 
                <a href="www.linkedin.com/in/ryanscottjohnson">LinkedIn</a> | 
                <a href="https://github.com/ryanscottjohnson">GitHub</a> |
                <a href="https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing">Resume</a>
            </div>
            {/* hipster ipsm */}
            <p>Narwhal PBR&B wayfarers, distillery aesthetic succulents readymade stumptown lomo cloud bread neutra you probably haven't heard of them. Tilde taiyaki occupy ugh iPhone you probably haven't heard of them, health goth coloring book vape quinoa knausgaard cornhole tumeric banjo vegan.
                
             Fam selvage tbh sartorial. Banjo before they sold out cronut, bitters echo park photo booth blue bottle chambray yr. Live-edge gluten-free kickstarter asymmetrical. Letterpress next level gochujang woke bitters occupy. Kogi +1 hexagon next level distillery, activated charcoal hot chicken pinterest.
             
             Art party raw denim subway tile, iceland forage everyday carry DIY meditation mlkshk deep v. Lumbersexual intelligentsia whatever green juice helvetica ethical thundercats chia narwhal iceland retro listicle. 
             </p>
        </section>
    }
}