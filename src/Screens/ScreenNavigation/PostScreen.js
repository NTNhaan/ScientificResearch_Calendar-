import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFiller from "../../Components/SearchFiller";
import RecipesCard from "../../Components/RecipesCard";

const PostScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <SearchFiller icon="search" placeholder="find any things" />

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Calendar</Text>
        <RecipesCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PostScreen;
