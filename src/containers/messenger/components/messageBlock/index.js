import React from 'react';
import styled from 'styled-components';
import MessageBubble from '../messageBubble';
import messagesMock from './messagesMock';
import getRandomItems from '../../../../utils/getRandomItems';

const MessageBlockWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const MessageBlockContainer = styled.div`
  width: calc(100% + 15px); // to hide scroll bar
  height: 100%;
  overflow-y: scroll;
  box-sizing: content-box;
`;

const MessageBlockContent = styled.div`
  padding: 15px;
`;

export default class MessageBlock extends React.Component {
  state = {
    allMessages: getRandomItems(messagesMock, 8),
    shownMessages: [],
  };

  componentDidMount() {
    const {allMessages, shownMessages} = this.state;

    this.messagesInitInterval = setInterval(() => {
      if (!allMessages.length) {
        clearInterval(this.messagesInitInterval);
        return;
      }

      const nextMessageToAdd = allMessages.pop();
      shownMessages.push(nextMessageToAdd);

      this.setState({
        allMessages,
        shownMessages,
      });
    }, 2000);
  }

  render() {
    const {shownMessages} = this.state;

    return (
      <MessageBlockWrapper>
        <MessageBlockContainer>
          <MessageBlockContent>
            {
              shownMessages.map(({text, date, type}, idx, messages) => {
                return (
                  <MessageBubble
                    key={idx}
                    text={text}
                    date={date}
                    type={type}
                    isLastOfType={
                      (messages[idx + 1] && messages[idx + 1].type !== type) ||
                      idx === shownMessages.length - 1
                    }
                  />
                );
              })
            }
          </MessageBlockContent>
        </MessageBlockContainer>
      </MessageBlockWrapper>
    );
  }
}
