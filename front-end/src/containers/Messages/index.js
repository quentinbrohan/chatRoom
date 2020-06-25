import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = () => ({

});

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessageContainer;
