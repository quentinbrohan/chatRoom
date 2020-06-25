import {
  CONNECT_WEBSOCKET,
  CONNECT_USER,
  SEND_MESSAGE,
  addMessage,
} from 'src/actions';

const serverUrl = 'http://localhost:3001';
let socket;

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      // console.log('Initialisation de la connexion au websocket');
      socket = window.io(serverUrl);
      next(action);
      break;
    }

    case CONNECT_USER: {
      socket.on('send_message', (message) => {
        // console.log(message);
        store.dispatch(addMessage(message));
      });
      next(action);
      break;
    }

    case SEND_MESSAGE: {
      const { messageInput, user, avatar } = store.getState();
      socket.emit('send_message', {
        user,
        content: messageInput,
        avatar,
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default socketMiddleware;
