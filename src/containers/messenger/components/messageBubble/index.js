import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MessageBubbleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.type === 'incoming' ? 'flex-end' : 'flex-right'};
  margin: 0 0 11px 0;
  
  .last-bubble-of-type-wr {
    margin: 0 0 25px 0;
  }
`;

const MessageBubbleDate = styled.div`
  font-size: 9px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: right;
`;

const MessageBubbleContainer = styled.div`
  max-width: 270px;
  padding: 17px 15px 8px 15px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  
  &.outcoming {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(227, 227, 227, 1);
    color: rgba(74, 74, 74, 1);
    
    ${MessageBubbleDate} {
      color: rgba(51, 51, 51, 0.45);
    }
  }
  
  &.outcoming.last-bubble-of-type {
    position: relative;
    border-bottom-left-radius: unset;
    
    :before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      left: -1px;
      bottom: -15px;
      border: 7px solid;
      border-color: rgba(227,227,227,1) transparent transparent rgba(227,227,227,1);
    }
    
    :after {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      bottom: -12px;
      border: 7px solid;
      border-color: rgba(255,255,255,1) transparent transparent rgba(255,255,255,1);
    }
  }
  
  &.incoming {
    background: rgba(0, 185, 86, 1);
    border: 1px solid rgba(0, 185, 86, 1);
    color: rgba(255, 255, 255, 1);
    
    ${MessageBubbleDate} {
      color: rgba(255, 255, 255, 0.45);
    }
  }
  
  &.incoming.last-bubble-of-type {
    position: relative;
    border-bottom-right-radius: unset;
    
    :before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      right: -1px;
      bottom: -14px;
      border: 7px solid;
      border-color: rgba(0, 185, 86, 1) rgba(0, 185, 86, 1) transparent transparent;
    }
  }
`;

const MessageBubbleContent = styled.div`

`;

const MessageBubbleText = styled.div`
  margin: 0 0 4px 0;
`;

export default class MessageBubble extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    isLastOfType: PropTypes.bool,
  };

  render() {
    const {text, date, type, isLastOfType} = this.props;

    return (
      <MessageBubbleWrapper
        type={type}
        className={isLastOfType && 'last-bubble-of-type-wr'}
      >
        <MessageBubbleContainer
          className={isLastOfType ? `last-bubble-of-type ${type}` : type}
        >
          <MessageBubbleContent>
            <MessageBubbleText>
              {text}
            </MessageBubbleText>
            <MessageBubbleDate>
              {date}
            </MessageBubbleDate>
          </MessageBubbleContent>
        </MessageBubbleContainer>
      </MessageBubbleWrapper>
    );
  }
}
