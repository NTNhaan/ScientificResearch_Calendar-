import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Border, FontFamily, FontSize, Color } from "../../Styles/Global";
import Ionicons from "react-native-vector-icons/Ionicons";
import { autoScroll } from "@shopify/flash-list";

const SettingScreen = () => {
  return (
    <ScrollView
      style={styles.settingscreens}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.settingScreensScrollViewContent}
    >
      <View style={styles.contetn}>
        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Ionicons
            name="remove-circle-outline"
            size={29}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
          <Text style={styles.maincontent}>Block Account</Text>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Ionicons
            name="notifications-outline"
            size={28}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
          <Text style={styles.maincontent}>Notifications</Text>
        </View>

        <View style={styles.viewShadowBox}>
          <View
            style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}
          ></View>
          <Ionicons
            name="caret-forward-outline"
            size={20}
            style={[styles.vectorIcon, styles.iconLayout]}
          ></Ionicons>
          <Text style={styles.maincontent}>Primary Policy</Text>
          <Ionicons
            name="shield-checkmark-outline"
            size={28}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Terms of service</Text>
          <Ionicons
            name="document-text-outline"
            size={28}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Comunity Guidelines</Text>
          <Ionicons
            name="earth-outline"
            size={28}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Support</Text>
          <Ionicons
            name="finger-print-outline"
            size={28}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Other</Text>
          <Ionicons
            name="ellipsis-vertical-outline"
            size={29}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Change Account</Text>
          <Ionicons
            name="people-outline"
            size={30}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Friends</Text>
          <Ionicons
            name="person-add-outline"
            size={30}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>

        <View style={styles.viewShadowBox}>
          <View style={[styles.wrapperRectangle1, styles.wrapperIconFlexBox]}>
            <Ionicons
              name="caret-forward-outline"
              size={20}
              style={[styles.vectorIcon, styles.iconLayout]}
            ></Ionicons>
          </View>
          <Text style={styles.maincontent}>Log Out</Text>
          <Ionicons
            name="log-out-outline"
            size={30}
            style={[styles.iconCircle, styles.iconPosition]}
          ></Ionicons>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  settingScreensScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperIconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  iconWrapperLayout: {
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    left: 0,
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "4.96%",
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconWrapperPosition: {
    bottom: "25.86%",
    top: "27.59%",
    height: "46.55%",
  },
  wrapperRectangle1Child: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1: {
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
    alignItems: "center",
    display: "flex",
    height: 58,
    width: 343,
  },
  vectorIcon: {
    height: "36.21%",
    width: "4.08%",
    top: "32.76%",
    right: "3.79%",
    bottom: "31.03%",
    left: "92.13%",
  },
  maincontent: {
    top: 18,
    left: 67,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iconCircle: {
    width: "9.04%",
    right: "86.01%",
    bottom: "25.86%",
    top: "27.59%",
    height: "46.55%",
  },
  view: {
    backgroundColor: "#e0dcd7",
    height: 58,
    width: 343,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  wrapperRectangle1Item: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  iconBell: {
    height: "41.38%",
    width: "7.87%",
    top: "31.03%",
    right: "87.17%",
    bottom: "27.59%",
  },
  viewShadowBox: {
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
    marginTop: 14,
    height: 58,
    width: 343,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  wrapperRectangle1Inner: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  iconShieldOff: {
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    left: 0,
    width: "100%",
    maxHeight: "100%",
    top: 0,
  },
  wrapperIconShieldOff: {
    width: "9.91%",
    right: "85.42%",
    left: "4.66%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  rectangleIcon: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  iconXOctagon: {
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    left: 0,
    width: "100%",
    maxHeight: "100%",
    top: 0,
  },
  wrapperIconXOctagon: {
    width: "8.75%",
    right: "85.71%",
    left: "5.54%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  wrapperRectangle1Child1: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1Child2: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1Child3: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1Child4: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1Child5: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1Child6: {
    top: 4,
    transform: [
      {
        scale: 1.138,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  contetn: {
    height: autoScroll,
    paddingVertical: 10,
  },
  settingscreens: {
    backgroundColor: "#ebe8e8",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingScreen;
