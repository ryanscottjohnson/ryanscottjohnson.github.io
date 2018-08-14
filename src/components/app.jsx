import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from '../reducers';
import middleWare from '../middleware';
import Home from './home.jsx';

const store = createStore(
    reducers,
    applyMiddleware(middlewares.logger)
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}

export default App;