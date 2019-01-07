import React from 'react';

import FontAwesome from 'react-fontawesome';

import './header.scss';

class Header extends React.Component {

  render() {
    return <header>
        <nav class="header-nav">
          <img src="/src/images/" alt="Ryan Logo" id="logo"/>
          <div class="nav-links">
            <a id="about-link" href="#about-section">
              <FontAwesome name="user" size="2x" />
            </a>
            <a href="mailto:ryanscottjohnson02@gmail.com">
              <FontAwesome name="envelope" size="2x" />
            </a>
            <a href="https://www.https://www.linkedin.com/in/ryanscottjohnson/">
              <FontAwesome name="users" size="2x" />
            </a>
            <a href="https://github.com/ryanscottjohnson">
              <FontAwesome name="code" size="2x" />
            </a>
            <a href="https://docs.https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing.com/document/d/18TJfPpLyXWLke-iZx0MA0V2IJn9cA8BvoQGr4VBfiu0/edit?usp=sharing">
              <FontAwesome name="file" size="2x" />
            </a>
          </div>
        </nav>
        <div id="hero-block">
          <img src="/src/images/" alt="Ryan Avatar" id="avatar"/>
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