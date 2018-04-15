import React, {Component} from 'react';
import {Chat as ChatBase, ChatProps} from 'botframework-webchat'
import 'botframework-webchat/botchat.css';

class Chat extends Component {
    render() {
        return (
            <ChatBase {...this.props} />
        );
    }
}

Chat.propTypes = {...ChatProps};
Chat.defaultProps = {};

export default Chat;
