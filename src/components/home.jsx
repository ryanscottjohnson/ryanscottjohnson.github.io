import React from 'react';
import { connect } from 'react-redux';

import AboutMe from './aboutMe.jsx';
import Projects from './project';

class Home extends React.Component {
    render(){
        return <React.Fragment>
            <Projects />
            <AboutMe />
        </React.Fragment>
    }
}

export default Home;