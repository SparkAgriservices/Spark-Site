import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <ContentWrapper>
        <Heading>Automation & Monitoring system for Mushroom Cultivation</Heading>
        <Content>
        We provide setups and methods to promote agriculture and make it more automated and technological. We believe in making technology accessible to all, which is why our system features a user-friendly interface. You can easily monitor and control every aspect of the cultivation process, making adjustments remotely and ensuring optimal results with minimal effort.
        </Content>
      </ContentWrapper>
    </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const ContentWrapper = styled.div`
  max-width: 60vw; /* Adjust the width as needed */
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 18px;
`;

export default HomePage;
