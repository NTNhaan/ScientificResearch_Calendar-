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

import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Padding } from "../../Styles/Global";
const HomeScreen1 = () => {
  return (
    <View style={styles.iphone1415ProMax1}>
      {/* <View style={[styles.header, styles.headerFlexBox]}>
        <Image
          style={styles.iconMenu}
          contentFit="cover"
          source={require("../assets/-icon-menu.png")}
        />
        <Text style={[styles.thiKhaBiu, styles.textTypo]}>Thời Khóa Biểu</Text>
        <Image
          style={styles.iconUser}
          contentFit="cover"
          source={require("../assets/-icon-user.png")}
        />
      </View> */}
      <View style={styles.content}>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.mondayLayout}>
            <View style={[styles.maincontent, styles.textPosition]}>
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
                <Text style={[styles.gingVinV, styles.titTypo]}>
                  Giảng viên: Võ Quốc Lương
                </Text>
              </View>
              <Text style={[styles.thcHnhLp, styles.tTngH1Position]}>
                Thực hành lập trình web (0 + 2)
              </Text>
            </View>
            <Text style={styles.thHai04122023}>Thứ Hai (04/12/2023)</Text>
            <View style={[styles.leftcontent, styles.leftcontentPosition]}>
              {/* <Image
                style={styles.leftcontentChild}
                contentFit="cover"
                source={require("../assets/line-2.png")}
              /> */}
              <Text style={[styles.text, styles.textPosition]}>6</Text>
              <View style={styles.leftcontentItem} />
              {/* <Image
                style={[styles.iconCalendar, styles.iconLayout3]}
                contentFit="cover"
                source={require("../assets/-icon-calendar.png")}
              /> */}
            </View>
          </View>
          <View style={[styles.wesday, styles.mondayLayout]}>
            <View style={[styles.maincontent, styles.textPosition]}>
              <View
                style={[styles.detailsubject1, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit6, styles.titTypo]}>Tiết: 1 - 5</Text>
                <Text style={[styles.sTit5, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit6, styles.titTypo]}>
                  Giờ: 07:30 - 11:30
                </Text>
                <Text style={[styles.phngC202, styles.titTypo]}>
                  Phòng : C.202
                </Text>
                <Text style={[styles.gingVinV, styles.titTypo]}>
                  Giảng viên: Phạm Thị Hồng Nhung
                </Text>
              </View>
              <Text style={[styles.thcHnhLp, styles.tTngH1Position]}>
                Tư tưởng Hồ Chí Minh (2 + 0)
              </Text>
            </View>
            <Text style={styles.thHai04122023}>Thứ Tư (06/12/2023)</Text>
            <View style={[styles.leftcontent, styles.leftcontentPosition]}>
              {/* <Image
                style={styles.leftcontentChild}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              /> */}
              <Text style={[styles.text, styles.textPosition]}>1</Text>
              <View style={styles.leftcontentItem} />
              <View
                style={[styles.wrapperIconCalendar, styles.wrapperIconFlexBox]}
              >
                {/* <Image
                  style={[styles.iconCalendar1, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/-icon-calendar1.png")}
                /> */}
              </View>
            </View>
          </View>
          <View style={[styles.wesday, styles.mondayLayout]}>
            <View style={[styles.maincontent, styles.textPosition]}>
              <View
                style={[styles.detailsubject1, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit6, styles.titTypo]}>Tiết: 1 - 5</Text>
                <Text style={[styles.sTit5, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit6, styles.titTypo]}>
                  Giờ: 07:30 - 11:30
                </Text>
                <Text style={[styles.phngC202, styles.titTypo]}>
                  Phòng : C.202
                </Text>
                <Text style={[styles.gingVinV, styles.titTypo]}>
                  Giảng viên: Phạm Thị Hồng Nhung
                </Text>
              </View>
              <Text style={styles.tTngH1Position}>
                Tư tưởng Hồ Chí Minh (2 + 0)
              </Text>
            </View>
            <Text style={styles.thHai04122023}>Thứ Sáu (08/12/2023)</Text>
            <View style={[styles.leftcontent, styles.leftcontentPosition]}>
              {/* <Image
                style={styles.leftcontentChild}
                contentFit="cover"
                source={require("../assets/line-22.png")}
              /> */}
              <Text style={[styles.text, styles.textPosition]}>1</Text>
              <View style={styles.leftcontentItem} />
              <View style={[styles.iconCalendar2, styles.leftcontentPosition]}>
                {/* <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require("../assets/vector8.png")}
                />
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
                <Image
                  style={[styles.vectorIcon3, styles.iconLayout3]}
                  contentFit="cover"
                  source={require("../assets/vector11.png")}
                /> */}
              </View>
            </View>
          </View>
          <View style={[styles.wesday, styles.mondayLayout]}>
            <View style={[styles.maincontent, styles.textPosition]}>
              <View
                style={[styles.detailsubject1, styles.detailsubjectPosition]}
              >
                <Text style={[styles.tit6, styles.titTypo]}>Tiết: 1 - 5</Text>
                <Text style={[styles.sTit5, styles.titTypo]}>Số tiết: 5</Text>
                <Text style={[styles.tit6, styles.titTypo]}>
                  Giờ: 07:30 - 11:30
                </Text>
                <Text style={[styles.phngC202, styles.titTypo]}>
                  Phòng : C.202
                </Text>
                <Text style={[styles.gingVinV, styles.titTypo]}>
                  Giảng viên: Phạm Thị Hồng Nhung
                </Text>
              </View>
              <Text style={[styles.thcHnhLp, styles.tTngH1Position]}>
                Tư tưởng Hồ Chí Minh (2 + 0)
              </Text>
            </View>
            <Text style={styles.thHai04122023}>Thứ Sáu (08/12/2023)</Text>
            <View style={[styles.leftcontent, styles.leftcontentPosition]}>
              {/* <Image
                style={styles.leftcontentChild}
                contentFit="cover"
                source={require("../assets/line-23.png")}
              /> */}
              <Text style={[styles.text, styles.textPosition]}>1</Text>
              <View style={styles.leftcontentItem} />
              {/* <Image
                style={[styles.iconCalendar3, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/-icon-calendar2.png")}
              /> */}
            </View>
          </View>
        </ScrollView>
        <View style={[styles.daymonthyear, styles.headerFlexBox]}>
          {/* <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/-icon-minus.png")}
          /> */}
          <Text style={[styles.text4, styles.textTypo]}>4/12/2023</Text>
          {/* <Image
            style={[styles.iconMinus1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/-icon-minus1.png")}
          /> */}
        </View>
      </View>
      {/* <View style={[styles.footer, styles.headerBg]}>
        <View style={[styles.infomation, styles.headerFlexBox]}>
          <View style={styles.iconLink}>
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector12.png")}
            />
            <Image
              style={[styles.vectorIcon5, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector13.png")}
            />
          </View>
          <Text style={[styles.text5, styles.textTypo]}>2124802010059</Text>
        </View>
        <View style={[styles.wrapperIconPlusCircle, styles.wrapperIconFlexBox]}>
          <Image
            style={[styles.iconPlusCircle, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-plus-circle.png")}
          />
        </View>
        <Image
          style={[styles.iconUsers, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/-icon-users.png")}
        />
        <Image
          style={[styles.iconHome, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/-icon-home.png")}
        />
        <Image
          style={[styles.iconBell, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-bell.png")}
        />
        <Image
          style={[styles.iconSettings, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-settings.png")}
        />
      </View> */}
    </View>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  textPosition: {
    top: 59,
    position: "absolute",
  },
  detailsubjectPosition: {
    left: 31,
    top: 53,
    width: 294,
    position: "absolute",
  },
  titTypo: {
    height: 28,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  tTngH1Position: {
    width: 286,
    top: 0,
    left: 0,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  leftcontentPosition: {
    width: 35,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mondayLayout: {
    height: 252,
    width: 400,
  },
  wrapperIconFlexBox: {
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    alignItems: "center",
  },
  iconLayout2: {
    transform: [
      {
        scale: 1.089,
      },
    ],
    objectFit: "contain",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconPosition: {
    bottom: "0%",
    left: "0%",
  },
  vectorIconLayout1: {
    bottom: "79.88%",
    width: "8.55%",
    height: "20.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "85.76%",
    height: "14.24%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout1: {
    height: 10,
    width: 17,
  },
  headerBg: {
    backgroundColor: Color.colorWhite,
    width: 430,
  },
  vectorIconLayout: {
    width: "59.52%",
    height: "65.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: "6.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconMenu: {
    width: 29,
    height: 18,
  },
  thiKhaBiu: {
    width: 179,
    height: 24,
    marginLeft: 65,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  iconUser: {
    width: 50,
    height: 40,
    marginLeft: 65,
  },
  header: {
    height: 65,
    paddingHorizontal: 11,
    paddingTop: 15,
    paddingBottom: Padding.p_3xs,
    width: 430,
    backgroundColor: Color.colorWhite,
  },
  tit6: {
    width: 158,
  },
  sTit5: {
    width: 97,
  },
  phngC202: {
    width: 153,
  },
  gingVinV: {
    width: 294,
  },
  detailsubject: {
    width: 294,
  },
  thcHnhLp: {
    height: 41,
  },
  maincontent: {
    left: 75,
    width: 325,
    height: 193,
  },
  thHai04122023: {
    top: 7,
    left: 48,
    width: 264,
    height: 23,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  leftcontentChild: {
    top: 82,
    left: 18,
    width: 0,
    height: 155,
    position: "absolute",
  },
  text: {
    left: 11,
    width: 14,
    height: 23,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  leftcontentItem: {
    top: 42,
    left: 17,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderRightWidth: 2,
    width: 2,
    height: 17,
    position: "absolute",
  },
  iconCalendar: {
    height: "19.63%",
    bottom: "80.37%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
    top: "0%",
  },
  leftcontent: {
    height: 237,
  },
  detailsubject1: {
    height: 140,
    width: 294,
  },
  iconCalendar1: {
    left: 1,
  },
  wrapperIconCalendar: {
    bottom: "85.76%",
    height: "14.24%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  wesday: {
    marginTop: 10,
  },
  vectorIcon: {
    height: "89.94%",
    top: "10.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  vectorIcon1: {
    right: "19.09%",
    left: "72.36%",
  },
  vectorIcon2: {
    right: "63.53%",
    left: "27.92%",
  },
  vectorIcon3: {
    height: "8.88%",
    top: "39.94%",
    bottom: "51.18%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  iconCalendar2: {
    height: 34,
  },
  iconCalendar3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scrollview: {
    top: 68,
    left: 20,
    position: "absolute",
    flex: 1,
  },
  text4: {
    width: 131,
    marginLeft: 12,
    height: 23,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  iconMinus1: {
    marginLeft: 12,
  },
  daymonthyear: {
    top: 30,
    left: 116,
    width: 190,
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 23,
    position: "absolute",
  },
  content: {
    backgroundColor: "#ebe8e8",
    height: 743,
    width: 430,
  },
  vectorIcon4: {
    right: "1.19%",
    bottom: "34.44%",
    left: "39.29%",
    top: "0%",
  },
  vectorIcon5: {
    top: "34.44%",
    right: "40.48%",
    bottom: "0%",
    left: "0%",
  },
  iconLink: {
    width: 8,
    height: 9,
  },
  text5: {
    fontSize: 10,
    width: 93,
    marginLeft: 2,
    height: 12,
  },
  infomation: {
    top: 2,
    left: 10,
    width: 104,
    height: 12,
    position: "absolute",
  },
  iconPlusCircle: {
    left: 0,
    transform: [
      {
        scale: 1.089,
      },
    ],
    objectFit: "contain",
    height: "100%",
  },
  wrapperIconPlusCircle: {
    height: "45.68%",
    width: "10.28%",
    top: "23.46%",
    right: "42.21%",
    bottom: "30.86%",
    left: "47.51%",
  },
  iconUsers: {
    height: "23.95%",
    width: "6.58%",
    top: "32.1%",
    right: "6.74%",
    bottom: "43.95%",
    left: "86.67%",
  },
  iconHome: {
    height: "34.32%",
    width: "6.95%",
    right: "86.93%",
    bottom: "37.28%",
    left: "6.12%",
    top: "28.4%",
  },
  iconBell: {
    height: "32.22%",
    top: "30.86%",
    right: "67.07%",
    bottom: "36.91%",
    left: "26.4%",
  },
  iconSettings: {
    height: "29.01%",
    right: "23.74%",
    bottom: "42.59%",
    left: "69.72%",
    top: "28.4%",
  },
  footer: {
    height: 81,
    width: 430,
  },
  iphone1415ProMax1: {
    height: 932,
    paddingTop: 39,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});
