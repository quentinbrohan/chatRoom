import React from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Messages/Message';

const Messages = ({ messages }) => (
  <div className="chat">
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
