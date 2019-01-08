
import uuidv1 from 'uuid/v1';
import { PROJECTS_FILTER } from '../actions/projects-actions';

const initialState = {
  projects: [
    {
      title: 'Nouri Meals',
      id: uuidv1(),
      imageUrl: '/src/images/nouri_favicon.png',
      demoUrl: 'https://nourimeals.herokuapp.com/',
      gitHubUrl: 'https://github.com/nourimeals/nouri',
      tags: ['mongodb', 'javascript', 'node', 'frontend', 'backend', 'user experience', 'user interface', 'html', 'css', 'react', 'redux', 'fullstack'],
      description: 'In the fight to solve hunger in the Greater Seattle Area. A project began during AngelHack Seattle 2018.',
      contribution: 'Ideation, team formation, planning, branding, wireframes & mockup design, architecture, project managemet, pair programming, presentation.'
    },
        {
      title: 'Teressa Johnson Studio',
      id: uuidv1(),
      imageUrl: '/src/images/tjs-logo.png',
      demoUrl: '',
      gitHubUrl: '',
      tags: ['mongodb', 'javascript', 'node', 'frontend', 'backend', 'user experience', 'user interface', 'html', 'css', 'react', 'redux', 'fullstack'],
      description: '',
      contribution: ''
    },
    {
      title: 'FoodFit',
      id: uuidv1(),
      imageUrl: '/src/images/FoodFit-Logo.png',
      demoUrl: '',
      gitHubUrl: '',
      tags: ['javascript', 'node', 'mongodb', 'heroku', 'travisci', 'aws', 'jasonwebtoken', 'rest', 'backend'],
      description: '',
      contribution: ''
    },
    {
      title: 'KidCast',
      id: uuidv1(),
      imageUrl: '/src/images/kidcast_logo.png',
      demoUrl: 'https://kidcast.herokuapp.com/api/media',
      gitHubUrl: 'https://github.com/kidcast/media',
      tags: ['javascript', 'node', 'mongodb', 'heroku', 'travisci', 'aws', 'jasonwebtoken', 'rest', 'backend'],
      description: 'A YouTube-like Back End Node.js application designed to only display kid friendly content.',
      contribution: 'Produced & managed the entire project with the ability to keep the project timeline, meet MVP & stretch goals. Built the bulk of the code, resource RESTful API’s & wrote API tests while assisting teammates on their tasks through pair programming & code reviews.'
    },
  ],
  filter: ''
}

export default function wordCardReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};

  switch(action.type) {
    case PROJECTS_FILTER:
      return Object.assign(newState, state, {filter: action.value});
    default: return state;
  }
}