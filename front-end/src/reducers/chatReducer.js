import {
  ADD_MESSAGE,
  UPDATE_MESSAGE_INPUT,
  SUBMIT_LOGIN,
  TOGGLE_SETTINGS_OPEN,
  UPDATE_SETTINGS_FIELD,
  CONNECT_USER,
  SEND_MESSAGE,
  HIDE_LOADER,
  SAVE_AVATAR,
  HANDLE_LOGOUT,
  DISCONNECT_USER,
  HANDLE_ERROR,
} from 'src/actions';

const initialState = {
  messages: [],
  messageInput: '',
  user: '',
  avatar: '',
  //
  settingsOpen: true,
  isConnected: false,
  email: '',
  password: '',
  //
  loading: false,
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    }

    case UPDATE_MESSAGE_INPUT:
      return {
        ...state,
        messageInput: action.messageInput,
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case TOGGLE_SETTINGS_OPEN: {
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    }

    case UPDATE_SETTINGS_FIELD: {
      // const target = action.identifier;
      // return {
      //   ...state,
      //   [target]: action.newValue,
      // };

      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    }

    case CONNECT_USER:
      return {
        ...state,
        user: action.username,
        avatar: action.avatar,
        settingsOpen: false,
        isConnected: true,
        email: '',
        password: '',
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messageInput: '',
      };

    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case SAVE_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      };

    case HANDLE_LOGOUT:
      return {
        ...state,
      };

    case DISCONNECT_USER:
      return {
        ...state,
        isConnected: false,
        user: '',
        avatar: '',
      };

    case HANDLE_ERROR: {
      // console.log(action);
      return {
        ...state,
        error: true,
        errorData: action.errorData,
      };
    }

    default:
      return state;
  }
};

export default chatReducer;
