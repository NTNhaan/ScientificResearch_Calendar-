import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
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
import DateTimePicker from "@react-native-community/datetimepicker";
import KeyboardAvoidingView from "../../Styles/KeyboardWrapper";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigattion = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();

  const ChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };
  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <KeyboardAvoidingView>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          {/* <PageLogo resizeMode="cover" source={require("../../Imgs/logo.jpg")} /> */}
          <PageTitle>App Calendar++</PageTitle>
          {/* <SubTitle>Account Login</SubTitle> */}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={ChangeDate}
            />
          )}
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              dateOfBirth: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFromArea>
                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="nguyen van a"
                  placeholderTextColor={darkLight}
                  onChangText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  values={values.fullName}
                />
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
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="YYYY - MM - DD"
                  placeholderTextColor={darkLight}
                  onChangText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  values={dob ? dob.toDateString() : ""}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
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
                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  values={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Sign Up</ButtonText>
                </StyledButton>
                <Line />
                <ExtraView>
                  <ExtraText> Already have an account?</ExtraText>
                  <TextLink>
                    <TextLinkContent
                      onPress={() => navigattion.navigate("Login")}
                    >
                      {" "}
                      Sign In
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {/* <StyledTextInput {...props} /> */}
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
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
export default Signup;
