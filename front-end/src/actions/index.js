export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';
export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const HANDLE_ERROR = 'HANDLE_ERROR';

// ADD_MESSAGE: crée le message et l'ajoute dans le state

// SEND_MESSAGE: crée le message et l'envoyer au websocket
// ADD_MESSAGE: ajoute le message dans le state

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const updateMessageInput = (messageInput) => ({
  type: UPDATE_MESSAGE_INPUT,
  messageInput,
});

export const toggleSettingsOpen = () => ({
  type: TOGGLE_SETTINGS_OPEN,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const updateSettingsField = (identifier, newValue) => ({
  type: UPDATE_SETTINGS_FIELD,
  identifier,
  newValue,
});

export const connectUser = (username, avatar) => ({
  type: CONNECT_USER,
  username,
  avatar,
});

export const connectWebsocket = () => ({
  type: CONNECT_WEBSOCKET,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const saveAvatar = (newAvatar) => ({
  type: SAVE_AVATAR,
  avatar: newAvatar,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const disconnectUser = (user) => ({
  type: DISCONNECT_USER,
  user,
});

export const handleError = (error) => ({
  type: HANDLE_ERROR,
  errorData: error,
});
