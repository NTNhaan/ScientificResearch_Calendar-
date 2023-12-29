import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
const CustomTabbar = (props) => {
  return (
    <View>
      <View>
        <BottomTabBar {...props} />
      </View>
    </View>
  );
};

export default CustomTabbar;

const styles = StyleSheet.create({});
