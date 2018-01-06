import React, { Component } from "react";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {handleFetch} from './saga';
import {loadingReducer, dataReducer, offsetReducer, fullViewReducer} from './reducer';
import GiphyGrid from './component/GiphyGrid';

const App = () => {

    const rootReducer = combineReducers({
        data: dataReducer,
        loading: loadingReducer,
        offset: offsetReducer,
        fullView: fullViewReducer
    });

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(handleFetch);

    return (
        <Provider store={store}>
            <GiphyGrid/>
        </Provider>
    );
};

export default App;
