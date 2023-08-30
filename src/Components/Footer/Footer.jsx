import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <ContactUs>
        <ContactLabel>Contact Us:</ContactLabel>
        <Phone>9884037189</Phone>
        <Email>spark.agriservices@gmail.com</Email>
      </ContactUs>
      <SocialMedia>
        <SocialLabel>Social Media:</SocialLabel>
        <SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
      </SocialMedia>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between; /* Aligns the ContactUs and SocialMedia sections */
  align-items: center;
  background-color: #52616B;
  color:#FFFFFF;
  padding: 20px;
`;

const ContactUs = styled.div`
  display: flex;
  align-items: center;
`;

const ContactLabel = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

const Phone = styled.div`
  margin-right: 10px;
`;

const Email = styled.div`
  margin-right: 10px;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden; /* Prevents content overflow */
`;

const SocialLabel = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

const SocialLink = styled.a`
  margin-right: 2vw;
  color: #000;
  font-size: 24px;
`;

export default Footer;
