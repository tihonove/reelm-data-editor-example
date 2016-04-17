import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import SinlgePersonEditApplication
    from './containers/SinlgePersonEditApplication';
import personReducer from './reducers/personReducer';

const store = createStore(personReducer, applyMiddleware(createLogger()));

ReactDom.render(
    <Provider store={store}>
        <SinlgePersonEditApplication />
    </Provider>,
    document.getElementById('content'));
