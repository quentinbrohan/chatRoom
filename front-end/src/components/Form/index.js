import React from 'react';
import { Input, Form as FormUi } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Form = ({ messageInput, changeInputValue, sendMessage }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(`AddMessage: ${messageInput}`);

    sendMessage();
  };

  const handleChange = (evt) => {
    changeInputValue(evt.target.value);
  };

  return (
    <FormUi onSubmit={handleSubmit}>
      <Input
        icon={{ name: 'send', link: true, onClick: (handleSubmit) }}
        placeholder="Saisissez votre message..."
        value={messageInput}
        onChange={handleChange}
      />
    </FormUi>
  );
};

Form.propTypes = {
  messageInput: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
