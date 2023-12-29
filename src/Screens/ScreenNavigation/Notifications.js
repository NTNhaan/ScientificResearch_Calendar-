import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Border } from "../../Styles/Global";
import { autoScroll } from "@shopify/flash-list";
const Notifications = () => {
  return (
    <ScrollView
      style={styles.notification}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.notificationScrollViewContent}
    >
      <View style={styles.content}>
        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../../Imgs/Avatar/Avatar1.png")}
            />
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            {/* <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../assets/howlongdoesanorderlast1.png")}
            /> */}
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>

        <View style={styles.viewShadowBox}>
          <Text style={[styles.cpNhtIm, styles.mAgoFlexBox]}>
            Cập nhật điểm
          </Text>
          <Text style={[styles.imMnMng, styles.mAgoTypo]}>
            Điểm môn mạng máy tính đã được cập nhật, các em xem và phản hồi tỏng
            hôm nay.
          </Text>
          <View style={[styles.rightcontent, styles.rightcontentFlexBox]}>
            {/* <Image
              style={styles.howLongDoesAnOrderLast1Icon}
              resizeMode="cover"
              source={require("../assets/howlongdoesanorderlast1.png")}
            /> */}
          </View>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>5m ago</Text>
          <Text style={[styles.lchThiKha, styles.mAgoTypo]}>
            Lịch thời khóa biểu
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 23,
    paddingVertical: 32,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rightcontentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  mAgoFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  mAgoTypo: {
    fontSize: FontSize.size_3xs,
    // fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
    position: "absolute",
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
    width: "100%",
    left: 0,
    position: "absolute",
  },
  wrapperRectangle1: {
    top: 0,
    borderRadius: Border.br_smi,
    display: "flex",
    left: 0,
    alignItems: "center",
    position: "absolute",
    height: 104,
    width: 314,
  },
  cpNhtIm: {
    top: 30,
    fontSize: FontSize.size_xl,
    // fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.colorBlack,
    left: 29,
    position: "absolute",
  },
  imMnMng: {
    top: 52,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 205,
    height: 49,
    left: 29,
    fontSize: FontSize.size_3xs,
  },
  howLongDoesAnOrderLast1Icon: {
    width: 42,
    height: 42,
    borderRadius: Border.br_98xl,
  },
  rightcontent: {
    top: 32,
    left: 251,
    backgroundColor: Color.colorGainsboro,
    width: 50,
    height: 50,
    borderRadius: Border.br_98xl,
    alignItems: "center",
    position: "absolute",
  },
  mAgo: {
    top: 9,
    left: 259,
    textAlign: "center",
    color: Color.colorBlack,
  },
  lchThiKha: {
    top: 5,
    left: 14,
    textAlign: "center",
    color: Color.colorBlack,
  },
  view: {
    backgroundColor: "white",
    height: 104,
    width: 314,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  viewShadowBox: {
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 14,
    height: 104,
    width: 314,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  content: {
    height: autoScroll,
  },
  notification: {
    backgroundColor: "#ebe8e8",
    width: "100%",
    maxWidth: "100%",
    flex: 1,
    overflow: "hidden",
    // backgroundImage: {
    //   flex: 1,
    //   resizeMode: "cover",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   uri: "src/Imgs/Item/viewtdmu.jpg",
    // },
  },
});

export default Notifications;
