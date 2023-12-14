import * as React from "react";
import CalendarIndividual from "./Components/CalendarIndividual";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";

export const Drawer = createDrawerNavigator();

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerContentComponentProps>
        <DrawerItem label="DayView" />
      </DrawerContentComponentProps>
    </DrawerContentScrollView>
  );
}
