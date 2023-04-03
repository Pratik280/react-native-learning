// import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;
const HeadingText = styled.Text`
  font-size: 24;
  color: #3b82f6;
  font-weight: 600;
  padding: 20px;
`;

const StyledCards = () => {
  return (
    <Container>
      <HeadingText>Hello</HeadingText>
    </Container>
  );
};

export default StyledCards;
