import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonUi, Form as FormUi } from 'semantic-ui-react';

import Field from 'src/components/Field';
import Button from './Button';
import Avatars from './Avatars';
import './settings.scss';

const Settings = ({
  settingsOpen,
  toggleSettingsOpen,
  email,
  password,
  updateField,
  submitLogin,
  handleLogout,
  isConnected,
  avatar,
  changeAvatar,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitLogin();
  };

  const logoutUser = () => {
    handleLogout();
  };

  const cssClass = isConnected ? 'settings' : 'settings not-connected';

  return (
    <div className={cssClass}>
      <Button toggleSettingsOpen={toggleSettingsOpen} settingsOpen={settingsOpen} />
      { settingsOpen && (
        !isConnected ? (
          <FormUi onSubmit={handleSubmit}>
            <Field
              identifier="email"
              placeholder="Gimme gimme gimme a mail"
              label="Adresse e-mail"
              value={email}
              changeField={updateField}
            />
            <Field
              identifier="password"
              placeholder=""
              label="Mot de passe"
              type="password"
              value={password}
              changeField={updateField}
            />
            <ButtonUi type="submit">Se connecter</ButtonUi>
          </FormUi>
        ) : (
          <>
            <Avatars avatar={avatar} saveAvatar={changeAvatar} />
            <ButtonUi type="submit" content="Déconnexion" icon="sign-out" labelPosition="right" onClick={logoutUser} />
          </>
        )

      )}
    </div>
  );
};

Settings.propTypes = {
  settingsOpen: PropTypes.bool.isRequired,
  toggleSettingsOpen: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // 2 paramètres: identifier, new value
  updateField: PropTypes.func.isRequired,
  // Pas de paramètre
  submitLogin: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  changeAvatar: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Settings;
