import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Color, FontFamily, FontSize } from "../../Styles/Global";
import Ionicons from "react-native-vector-icons/Ionicons";
import { autoScroll } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";

const HomeScreen1 = ({ route }) => {
  const navigation = useNavigation();
  const { setOptions } = navigation;

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="black"
            style={{ marginLeft: 16 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [route]);
  return (
    <View style={styles.androidLarge1}>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} // để cho thanh cuộn không hiển thị lên khi cuộn
        contentContainerStyle={styles.contentScrollViewContent}
      >
        <View style={[styles.infomation, styles.infomationFlexBox]}>
          <Ionicons name="link-outline"></Ionicons>
          <Text style={styles.text}>2124802010059</Text>
        </View>
        <View style={[styles.daymonthyear, styles.infomationFlexBox]}>
          <Ionicons name="arrow-back-outline" size={20} />
          <Text style={styles.text1}>4/12/2023</Text>
          <Ionicons name="arrow-forward-outline" size={20} />
        </View>

        <View style={styles.scrollview}>
          <View style={styles.monday}>
            <View style={[styles.maincontent, styles.maincontentPosition]}>
              <View
                style={[styles.detailsubject, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit6, styles.titTypo]}>Tiết: 6 - 10</Text>
                <Text style={[styles.sTit5, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit6, styles.titTypo]}>
                  Giờ: 12:30 - 16h30
                </Text>
                <Text style={[styles.phngC202, styles.titTypo]}>
                  Phòng : C.202
                </Text>
                <Text
                  style={[styles.gingVinV, styles.titTypo]}
                  numberOfLines={2}
                >
                  Giảng viên: Võ Quốc Lương
                </Text>
              </View>
              <Text
                style={[styles.tTngH, styles.tTngHPosition]}
                numberOfLines={2}
              >
                Thực hành lập trình web (0 + 2)
              </Text>
              <View
                style={[styles.maincontentChild, styles.maincontentChildLayout]}
              />
            </View>
            <Text style={styles.thHai04122023}>Thứ Hai (04/12/2023)</Text>
            <View style={styles.leftcontent}>
              <Text style={styles.text2}>6</Text>
              <View
                style={[
                  styles.leftcontentChild,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View
                style={[
                  styles.leftcontentItem,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View style={styles.wrapperIconCalendar}>
                <Ionicons name="calendar-outline" size={30} />
              </View>
            </View>
          </View>
          <View style={[styles.wesday, styles.wesdayLayout]}>
            <View style={[styles.maincontent1, styles.maincontentPosition]}>
              <View
                style={[styles.detailsubject1, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit1, styles.titTypo]}>Tiết: 1 - 5</Text>
                <Text style={[styles.sTit51, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit1, styles.titTypo]}>
                  Giờ: 07:30 - 11:30
                </Text>
                <Text style={[styles.tit6, styles.titTypo]}>Phòng : C.202</Text>
                <Text
                  style={[styles.gingVinPhm, styles.titTypo]}
                  numberOfLines={2}
                >
                  Giảng viên: Phạm Thị Hồng Nhung
                </Text>
              </View>
              <Text
                style={[styles.tTngH, styles.tTngHPosition]}
                numberOfLines={2}
              >
                Tư tưởng Hồ Chí Minh (2 + 0)
              </Text>
              <View
                style={[styles.maincontentChild, styles.maincontentChildLayout]}
              />
            </View>
            <Text style={styles.thHai04122023}>Thứ Tư (06/12/2023)</Text>
            <View style={styles.leftcontent}>
              <Text style={styles.text2}>1</Text>
              <View
                style={[
                  styles.leftcontentItem,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View
                style={[
                  styles.leftcontentChild,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View style={styles.wrapperIconCalendar}>
                <Ionicons name="calendar-outline" size={30} />
              </View>
            </View>
          </View>
          <View style={[styles.firday, styles.wesdayLayout]}>
            <View style={[styles.maincontent1, styles.maincontentPosition]}>
              <View
                style={[styles.detailsubject1, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit1, styles.titTypo]}>Tiết: 1 - 5</Text>
                <Text style={[styles.sTit51, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit1, styles.titTypo]}>
                  Giờ: 07:30 - 11:30
                </Text>
                <Text style={[styles.tit6, styles.titTypo]}>Phòng : C.202</Text>
                <Text
                  style={[styles.gingVinPhm, styles.titTypo]}
                  numberOfLines={2}
                >
                  Giảng viên: Phạm Thị Hồng Nhung
                </Text>
              </View>
              <Text
                style={[styles.tTngH, styles.tTngHPosition]}
                numberOfLines={2}
              >
                Tư tưởng Hồ Chí Minh (2 + 0)
              </Text>
              <View
                style={[styles.maincontentInner, styles.maincontentChildLayout]}
              />
            </View>
            <Text style={styles.thHai04122023}>Thứ Sáu (08/12/2023)</Text>
            <View style={styles.leftcontent}>
              <Text style={styles.text2}>1</Text>
              {/* <Image
                style={styles.lineIcon}
                contentFit="cover"
                source={require("../assets/line-2.png")}
              /> */}
              <View
                style={[
                  styles.leftcontentChild,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View
                style={[
                  styles.leftcontentItem,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View style={styles.wrapperIconCalendar}>
                <Ionicons name="calendar-outline" size={30} />
              </View>
            </View>
          </View>
          <View style={[styles.saturday, styles.wesdayLayout]}>
            <View style={[styles.maincontent1, styles.maincontentPosition]}>
              <View
                style={[styles.detailsubject1, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit1, styles.titTypo]}>Tiết: 1 - 5</Text>
                <Text style={[styles.sTit51, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit1, styles.titTypo]}>
                  Giờ: 07:30 - 11:30
                </Text>
                <Text style={[styles.tit6, styles.titTypo]}>Phòng : C.202</Text>
                <Text
                  style={[styles.gingVinPhm, styles.titTypo]}
                  numberOfLines={2}
                >
                  Giảng viên: Phạm Thị Hồng Nhung
                </Text>
              </View>
              <Text
                style={[styles.tTngH, styles.tTngHPosition]}
                numberOfLines={2}
              >
                Tư tưởng Hồ Chí Minh (2 + 0)
              </Text>
              <View
                style={[
                  styles.maincontentChild1,
                  styles.maincontentChildLayout,
                ]}
              />
            </View>
            <Text style={styles.thHai04122023}>Thứ Sáu (08/12/2023)</Text>
            <View style={styles.leftcontent}>
              <Text style={styles.text2}>1</Text>
              <View
                style={[
                  styles.leftcontentChild2,
                  styles.leftcontentChildPosition,
                ]}
              />
              <View
                style={[
                  styles.leftcontentChild,
                  styles.leftcontentChildPosition,
                ]}
              />
              <Ionicons name="calendar-outline" size={30} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({
  contentScrollViewContent: {
    paddingHorizontal: 23,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  infomationFlexBox: {
    paddingHorizontal: 70,
    flexDirection: "row",
  },
  iconLayout1: {
    height: 10,
    width: 15,
  },
  maincontentPosition: {
    height: 200,
    left: 57,
    top: 61,
    position: "absolute",
  },
  detailsubjectPosition: {
    height: 145,
    top: 55,
    position: "absolute",
  },
  titTypo: {
    height: 29,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
  },
  tTngHPosition: {
    height: 50,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
  },
  maincontentChildLayout: {
    height: 131,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorCornflowerblue,
    borderStyle: "solid",
    position: "absolute",
  },
  leftcontentChildPosition: {
    left: 14,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorCornflowerblue,
    borderStyle: "solid",
    position: "absolute",
  },
  wesdayLayout: {
    width: 321,
    height: 261,
    left: 10,
    position: "absolute",
  },
  iconLink: {
    width: 7,
    height: 9,
  },
  text: {
    fontSize: FontSize.size_3xs,
    marginLeft: 2,
    textAlign: "center",
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
  },
  infomation: {
    paddingLeft: 110,
  },
  text1: {
    width: 110,
    marginLeft: 10,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
  },
  iconMinus1: {
    marginLeft: 10,
  },
  daymonthyear: {
    width: 159,
    height: 24,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 10,
  },
  tit6: {
    width: 128,
  },
  sTit5: {
    width: 79,
  },
  phngC202: {
    width: 125,
  },
  gingVinV: {
    width: 239,
  },
  detailsubject: {
    left: 25,
    width: 239,
  },
  thcHnhLp: {
    width: 10,
  },
  maincontentChild: {
    left: 5,
    height: 131,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorCornflowerblue,
    borderStyle: "solid",
    top: 55,
  },
  maincontent: {
    width: 264,
  },
  thHai04122023: {
    top: 7,
    left: 45,
    width: 221,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
  },
  text2: {
    left: 9,
    width: 12,
    top: 61,
    position: "absolute",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
  },
  leftcontentChild: {
    top: 44,
    height: 18,
  },
  leftcontentItem: {
    top: 87,
    height: 160,
  },
  iconLayout: {
    transform: [
      {
        scale: 1.102,
      },
    ],
    objectFit: "contain",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperIconCalendar: {
    display: "flex",
    left: "0%",
    bottom: "85.77%",
    right: "0%",
    top: "0%",
    height: "14.23%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  leftcontent: {
    width: 29,
    height: 246,
    left: 10,
    top: 0,
    position: "absolute",
  },
  monday: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 321,
    height: 261,
    left: 10,
    top: 0,
    position: "absolute",
  },
  tit1: {
    width: 132,
  },
  sTit51: {
    width: 81,
  },
  gingVinPhm: {
    width: 246,
  },
  detailsubject1: {
    left: 26,
    width: 246,
  },
  tTngH: {
    width: 300,
  },
  maincontent1: {
    width: 272,
  },
  leftcontentInner: {
    top: 84,
    height: 163,
  },
  wesday: {
    backgroundColor: "white",
    borderRadius: 10,
    top: 271,
  },
  maincontentInner: {
    top: 56,
    left: 5,
    height: 131,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorCornflowerblue,
    borderStyle: "solid",
  },
  lineIcon: {
    top: 85,
    left: 15,
    width: 1,
    height: 162,
    position: "absolute",
  },
  firday: {
    backgroundColor: "white",
    borderRadius: 10,
    top: 542,
  },
  maincontentChild1: {
    left: 12,
    top: 55,
  },
  leftcontentChild2: {
    top: 90,
    height: 157,
  },
  iconCalendar3: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "85.77%",
    right: "0%",
    top: "0%",
    height: "14.23%",
    position: "absolute",
    width: "100%",
  },
  saturday: {
    backgroundColor: "white",
    borderRadius: 10,
    top: 812,
  },
  scrollview: {
    width: 335,
    height: 1100,
    marginTop: 5,
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
  androidLarge1: {
    backgroundColor: "#ebe8e8",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

// import { Text, View } from "react-native";
// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import cheerio from "react-native-cheerio/lib/cheerio";

// // async function getHTML() {
// //   const { data: html } = await axios.get(url);
// //   return html;
// // }
// // getHTML().then((res) => {
// //   const $ = cheerio.load(res);
// //   $(".lister-list>tr").each((i, movie) => {
// //     const title = $(movie).find(".titleColumn a").text();
// //     const rating = $(movie).find(".ratingColumn strong").text();
// //     moviesData[title] = rating;
// //   });
// //   fs.writeFile("moviesData.json", JSON.stringify(moviesData), (error) => {
// //     if (error) throw error;
// //     console.log("file sucessfully saved!");
// //   });
// // });

// const HomeScreen1 = () => {
//   const [moviesData, setMoviesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: html } = await axios.get(
//           "https://www.imdb.com/chart/top/?ref_=nv_mv_250"
//         );
//         const $ = cheerio.load(html);
//         const newData = {};

//         $(".lister-list>tr").each((i, movie) => {
//           const title = $(movie).find(".titleColumn a").text();
//           const rating = $(movie).find(".ratingColumn strong").text();
//           newData[title] = rating;
//         });

//         setMoviesData(newData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <View>
//       <Text>Place to display fetched data:</Text>
//       {Object.keys(moviesData).map((title) => (
//         <View key={title}>
//           <Text style={{ fontSize: 20 }}>{title}</Text>
//           <Text style={{ fontSize: 16 }}>Rating: {moviesData[title]}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default HomeScreen1;
