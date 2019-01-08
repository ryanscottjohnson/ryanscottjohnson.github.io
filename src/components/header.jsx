import React from 'react';

import FontAwesome from 'react-fontawesome';

import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
        <nav class="header-nav">
          {/* <img src="/src/images/coffee.png" alt="Ryan Logo" id="logo"/> */}
          <div class="nav-links">
            <a id="about-link" href="#about-section">
              <FontAwesome name="user-tie" size="2x" />
            </a>
            <a href="mailto:ryanscottjohnson02@gmail.com">
              <FontAwesome name="at" size="2x" />
            </a>
            <a href="https://www.https://www.linkedin.com/in/ryanscottjohnson/">
            <span size="10x">
            <i class="fab fa-linkedin"></i>
            </span>
              {/* <FontAwesome name="fab fa-linkedin" size="2x" /> */}

            </a>
            <a href="https://github.com/ryanscottjohnson">
            <i class="fab fa-github"></i>
              {/* <FontAwesome name="code" size="2x" /> */}
            </a>
            <a href="https://docs.https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing.com/document/d/18TJfPpLyXWLke-iZx0MA0V2IJn9cA8BvoQGr4VBfiu0/edit?usp=sharing">
              <FontAwesome name="file" size="2x" />
            </a>
          </div>
        </nav>
        <div id="hero-block">
          <img src="/src/images/coffee.png" alt="Ryan Avatar" id="avatar"/>
          <div className="cta-block">
            <h1>Software Developer</h1>
            <h3>Background in Education and Software Development</h3>
            <a href="mailto:ryanscottjohnson02@gmail.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </div>
      </header>
  }
}

export default Header;