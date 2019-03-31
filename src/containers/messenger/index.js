import React from 'react';
import styled from 'styled-components';
import RecipientBlock from './components/recipientBlock';
import InputBlock from './components/inputBlock';
import MessageBlock from './components/messageBlock';

const MessengerWrapper = styled.div`
  width: 375px;
  height: 558px;
  position: relative;
  
  @media (max-width: 414px) {
    width: 100%;
    height: 100vh;
  }
`;

const MessengerContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export default class Messenger extends React.Component {
  render() {
    return (
      <MessengerWrapper>
        <MessengerContainer>
          <RecipientBlock/>
          <MessageBlock/>
          <InputBlock/>
        </MessengerContainer>
      </MessengerWrapper>
    );
  }
}
