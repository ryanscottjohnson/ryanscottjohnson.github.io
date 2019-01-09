import React from 'react';
import {connect} from 'react-redux';

import './about.scss';

class About extends React.Component {

  render() {
    return <section id="about-section">
      <h1>About Me</h1>
      <div id="about-links">
        <a href="mailto:ryanscottjohnson02@gmail.com">Email</a> | <a href="https://www.linkedin.com/in/ryanscottjohnson/">LinkedIn</a> | <a href="https://github.com/ryanscottjohnson">GitHub</a> | <a href="https://https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing.google.com/document/https://docs.google.com/document/d/11DKYTJn8-BUbFcD4ykTigwKY723eMeYvD6g28rHXRmM/edit?usp=sharing/18TJfPpLyXWLke-iZx0MA0V2IJn9cA8BvoQGr4VBfiu0/?usp=sharing">Resume</a>
      </div>
      <p>
        I am a Software Developer with a background in Education, Finance, Construction and Business. Through the early years of my career path Computer Science meant to be doomed to cubicle life while chained to a computer. As a life long learner and collaborative problem solver I was drawn to the education field. Helping young minds engage and grow is truly rewarding and remains a passion but lacked the opportunity to creately excercise the 'big picture puzzle' thinking I love.
      </p>
      <p>
        Full circle with 15 years of experience in the working world I look at Software Development as a team and individual sport requiring constant communication while working hard to get @#$% done. Passionate about learning, organization for efficiency and solving complex problems with creative people.
      </p>
      <p>
      Coffee enthusiast, amature foodie, family man and team player. Always down to      grab a coffee or beer.
      </p>

    </section>
  }
}

export default About;