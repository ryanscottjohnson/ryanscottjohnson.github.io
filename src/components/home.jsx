import React from 'react';
import { connect } from 'react-redux';

import AboutMe from './aboutMe.jsx';

class Home extends React.Component {
    render(){
        return <React.Fragment>
            <AboutMe />
        </React.Fragment>
    }
}

export default Home;