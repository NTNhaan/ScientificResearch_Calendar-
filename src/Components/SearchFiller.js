import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchFiller = ({ placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <Ionicons name="search-outline" size={20} color="#f96163" />
      <Text style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}>
        {placeholder}
      </Text>
    </View>
  );
};

export default SearchFiller;

const styles = StyleSheet.create({});
