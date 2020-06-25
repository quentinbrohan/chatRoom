// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
import store from 'src/store';
import Chatroom from 'src/containers/Chatroom';

// == Render
render(
  <Provider store={store}>
    <Chatroom />
  </Provider>,
  document.querySelector('#root'),
);
