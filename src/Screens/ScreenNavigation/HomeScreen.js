// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Calendar from "../../Function/CalendarFunc";

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const Boxes = () => {
//     return (
//       <View style={styles.boxContainer}>
//         <View style={styles.box}>
//           <View style={styles.inner}>
//             <TouchableOpacity
//               activeOpacity={0.9}
//               onPress={() => {
//                 navigation.navigate("CalendarFunc");
//               }}
//             >
//               <Text>Lịch Cá Nhân</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.box}>
//           <View style={styles.inner}>
//             <TouchableOpacity
//               activeOpacity={0.9}
//               onPress={() => {
//                 navigation.navigate("MainApp");
//               }}
//             >
//               <Text>Lịch Nhóm</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.box}>
//           <View style={styles.inner}>
//             <Text>Lịch Thời Khóa Biểu</Text>
//           </View>
//         </View>

//         <View style={styles.box}>
//           <View style={styles.inner}>
//             <Text>Lịch Làm Việc</Text>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return <SafeAreaView style={styles.contaier}>{<Boxes />}</SafeAreaView>;
// };

// const styles = StyleSheet.create({
//   contaier: {
//     flex: 1,
//   },
//   boxContainer: {
//     width: "100%",
//     height: "100%",
//     // backgroundColor: "red",
//     padding: 5,
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   box: {
//     width: "50%",
//     height: "50%",
//     padding: 5,
//     // backgroundColor: "green",
//   },
//   inner: {
//     flex: 1,
//     backgroundColor: "#c8c8c8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default HomeScreen;

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Border, Color, FontFamily, FontSize } from "../../Styles/Global";
import Ionicons from "react-native-vector-icons/Ionicons";
import { autoScroll } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import { index } from "cheerio/lib/api/traversing";

//=========================================================
const HomeScreen = () => {
  const navigation = useNavigation();
  // const animatedScale = useRef(new Animated.Value(0)).current;
  // const animatedScale1 = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(
    Array.from({ length: 5 }, () => new Animated.Value(0))
  ).current;
  const Components = [
    "CalendarFunc",
    "Calendar",
    "ScheduleTimeTable",
    "PostScreen",
    "Signup",
  ];

  useEffect(() => {
    animatedValue.forEach((animatedValues) => {
      animatedValues.setValue(1);
    });
    // animatedScale1.setValue(1);
  }, []);

  const handleButtonPress = (index) => {
    const animationScale = animatedValue[index];
    Animated.spring(animationScale, {
      toValue: 0.8,
      bounciness: 24,
      speed: 40,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate(Components[index]);
      animationScale.setValue(1);
    });
  };
  return (
    <View style={styles.backgroundContainer}>
      <Image
        style={styles.backgroundImage}
        source={require("../../Imgs/Item/viewtdmu.jpg")}
      />

      <ScrollView
        style={styles.homescreens}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.homeScreensScrollViewContent}
      >
        <View style={styles.contetn}>
          {animatedValue.map((animationScale, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              onPress={() => handleButtonPress(index)}
              style={[
                { transform: [{ scale: animationScale }] },
                styles.TouchableOpacitystyles,
              ]}
            >
              <Animated.View style={[styles.view, styles.viewLayout1]}>
                <View style={styles.leftcontent}>
                  <View style={[styles.content, styles.contentLayout]} />
                  <Image
                    style={[
                      styles.howLongDoesAnOrderLast1Icon,
                      styles.contentLayout,
                    ]}
                    contentFit="cover"
                    source={require("../../Imgs/Item/images4.png")}
                  />
                </View>
                <Text style={styles.lchThiKha}>Lịch Thời Khóa Biểu</Text>
                <View style={[styles.today, styles.todayPosition]}>
                  <Ionicons name="calendar-outline"></Ionicons>
                  <Text style={[styles.today1, styles.todayTypo]}>Today</Text>
                </View>
                <View style={[styles.teamimage, styles.teamimageLayout]}>
                  <View style={[styles.image, styles.imageLayout]}>
                    <Image
                      style={styles.imageLayout}
                      contentFit="cover"
                      source={require("../../Imgs/images1.png")}
                    />
                    <Image
                      style={styles.images11Icon}
                      contentFit="cover"
                      source={require("../../Imgs/Avatar/Avatar1.png")}
                    />
                  </View>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={styles.imageLayout}
                      contentFit="cover"
                      source={require("../../Imgs/images2.png")}
                    />
                    <Image
                      style={styles.images11Icon}
                      contentFit="cover"
                      source={require("../../Imgs/Avatar/Avatar1.png")}
                    />
                  </View>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={styles.imageLayout}
                      contentFit="cover"
                      source={require("../../Imgs/Avatar/Avatar1.png")}
                    />
                    <Image
                      style={styles.images11Icon}
                      contentFit="cover"
                      source={require("../../Imgs/Avatar/Avatar1.png")}
                    />
                  </View>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={styles.imageLayout}
                      contentFit="cover"
                      source={require("../../Imgs/images2.png")}
                    />
                    <Image
                      style={styles.images11Icon}
                      contentFit="cover"
                      source={require("../../Imgs/Avatar/Avatar1.png")}
                    />
                  </View>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}

          {/* <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            // onPress={() => handleButtonPress(index)}
            // style={{ transform: [{ scale: animationScale }] }}
          >
            <Animated.View style={[styles.view, styles.viewLayout]}>
              <View style={styles.leftcontent}>
                <View style={[styles.content, styles.contentLayout]} />
                <Image
                  style={[
                    styles.howLongDoesAnOrderLast1Icon,
                    styles.contentLayout,
                  ]}
                  contentFit="cover"
                  source={require("../../Imgs/images3.png")}
                />
              </View>
              <Text style={styles.lchThiKha}>Lịch Thời Khóa Biểu</Text>
              <View style={[styles.today2, styles.todayPosition]}>
                <Ionicons name="calendar-outline"></Ionicons>
                <Text style={[styles.today3, styles.todayTypo]}>08/30</Text>
              </View>
              <View style={[styles.teamimage, styles.teamimageLayout]}>
                <View style={[styles.image, styles.imageLayout]}>
                  <Image
                    style={styles.imageLayout}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar1.png")}
                  />
                  <Image
                    style={styles.images11Icon}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar1.png")}
                  />
                </View>
                <View style={[styles.image1, styles.imageLayout]}>
                  <Image
                    style={styles.imageLayout}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar2.png")}
                  />
                  <Image
                    style={styles.images11Icon}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar2.png")}
                  />
                </View>
                <View style={[styles.image1, styles.imageLayout]}>
                  <Image
                    style={styles.imageLayout}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar3.png")}
                  />
                  <Image
                    style={styles.images11Icon}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar3.png")}
                  />
                </View>
                <View style={[styles.image1, styles.imageLayout]}>
                  <Image
                    style={styles.imageLayout}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar4.png")}
                  />
                  <Image
                    style={styles.images11Icon}
                    contentFit="cover"
                    source={require("../../Imgs/Avatar/Avatar4.png")}
                  />
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>

          <View style={[styles.view, styles.viewLayout]}>
            <View style={styles.leftcontent}>
              <View style={[styles.content, styles.contentLayout]} />
              <Image
                style={[
                  styles.howLongDoesAnOrderLast1Icon,
                  styles.contentLayout,
                ]}
                contentFit="cover"
                source={require("../../Imgs/images2.png")}
              />
            </View>
            <Text style={styles.lchThiKha}>Lịch Thời Khóa Biểu</Text>
            <View style={[styles.today2, styles.todayPosition]}>
              <Ionicons name="calendar-outline"></Ionicons>
              <Text style={[styles.today3, styles.todayTypo]}>Today</Text>
            </View>
            <View style={[styles.teamimage, styles.teamimageLayout]}>
              <View style={[styles.image, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar2.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar3.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.view, styles.viewLayout]}>
            <View style={styles.leftcontent}>
              <View style={[styles.content, styles.contentLayout]} />
              <Image
                style={[
                  styles.howLongDoesAnOrderLast1Icon,
                  styles.contentLayout,
                ]}
                contentFit="cover"
                source={require("../../Imgs/images1.png")}
              />
            </View>
            <Text style={styles.lchThiKha}>Lịch Thời Khóa Biểu</Text>
            <View style={[styles.today2, styles.todayPosition]}>
              <Ionicons name="calendar-outline"></Ionicons>
              <Text style={[styles.today3, styles.todayTypo]}>Today</Text>
            </View>
            <View style={[styles.teamimage, styles.teamimageLayout]}>
              <View style={[styles.image, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar5.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar3.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar4.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.view, styles.viewLayout]}>
            <View style={styles.leftcontent}>
              <View style={[styles.content, styles.contentLayout]} />
              <Image
                style={[
                  styles.howLongDoesAnOrderLast1Icon,
                  styles.contentLayout,
                ]}
                contentFit="cover"
                source={require("../../Imgs/Item/Images5.png")}
              />
            </View>
            <Text style={styles.lchThiKha}>Lịch Thời Khóa Biểu</Text>
            <View style={[styles.today2, styles.todayPosition]}>
              <Ionicons name="calendar-outline"></Ionicons>
              <Text style={[styles.today3, styles.todayTypo]}>Today</Text>
            </View>
            <View style={[styles.teamimage, styles.teamimageLayout]}>
              <View style={[styles.image, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar5.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar3.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar4.png")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/images2.png")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/Avatar/Avatar1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.view, styles.viewLayout]}>
            <View style={styles.leftcontent}>
              <View style={[styles.content, styles.contentLayout]} />
              <Image
                style={[
                  styles.howLongDoesAnOrderLast1Icon,
                  styles.contentLayout,
                ]}
                contentFit="cover"
                source={require("../../Imgs/Item/images6.png")}
              />
            </View>
            <Text style={styles.lchThiKha}>Lịch Thời Khóa Biểu</Text>
            <View style={[styles.today2, styles.todayPosition]}>
              <Ionicons name="calendar-outline"></Ionicons>
              <Text style={[styles.today3, styles.todayTypo]}>Today</Text>
            </View>
            <View style={[styles.teamimage5, styles.teamimageLayout]}>
              <View style={[styles.image, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
              </View>
              <View style={[styles.image1, styles.imageLayout]}>
                <Image
                  style={styles.imageLayout}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
                <Image
                  style={styles.images11Icon}
                  contentFit="cover"
                  source={require("../../Imgs/imageProfile.jpg")}
                />
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Tùy chỉnh theo yêu cầu của bạn
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  homeScreensScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 23,
    paddingVertical: 32,
    alignItems: "flex-start", // 2 thuộc tính này cho content có thể bắt đầu scroll
    justifyContent: "flex-start",
  },
  viewLayout1: {
    overflow: "hidden",
    height: 104,
    width: 314,
  },
  contentPosition: {
    top: 0,
    left: 0,
  },
  contentLayout: {
    borderRadius: 10,
    height: 71,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  todayPosition: {
    flexDirection: "row",
    height: 22,
    left: 228,
    top: 73,
    alignItems: "center",
    position: "absolute",
  },
  todayTypo: {
    color: Color.colorGainsboro,
    textAlign: "center",
    // fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  teamimageLayout: {
    height: 20,
    width: 60,
    top: 75,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  imageLayout: {
    borderRadius: 50,
    width: 22,
    height: 20,
  },
  viewLayout: {
    marginTop: 25,
    overflow: "hidden",
    height: 104,
    width: 314,
  },
  wrapperChildPosition: {
    transform: [
      {
        scale: 1.077,
      },
    ],
    top: 4,
    objectFit: "contain",
    height: "100%",
    left: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperRectangle1: {
    borderRadius: Border.br_smi,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
    height: 104,
    width: 314,
    top: 0,
  },
  content: {
    // backgroundColor: Color.colorGainsboro,
    borderRadius: 10,
    backgroundColor: "#e0dcd7",
    width: 84,
    left: 0,
    top: 0,
  },
  howLongDoesAnOrderLast1Icon: {
    left: 11,
    width: 86,
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
    left: 123,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "center",
    // fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
  },
  iconCalendar: {
    width: 19,
    height: 18,
  },
  today1: {
    fontSize: 17,
    marginLeft: 5,
  },
  today: {
    width: 72,
  },
  images11Icon: {
    borderRadius: Border.br_101xl,
    width: 18,
    height: 17,
    marginTop: -18,
  },
  image: {
    alignItems: "center",
  },
  image1: {
    marginLeft: -9,
    alignItems: "center",
  },
  teamimage: {
    left: 153,
  },
  view: {
    borderRadius: 10,
    backgroundColor: "white",
    zIndex: 0,
  },
  today3: {
    fontSize: FontSize.size_base,
    marginLeft: 3,
  },
  today2: {
    width: 67,
  },
  view1: {
    zIndex: 1,
  },
  view2: {
    zIndex: 2,
  },
  view3: {
    zIndex: 3,
  },
  view4: {
    zIndex: 4,
  },
  teamimage5: {
    left: 149,
  },
  view5: {
    top: 645,
    zIndex: 5,
    left: 0,
    position: "absolute",
  },
  contetn: {
    justifyContent: "space-between",
    height: autoScroll,
  },
  TouchableOpacitystyles: {
    marginVertical: 10,
  },
  homescreens: {
    backgroundColor: "#ebe8e8",
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default HomeScreen;
