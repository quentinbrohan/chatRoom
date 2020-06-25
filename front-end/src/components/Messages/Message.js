import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import classNames from 'classnames';

const Message = ({
  user,
  content,
  isOwnMessage,
  avatar,
  date,
}) => {
  const classCss = classNames('message', { 'message--own': isOwnMessage });
  return (
    <Comment.Group className={classCss}>
      <Comment>
        <Comment.Avatar as="a" src={`/avatar/${avatar}`} />
        <Comment.Content>
          <Comment.Author as="div">{user}</Comment.Author>
          <Comment.Text>
            {content}
          </Comment.Text>
          <Comment.Metadata><span>{date}</span></Comment.Metadata>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool.isRequired,
};

export default Message;
