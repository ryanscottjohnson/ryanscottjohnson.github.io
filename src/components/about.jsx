import React from 'react';
import {connect} from 'react-redux';

import './about.scss';

class About extends React.Component {

  render() {
    return <section id="about-section">
      <h1>About Me</h1>
      <div id="about-links">
        <a href="mailto:ryanscottjohnson02@gmail.com">Email</a> | <a href="https://www.linkedin.com/in/ryanscottjohnson/">LinkedIn</a> | <a href="https://github.com/ryanscottjohnson">GitHub</a> | <a href="https://docs.google.com/document/https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing/18TJfPpLyXWLke-iZx0MA0V2IJn9cA8BvoQGr4VBfiu0/?usp=sharing">Resume</a>
      </div>
      <p>
        who am i
      </p>
      <p>
        more about me
      </p>
      <p>
        backgrond
      </p>
      <p>
        goals
      </p>
    </section>
  }
}

export default About;