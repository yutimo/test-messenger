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
  width: 100%; 
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  
  &::-webkit-scrollbar { 
    width: 0;
    height: 0;
  }
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
