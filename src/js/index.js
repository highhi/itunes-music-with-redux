import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Music from './containers/Music';
import Movie from './containers/Movie';

const store = configureStore();

render(
  <Provider store = { store }>
    <Music />
  </Provider>,
  document.getElementById('content')
);
