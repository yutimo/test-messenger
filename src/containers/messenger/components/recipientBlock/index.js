import React from 'react';
import styled from 'styled-components';

const RecipientBlockWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;

const RecipientBlockContainer = styled.div`
  position: relative;
  padding: 24px 0 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const RecipientName = styled.div`
  font-size: 16px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
`;

const RecipientPhoto = styled.img`
  position: absolute;
  top: 12px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export default class RecipientBlock extends React.Component {
  render() {
    return (
      <RecipientBlockWrapper>
        <RecipientBlockContainer>
          <RecipientName>
            Ася Викторова
          </RecipientName>
          <RecipientPhoto src={require('./images/avatar.png')}/>
        </RecipientBlockContainer>
      </RecipientBlockWrapper>
    );
  }
}
