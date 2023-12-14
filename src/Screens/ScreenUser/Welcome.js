import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFromArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "../../Styles/styles";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage
          resizeMode="cover"
          source={require("../../Imgs/imageProfile.jpg")}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>Tên user</SubTitle>
          <SubTitle welcome={true}>nameuser@gmail.com</SubTitle>
          <StyledFromArea>
            <Avatar
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>LOGOUT</ButtonText>
            </StyledButton>
          </StyledFromArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
