import React from 'react';
import { connect } from 'react-redux';

class Project extends React.Component {
    constructor(props) {
        super(props);
        
    this.display = this.display.bind(this);
    }
    display() {
        return this.props.details.tags.reduce((accum, tag) => {
            return accum + ' | ' + tag;
        });
    }
    
    render() {
        return <div className="project">
        {/* project information here */}
        </div>
    }
}

export default Project;