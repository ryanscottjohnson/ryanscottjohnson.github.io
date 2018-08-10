import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// import reducers from '../reducers';
// import middleWare from '../middleware';

const store = createStore(
    reducers,
    applyMiddleware()
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                Hello
            </Provider>
        )
    }
}

export default App;