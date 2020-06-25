import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import avatars from 'src/data/avatars';

const Avatars = ({ avatar, saveAvatar }) => {
  const changeAvatar = (newAvatar) => {
    saveAvatar(newAvatar);
  };

  return (
    <div className="settings-user">
      <Message className="settings-avatars">
        <div>Choix d'avatar</div>
        <div className="avatars">
          {avatars.map((item) => (
            <img
              src={`/avatar/${item.name}`}
              key={item.id}
              className={(avatar === item.name) ? 'avatar avatar--is-selected' : 'avatar'}
              alt="Avatar"
              value={item.name}
              onClick={() => (changeAvatar(item.name))}
            />
          ))}
        </div>
      </Message>
    </div>
  );
};

Avatars.propTypes = {
  avatar: PropTypes.string.isRequired,
  saveAvatar: PropTypes.func.isRequired,
};

export default Avatars;
