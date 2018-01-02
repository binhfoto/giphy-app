import React, { Component } from "react";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {handleFetch} from './saga';
import {loadingReducer, dataReducer, offsetReducer} from './reducer';

const App = () => {

    const initialState = {
        data: [],
        loading: true,
        offset: 0
    };

    const rootReducer = combineReducers({
        data: dataReducer,
        loading: loadingReducer,
        offset: offsetReducer
    });

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(handleFetch);

    /*store.dispatch({
        type: 'FETCH_REQUEST',
        offset: 0
    });

    store.subscribe(function () {
        console.log(store.getState());
    });*/

    return (
        <Provider store={store}>
            <span>Giphy App</span>
        </Provider>
    );
};

export default App;
