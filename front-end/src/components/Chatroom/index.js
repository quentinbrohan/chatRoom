import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';
import Loader from 'src/components/Loader';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

const Chatroom = ({ isLogged, initWebsocket, loaderDisplayed }) => {
  useEffect(() => {
    initWebsocket();
  }, []);

  return (
    <div className="app">
      <Messages />
      {isLogged && <Form />}
      <Settings />
      {loaderDisplayed && <Loader />}
    </div>
  );
};

Chatroom.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  initWebsocket: PropTypes.func.isRequired,
  loaderDisplayed: PropTypes.bool.isRequired,
};

// == Export
export default Chatroom;
