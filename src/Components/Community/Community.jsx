import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import { RiSendPlane2Line } from 'react-icons/ri';

const Community = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
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
        <CommunityHeader>Community Chat</CommunityHeader>
        <ChatContainer ref={chatContainerRef}>
          {messages.map((message, index) => (
            <UserMessage key={index}>
              <UserIcon />
              <UserText>{message}</UserText>
            </UserMessage>
          ))}
        </ChatContainer>
        <InputContainer>
          <InputField
            placeholder="Type your message..."
            value={message}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <SendButton onClick={handleSend}>
            <SendIcon />
          </SendButton>
        </InputContainer>
        <BackToTop onClick={handleBackToTop}>Back to Top</BackToTop>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 64px - 80px);
`;

const CommunityHeader = styled.h1`
  font-size: 28px;
  margin: 20px 0;
  color: #333;
`;

const ChatContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  max-height: 60vh;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserMessage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  border-radius: 16px;
  padding: 12px;
`;

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d8d8d8;
`;

const UserText = styled.p`
  margin: 0;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px; /* Added margin to adjust spacing */
  width: 80%;
`;

const InputField = styled.input`
  flex: 1;
  height: 40px;
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #007bff;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  margin-left : 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const SendIcon = styled(RiSendPlane2Line)`
  color: #fff;
  font-size: 20px;
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Community;
