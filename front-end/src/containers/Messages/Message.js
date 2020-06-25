import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => ({
  isOwnMessage: state.user === ownProps.user,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
