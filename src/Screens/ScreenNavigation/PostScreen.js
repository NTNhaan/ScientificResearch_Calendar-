// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import SearchFiller from "../../Components/SearchFiller";
// import RecipesCard from "../../Components/RecipesCard";

// const PostScreen = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
//       <SearchFiller icon="search" placeholder="find any things" />

//       <View style={{ marginTop: 22, flex: 1 }}>
//         <Text style={{ fontSize: 22, fontWeight: "bold" }}>Calendar</Text>
//         <RecipesCard />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({});

// export default PostScreen;

import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { TextInput } from "react-native-paper";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "../../Styles/Global";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";

const PostScreen = () => {
  return (
    <View style={styles.postscreens}>
      <View style={[styles.contetn, styles.searchLayout1]}>
        <View style={[styles.view, styles.viewLayout]}>
          <View style={styles.leftcontent}>
            <View style={[styles.content, styles.contentLayout]} />
            <Image
              style={[styles.howLongDoesAnOrderLast1Icon, styles.contentLayout]}
              resizeMode="cover"
              source={require("../../Imgs/Item/images1.png")}
            />
          </View>
          <Text style={[styles.lchThiKha, styles.calendarTypo]}>
            Lịch Thời Khóa Biểu
          </Text>
          <View style={[styles.bottomcontent, styles.bottomcontentLayout]}>
            <View style={[styles.today, styles.todayPosition]}>
              <Ionicons
                name="calendar-outline"
                size={20}
                style={styles.iconCalendar}
              ></Ionicons>
              <Text style={[styles.vicSpXp, styles.vicSpXpTypo]}>
                Việc sắp xếp trở nên dễ dàng hơn
              </Text>
            </View>
            <Ionicons
              name="add-outline"
              size={26}
              style={[styles.iconPlus, styles.iconLayout]}
            ></Ionicons>
          </View>
        </View>

        <View style={[styles.view1, styles.viewLayout]}>
          <View style={styles.leftcontent}>
            <View style={[styles.content, styles.contentLayout]} />
            <Image
              style={[styles.howLongDoesAnOrderLast1Icon, styles.contentLayout]}
              resizeMode="cover"
              source={require("../../Imgs/Item/images1.png")}
            />
          </View>
          <Text style={[styles.lchThiKha, styles.calendarTypo]}>
            Lịch Thời Khóa Biểu
          </Text>
          <View style={[styles.bottomcontent1, styles.bottomcontentLayout]}>
            <View style={[styles.today, styles.todayPosition]}>
              <Ionicons
                name="calendar-outline"
                size={20}
                style={styles.iconCalendar}
              ></Ionicons>
              <Text style={[styles.vicSpXp, styles.vicSpXpTypo]}>
                Việc sắp xếp trở nên dễ dàng hơn
              </Text>
            </View>
            <Ionicons
              name="add-outline"
              size={26}
              style={[styles.iconPlus, styles.iconLayout]}
            ></Ionicons>
          </View>
        </View>

        <View style={[styles.view2, styles.viewLayout]}>
          <View style={styles.leftcontent}>
            <View style={[styles.content, styles.contentLayout]} />
            <Image
              style={[styles.howLongDoesAnOrderLast1Icon, styles.contentLayout]}
              resizeMode="cover"
              source={require("../../Imgs/Item/images1.png")}
            />
          </View>
          <Text style={[styles.lchThiKha, styles.calendarTypo]}>
            Lịch Thời Khóa Biểu
          </Text>
          <View style={[styles.bottomcontent2, styles.bottomcontentLayout]}>
            <View style={[styles.today, styles.todayPosition]}>
              <Ionicons
                name="calendar-outline"
                size={20}
                style={styles.iconCalendar}
              ></Ionicons>
              <Text style={[styles.vicSpXp, styles.vicSpXpTypo]}>
                Việc sắp xếp trở nên dễ dàng hơn
              </Text>
            </View>
            <Ionicons
              name="add-outline"
              size={26}
              style={[styles.iconPlus, styles.iconLayout]}
            ></Ionicons>
          </View>
        </View>
        <View style={[styles.view3, styles.viewLayout]}>
          <View style={styles.leftcontent}>
            <View style={[styles.content, styles.contentLayout]} />
            <Image
              style={[styles.howLongDoesAnOrderLast1Icon, styles.contentLayout]}
              resizeMode="cover"
              source={require("../../Imgs/Item/images1.png")}
            />
          </View>
          <Text style={[styles.lchThiKha, styles.calendarTypo]}>
            Lịch Thời Khóa Biểu
          </Text>
          <View style={[styles.bottomcontent, styles.bottomcontentLayout]}>
            <View style={[styles.today, styles.todayPosition]}>
              <Ionicons
                name="calendar-outline"
                size={20}
                style={styles.iconCalendar}
              ></Ionicons>
              <Text style={[styles.vicSpXp, styles.vicSpXpTypo]}>
                Việc sắp xếp trở nên dễ dàng hơn
              </Text>
            </View>
            <Ionicons
              name="add-outline"
              size={26}
              style={[styles.iconPlus, styles.iconLayout]}
            ></Ionicons>
          </View>
        </View>
      </View>

      <Text style={[styles.calendar, styles.calendarTypo]}>Calendar</Text>
      <View style={[styles.search, styles.searchLayout]}>
        <TextInput
          style={[styles.textinput, styles.searchLayout]}
          label="Search"
          placeholder="Search any thing!"
          mode="outlined"
          theme={{ colors: { background: "#46b1ff" } }}
        />
        <View style={[styles.wrapperIconSearch, styles.wrapperFlexBox]}>
          <Ionicons name="search-outline" size={30}></Ionicons>
        </View>
        <Text style={[styles.findAnyThing, styles.vicSpXpTypo]}>
          Find any thing?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout1: {
    width: 314,
    left: 23,
  },
  viewLayout: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 104,
    left: 0,
    width: 314,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  iconWrapperLayout: {
    transform: [
      {
        scale: 1.077,
      },
    ],
    objectFit: "contain",
    height: "100%",
    left: 0,
    width: "100%",
  },
  contentLayout: {
    height: 71,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  calendarTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  bottomcontentLayout: {
    width: 171,
    height: 42,
    left: 123,
    position: "absolute",
  },
  todayPosition: {
    left: 0,
    top: 0,
  },
  vicSpXpTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden", 
  },
  searchLayout: {
    borderColor: "black",
    borderRadius: 10,
    position: "absolute",
  },
  wrapperRectangle1Child: {
    top: 4,
    transform: [
      {
        scale: 1.077,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  wrapperRectangle1: {
    borderRadius: Border.br_smi,
    height: 104,
    left: 0,
    width: 314,
    top: 0,
  },
  content: {
    backgroundColor: Color.colorGainsboro,
    width: 84,
    left: 0,
    top: 0,
  },
  howLongDoesAnOrderLast1Icon: {
    width: 86,
    left: 11,
    top: 12,
  },
  leftcontent: {
    left: 13,
    width: 97,
    height: 83,
    top: 12,
    position: "absolute",
  },
  lchThiKha: {
    top: 29,
    fontSize: FontSize.size_xl,
    left: 123,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  iconCalendar: {
    width: 27,
    height: 25,
  },
  vicSpXp: {
    color: Color.colorDarkslategray,
    width: 123,
    marginLeft: -7,
    height: 42,
  },
  today: {
    width: 143,
    flexDirection: "row",
    paddingTop: Padding.p_10xs,
    height: 42,
    position: "absolute",
  },
  iconPlus: {
    height: "50%",
    width: "12.28%",
    top: "1%",
    right: "0%",
    bottom: "38.1%",
    left: "87.72%",
  },
  bottomcontent: {
    top: 53,
    height: 42,
  },
  view: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 104,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperRectangle1Item: {
    top: 4,
    transform: [
      {
        scale: 1.077,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  bottomcontent1: {
    top: 60,
    height: 42,
  },
  view1: {
    top: 118,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperRectangle1Inner: {
    top: 4,
    transform: [
      {
        scale: 1.077,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  bottomcontent2: {
    top: 56,
    height: 42,
  },
  view2: {
    top: 236,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 4,
    transform: [
      {
        scale: 1.077,
      },
    ],
    objectFit: "contain",
    height: "100%",
    position: "absolute",
  },
  view3: {
    top: 354,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  contetn: {
    top: 139,
    height: 458,
    position: "absolute",
  },
  calendar: {
    top: 101,
    fontSize: 20,
    left: 11,
  },
  textinput: {
    top: 7,
    left: 67,
    width: 235,
    height: 38,
  },
  iconSearch: {
    transform: [
      {
        scale: 1.077,
      },
    ],
    objectFit: "contain",
    height: "100%",
    left: 0,
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: 0,
  },
  wrapperIconSearch: {
    height: "53.43%",
    width: "11.4%",
    top: "20.9%",
    right: "82.55%",
    bottom: "25.67%",
    left: "6.05%",
  },
  findAnyThing: {
    top: 22,
    left: 83,
    color: "#fff",
    display: "none",
    position: "absolute",
  },
  search: {
    top: 15,
    height: 67,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 314,
    left: 23,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_mini,
  },
  postscreens: {
    flex: 1,
    height: 617,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#ebe8e8",
  },
});

export default PostScreen;
