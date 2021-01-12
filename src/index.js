import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {postsReducer} from './reducers/postsReducer';

var store=createStore(postsReducer,applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

