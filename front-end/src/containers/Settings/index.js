import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import {
  toggleSettingsOpen,
  updateSettingsField,
  submitLogin,
  saveAvatar,
  handleLogout,
} from 'src/actions';

const mapStateToProps = (state) => ({
  settingsOpen: state.settingsOpen,
  email: state.email,
  password: state.password,
  isConnected: state.isConnected,
  avatar: state.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSettingsOpen: () => {
    dispatch(toggleSettingsOpen());
  },
  updateField: (identifier, newValue) => {
    dispatch(updateSettingsField(identifier, newValue));
  },
  submitLogin: () => {
    dispatch(submitLogin());
  },
  changeAvatar: (newAvatar) => {
    dispatch(saveAvatar(newAvatar));
  },
  handleLogout: () => {
    dispatch(handleLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
