import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import { RiSendPlane2Line } from 'react-icons/ri';
import axios from 'axios';

const Community = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = async () => {
    if (inputText.trim() !== '') {
      const userMessage = { text: inputText, isUser: true };
      setMessages([...messages, userMessage]);

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            prompt: inputText,
            model: 'text-davinci-003',
            temperature: 0.5,
            n: 1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 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',
            },
          }
        );

        const botMessage = { text: response.data.choices[0].text, isUser: false };
        setMessages([...messages, botMessage]);
      } catch (error) {
        console.error('Error sending message to GPT-3:', error);
      }

      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleBackToTop = () => {
    chatContainerRef.current.scrollTop = 0;
  };

  return (
    <>
      <Navbar />
      <Container>
        <ChatContainer ref={chatContainerRef}>
          {messages.map((message, index) => (
            <MessageContainer key={index} isUser={message.isUser}>
              <MessageText isUser={message.isUser}>{message.text}</MessageText>
            </MessageContainer>
          ))}
        </ChatContainer>
        <InputContainer>
          <InputField
            placeholder="Type your message..."
            value={inputText}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <SendButton onClick={handleSend}>
            <SendIcon />
          </SendButton>
        </InputContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: flex-end;
  height: 90vh;
`;

const ChatContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${({ isUser }) => (isUser ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 8px;
`;

const MessageText = styled.div`
  background-color: ${({ isUser }) => (isUser ? '#DCF8C6' : '#E5E5EA')};
  color: ${({ isUser }) => (isUser ? '#000' : '#000')};
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 60%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: white;
  width: 100%;
  border-top: 1px solid #ddd;
`;

const InputField = styled.input`
  flex: 1;
  height: 36px;
  padding: 6px 12px;
  border-radius: 18px;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-right: 12px;
`;

const SendButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const SendIcon = styled(RiSendPlane2Line)`
  color: #fff;
  font-size: 18px;
`;

export default Community;
