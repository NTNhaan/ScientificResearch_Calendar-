import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens BottomNav
import HomeScreen from "./ScreenNavigation/HomeScreen";
import HomeScreen1 from "./ScreenNavigation/HomeScreen1";
import ProfileScreen from "./ScreenNavigation/ProfileScreen";
import PostScreen from "./ScreenNavigation/PostScreen";
import SettingScreen from "./ScreenNavigation/SettingScreen";
import Notification from "./ScreenNavigation/Notifications";

//Screens Func
import CalendarFunc from "../Function/CalendarFunc";
import Login from "./ScreenUser/Login";
import Register from "./ScreenUser/Signup";
import Welcome from "./ScreenUser/Welcome";
import MainApp from "../Function/Test/MainApp";
import { AvatarHeader } from "../Styles/styles"; // avatar
//ScreensName
const homeName1 = "Home1";
const homeName = "Home";
const note = "Notification";
const profileName = "Profile";
const postName = "Post";
const settingName = "Setting";

const Tab = createBottomTabNavigator();

const MainScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName} // màn hình bắt đầu khi ứng dụng mở
        screenOptions={({ route }) => ({
          activeTintColor: "white",
          inactiveTintColor: "#D3D3D3",
          indicatorStyle: {
            backgroundColor: "red",
          },
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
            <TouchableOpacity>
              <Ionicons
                style={{ paddingRight: 10 }}
                name="person-circle-outline"
                size={40}
                color="#000"
              />
            </TouchableOpacity>
            // <TouchableOpacity>
            //   <AvatarHeader
            //     resizeMode="cover"
            //     source={require("../Imgs/Avatar/Avatar1.png")}
            //   />
            // </TouchableOpacity>
          ),
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={homeName1} component={HomeScreen1} />
        <Tab.Screen name={note} component={Notification} />
        <Tab.Screen name={postName} component={PostScreen} />
        <Tab.Screen name={settingName} component={SettingScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{ tabBarButton: () => null }}
        />

        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{ tabBarButton: () => null }}
        />

        <Tab.Screen
          name="CalendarFunc"
          component={CalendarFunc}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="MainApp"
          component={MainApp}
          options={{ tabBarButton: () => null }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MainScreens;
