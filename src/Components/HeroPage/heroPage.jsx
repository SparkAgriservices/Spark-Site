import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import heroIcon from "../../Assests/mushroom_hero.png";

const HeroPage = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroLeft>
          <CenteredContent>
            <HeroText>
              Grow your <HighlightText>favourite</HighlightText> mushroom
            </HeroText>
            <HeroText2>We help you grow your first mushroom</HeroText2>
            <HeroButton>Learn More</HeroButton>
          </CenteredContent>
        </HeroLeft>

        <HeroSeparator />

        <HeroRight>
          <CenteredContent>
            <HeroImage src={heroIcon} alt="Hero Image" />
          </CenteredContent>
        </HeroRight>
      </HeroContainer>
    </>
  );
};


const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C9D6DF;
  height: 91.7vh; /* Set the desired height */
`;

const HeroLeft = styled.div`
  flex: 1;
  padding: 1rem;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HeroText = styled.p`
  /* Add your styles for the text here */
  font-size: 5.5rem;
  font-weight: bold;
  color: white;
  margin-left: 20%;
`;

const HeroText2 = styled.p`
  /* Add your styles for the text here */
  font-size: 1.5rem;
  color: black;
  margin-top:-2rem;
`;

const HighlightText = styled.span`
  color: black; /* Adjust the highlight color */
`;

const HeroSeparator = styled.div`
  width: 1.5px;
  height: 50%;
  background-color: #333;
  margin: 0 1rem; /* Add margin to create space around the separator */
`;

const HeroRight = styled.div`
  flex: 1;
  padding: 1rem;
`;

const HeroImage = styled.img`
  width: 100%; /* Adjust the width as needed */
  height: auto;
  transform: scale(0.8);
`;

const HeroButton = styled.button`
background-color: black;
color: white;
border-radius: 10px;
padding: 0.5rem 1rem;
font-size: 1.5rem;
outline: none;
border: none;
cursor: pointer;
`

export default HeroPage;
