import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import chatReducer from 'src/reducers/chatReducer';
import logMiddleware from 'src/middlewares/logMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    socketMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  chatReducer,
  // enhancer
  enhancers,
);

export default store;
