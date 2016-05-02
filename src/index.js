import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import SinlgePersonEditApplication
    from './containers/SinlgePersonEditApplication';
import singlePersonEditReducer from './reducers/singlePersonEditReducer';

const store = createStore(singlePersonEditReducer, applyMiddleware(createLogger()));

ReactDom.render(
    <Provider store={store}>
        <SinlgePersonEditApplication />
    </Provider>,
    document.getElementById('content'));
