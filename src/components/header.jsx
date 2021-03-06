import React from 'react';

import FontAwesome from 'react-fontawesome';

import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
        <nav class="header-nav">
          <div class="nav-links">
            <a id="about-link" href="#about-section">
              <FontAwesome name="user-tie" size="2x" />
            </a>
            <a id="email" href="mailto:ryanscottjohnson02@gmail.com">
              <FontAwesome name="at" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ryanscottjohnson/">
            <FontAwesome name="users" size="2x" />
            </a>
            <a href="https://github.com/ryanscottjohnson">
              <FontAwesome name="code" size="2x" />
            </a>
            <a href="https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing">
              <FontAwesome name="file" size="2x" />
            </a>
          </div>
        </nav>
        <div id="hero-block">
          <img src="/src/images/ryan_circle.JPG" alt="Ryan Avatar" id="avatar"/>
          <div className="cta-block">
            <h1>Software Developer</h1>
            <h3>Born and Raised Washingtonian <br/>
                with a background in Education <br/>
                Husband of 11 years &#38; Father of two </h3>
            
            <a href="mailto:ryanscottjohnson02@gmail.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </div>
      </header>
  }
}

export default Header;