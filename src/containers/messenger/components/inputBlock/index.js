import React from 'react';
import styled from 'styled-components';

const InputBlockWrapper = styled.div`
  padding: 0 15px 22px 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px
`;

const MessageInputBlock = styled.div`
  position: relative;
`;

const MessageInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 40px 8px 10px;
  border: 1px solid rgba(209, 209, 209, 1);
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  
  &::placeholder {
    font-family: 'Graphik', sans-serif;
    color: rgba(155, 155, 155, 1);
  }
`;

const SendMessageButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 185, 86, 1);
`;

export default class InputBlock extends React.Component {
  render() {
    return (
      <InputBlockWrapper>
        <MessageInputBlock>
          <MessageInput
            type="text"
            placeholder="Сообщение"
          />
          <SendMessageButton/>
        </MessageInputBlock>
      </InputBlockWrapper>
    );
  }
}
