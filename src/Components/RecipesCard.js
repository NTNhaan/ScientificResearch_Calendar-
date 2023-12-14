import {
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constants/Mocks";

const RecipesCard = () => {
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 26,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 130,
                height: 140,
                resizeMode: "center",
                borderRadius: 5,
              }}
            ></Image>
            <Text>{item.name}</Text>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipesCard;

const styles = StyleSheet.create({});
