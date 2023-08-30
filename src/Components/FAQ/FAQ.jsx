import React, { useState } from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import Footer from '../Footer/Footer';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      question: 'How long does it take for mushrooms to grow from the substrate?',
      answer: 'The time it takes for mushrooms to grow varies depending on the species. Some mushrooms can be ready for harvest in as little as a few weeks, while others may take several months.',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
  ];

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <FAQHeader>Frequently Asked Questions</FAQHeader>
        <HeaderUnderline />
        {questions.map((item, index) => (
          <QuestionContainer key={index}>
            <Question onClick={() => handleExpand(index)}>
              <PlusIcon expanded={expandedIndex === index} />
              <QuestionText>{item.question}</QuestionText>
            </Question>
            {expandedIndex === index && (
              <ExpandAnswer>
                <Answer>{item.answer}</Answer>
              </ExpandAnswer>
            )}
          </QuestionContainer>
        ))}
      </Container>
      <Footer/>
    </>
  );
};

const Container = styled.div`
  padding-top: 64px; /* Assuming the navbar height is 64px */
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const FAQHeader = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

const HeaderUnderline = styled.div`
  width: 50px;
  height: 3px;
  background-color: #000;
  margin-bottom: 20px;
`;

const QuestionContainer = styled.div`
  width: 80%;
  margin-bottom: 20px;
`;

const Question = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the start of the flex container */
  cursor: pointer;
`;

const PlusIcon = styled(AiOutlinePlus)`
  font-size: 18px;
  margin-right: 10px;
  transform: ${({ expanded }) => (expanded ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const QuestionText = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ExpandAnswer = styled.div`
  margin-top: 10px;
  text-align: justify; /* Align the text to justify for better readability */
`;

const Answer = styled.p`
  margin: 0;
`;

export default FAQ;
