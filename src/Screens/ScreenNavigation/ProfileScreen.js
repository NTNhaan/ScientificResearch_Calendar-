import { View, Text } from "react-native";
import * as React from "react";
import Login from "../ScreenUser/Login";
export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Login />
    </View>
  );
}
