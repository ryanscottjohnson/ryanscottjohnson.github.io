
import uuidv1 from 'uuid/v1';
import { PROJECTS_FILTER } from '../actions/projects-actions';

const initialState = {
  projects: [
    {
      title: 'Defy Ventures WA',
      id: uuidv1(),
      imageUrl: '/src/images/defywa_final2.png',
      demoUrl: 'http://defyventureswa.org/',
      gitHubUrl: 'https://ryanscottjohnson.github.io/docs/',
      tags: ['wordpress', 'frontend', 'user experience', 'user interface',],
      description: 'Our mission is to help transform the lives of those in prison by helping them tap into their entrepreneurial talents and become valued contributors to our society.',
      contribution: 'Contract WordPress Developer'
    },
    {
      title: 'Nouri Meals',
      id: uuidv1(),
      imageUrl: '/src/images/nouri_favicon.png',
      demoUrl: 'https://nourimeals.herokuapp.com/',
      gitHubUrl: 'https://github.com/nourimeals/nouri',
      tags: ['mongodb', 'javascript', 'node', 'frontend', 'backend', 'user experience', 'user interface', 'html', 'css', 'react', 'redux', 'fullstack'],
      description: 'In the fight to solve hunger in the Greater Seattle Area. A project began during AngelHack Seattle 2018.',
      contribution: 'Project promotion and demonstration. Focusing on front-end development and adapting the project as it continues to evolve.'
    },
        {
      title: 'Teressa Johnson Studio',
      id: uuidv1(),
      imageUrl: '/src/images/tjs-logo.png',
      demoUrl: 'https://secure-dawn-11135.herokuapp.com/',
      gitHubUrl: 'https://github.com/TeressaJohnsonStudio/TJS',
      tags: ['mongodb', 'javascript', 'Nodemailer', 'frontend', 'backend', 'user experience', 'user interface', 'html', 'css', 'react', 'redux', 'fullstack'],
      description: 'Website for a growing small business in the Seattle floral design market.',
      contribution: 'Project lead. Communicating between business owner and development team. Leading the front end development as the project manager.'
    },
    {
      title: 'FoodFit',
      id: uuidv1(),
      imageUrl: '/src/images/FoodFit-Logo.png',
      demoUrl: 'https://team-80-20.github.io/FoodFit/',
      gitHubUrl: 'https://github.com/Team-80-20',
      tags: ['javascript', 'node', 'mongodb', 'heroku', 'travisci', 'aws', 'jasonwebtoken', 'rest', 'backend'],
      description: 'A food and fitness applicaton for the working professional concentious of their diet and health.',
      contribution: 'Co-created the front end of the site and built the fitness activity portion of the application.'
    },
    {
      title: 'KidCast',
      id: uuidv1(),
      imageUrl: '/src/images/kidcast_logo.png',
      demoUrl: 'https://kidcast.herokuapp.com/api/media',
      tags: ['javascript', 'node', 'mongodb', 'heroku', 'travisci', 'aws', 'jasonwebtoken', 'rest', 'backend'],
      description: 'A YouTube-like Back End Node.js application designed to only display kid friendly content.',
      contribution: 'Co-created the structure of the backend storage and functionality of the application. Built the user authorization (basic and barer).'
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