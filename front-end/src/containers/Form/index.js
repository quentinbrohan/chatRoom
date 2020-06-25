import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { sendMessage, updateMessageInput } from 'src/actions';

const mapStateToProps = (state) => ({
  messageInput: state.messageInput,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (newInputValue) => {
    dispatch(updateMessageInput(newInputValue));
  },
  sendMessage: () => {
    // - Envoi du message au websocket
    // - Ajout du message au state
    dispatch(sendMessage());
  },
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
