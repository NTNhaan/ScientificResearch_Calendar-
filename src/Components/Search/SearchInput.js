import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { spacing, sizes, shadow } from "../../Constants/Theme";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Ionicons name="search-outline" size={30} color="black" />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.filter}>
          <Ionicons
            onPress={() => {}}
            name="filter-outline"
            size={30}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
    paddingBottom: spacing.l / 1.5,
  },
  inner: {
    flexDirection: "row",
  },
  search: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  field: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: spacing.xl + spacing.s,
    paddingRight: spacing.m,
    paddingVertical: spacing.m,
    borderRadius: sizes.radius,
    height: 54,
    flex: 1,
    ...shadow.light,
  },
  filter: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default SearchInput;
