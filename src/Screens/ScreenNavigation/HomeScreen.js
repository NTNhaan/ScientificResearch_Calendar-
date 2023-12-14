import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Calendar from "../../Function/CalendarFunc";

const HomeScreen = () => {
  const navigation = useNavigation();

  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("CalendarFunc");
              }}
            >
              <Text>Lịch Cá Nhân</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("MainApp");
              }}
            >
              <Text>Lịch Nhóm</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Lịch Thời Khóa Biểu</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Lịch Làm Việc</Text>
          </View>
        </View>
      </View>
    );
  };

  return <SafeAreaView style={styles.contaier}>{<Boxes />}</SafeAreaView>;
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
  boxContainer: {
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
    // backgroundColor: "green",
  },
  inner: {
    flex: 1,
    backgroundColor: "#c8c8c8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

// import { StyleSheet, View, Text } from "react-native";
// import React from "react";
// import { colors } from "@mui/material";
// import SearchInput from "../../Components/Search/SearchInput";

// const HomeScreen1 = () => {
//   return (
//     <View style={styles.container}>
//       <SearchInput />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.light,
//   },
// });

// export default HomeScreen1;
