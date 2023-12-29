import React, { useEffect } from "react";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Calendar from "../Test/Screens/Calendar";
import { View, TouchableOpacity } from "react-native";
import Tabnavigator from "../../Screens/Tabnavigator";
import { AvatarHeader } from "../../Styles/styles";
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate("Home", { viewMode: "day" });
        }}
      />
      <DrawerItem
        label="DayView"
        onPress={() => {
          props.navigation.navigate("Calendar", { viewMode: "day" });
        }}
      />
      <DrawerItem
        label="3-days"
        onPress={() => {
          props.navigation.navigate("Calendar", { viewMode: "threeDays" });
        }}
      />
      <DrawerItem
        label="Week"
        onPress={() => {
          props.navigation.navigate("Calendar", { viewMode: "week" });
        }}
      />
      <DrawerItem
        label="Work Week"
        onPress={() => {
          props.navigation.navigate("Calendar", { viewMode: "workWeek" });
        }}
      />
    </DrawerContentScrollView>
  );
}

const homeName1 = "Calendar";
const homeName = "Home";
const note = "Notification";
const profileName = "Profile";
const postName = "Post";
const settingName = "Setting";
const Drawer = createDrawerNavigator();

const MainApp = () => {
  const _renderDrawerContent = (props) => <CustomDrawerContent {...props} />;
  return (
    <Drawer.Navigator
      drawerContent={_renderDrawerContent}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20,
        },
        headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === note) {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (rn === settingName) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === profileName) {
            iconName = focused ? "people" : "people-outline";
          } else if (rn === postName) {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return (
            <View style={{ alignItems: "center" }}>
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="menu-outline"
              size={30}
              color="black"
              style={{ marginLeft: 16 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          // <TouchableOpacity>
          //   <Ionicons
          //     style={{ paddingRight: 10 }}
          //     name="person-circle-outline"
          //     size={40}
          //     color="#000"
          //   />
          // </TouchableOpacity>
          <TouchableOpacity>
            <AvatarHeader
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Calendar" component={Tabnavigator} />

      {/* <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{ title: "Calendar", headerTitleAllowFontScaling: false }}
      /> */}
    </Drawer.Navigator>
  );
};

export default MainApp;
