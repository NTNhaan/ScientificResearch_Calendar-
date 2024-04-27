import * as React from "react";
import MainScreens from "./src/Screens/MainScreens";
import { Font } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./src/Function/Test/MainApp";
import { Provider } from "react-redux";
import { store } from "./src/Screens/ScreenUser/store/Store";
import { registerRootComponent } from "expo";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
}
registerRootComponent(App);
