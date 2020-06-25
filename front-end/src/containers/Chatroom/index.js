import { connect } from 'react-redux';

import { connectWebsocket } from 'src/actions';

import Chatroom from 'src/components/Chatroom';

const mapStateToProps = (state) => ({
  isLogged: state.user !== '',
  loaderDisplayed: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  initWebsocket: () => {
    dispatch(connectWebsocket());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
