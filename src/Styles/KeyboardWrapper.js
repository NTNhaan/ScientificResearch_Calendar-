import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import React from "react";

const KeyboardWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableNativeFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default KeyboardWrapper;
