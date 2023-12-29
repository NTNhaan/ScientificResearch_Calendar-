import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput } from "react-native";
import { Formik } from "formik";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFromArea,
  LeftIcon,
  Colors,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../../Styles/styles";

const { brand, darkLight, primary } = Colors;
import KeyboardAvoidingView from "../../Styles/KeyboardWrapper";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigattion = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingView>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("../../Imgs/logo.jpg")}
          />
          <PageTitle>App Calendar++</PageTitle>
          {/* <SubTitle>Account Login</SubTitle> */}

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFromArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="abc@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  values={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  values={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Sing In</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={25} />
                  <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink>
                    <TextLinkContent
                      onPress={() => navigattion.navigate("Register")}
                    >
                      {" "}
                      Sign Up{" "}
                    </TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFromArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingView>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Login;
