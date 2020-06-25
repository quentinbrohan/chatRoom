import axios from 'axios';
import {
  SUBMIT_LOGIN,
  HANDLE_LOGOUT,
  disconnectUser,
  connectUser,
  hideLoader,
  handleError,
} from 'src/actions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState();
      axios.post('http://localhost:3001/login', {
        email,
        password,
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(connectUser(response.data.username, response.data.avatar));
          store.dispatch(hideLoader());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(handleError(error));
          store.dispatch(hideLoader());
        });

      next(action);
      break;
    }

    case HANDLE_LOGOUT: {
      axios.post('http://localhost:3001/logout', {
      })
        .then((response) => {
          store.dispatch(disconnectUser(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
