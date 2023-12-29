import * as React from "react";
import MainScreens from "./src/Screens/MainScreens";
import { Font } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./src/Function/Test/MainApp";

function App() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}
export default App;
