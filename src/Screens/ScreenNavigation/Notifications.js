import { View, Text } from "react-native";
import * as React from "react";

export default function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Notification Screen
      </Text>
    </View>
  );
}
