import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import countriesSaga from './sagas/countries';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countriesSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

