import React from 'react';
import { Button as ButtonUi, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Button = ({ toggleSettingsOpen, settingsOpen }) => {
  const cssClass = settingsOpen ? 'settings-button-open' : '';

  return (
    <ButtonUi icon className={cssClass} onClick={toggleSettingsOpen}>
      <Icon name="plus" />
    </ButtonUi>
  );
};

Button.propTypes = {
  toggleSettingsOpen: PropTypes.func.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
};

export default Button;
