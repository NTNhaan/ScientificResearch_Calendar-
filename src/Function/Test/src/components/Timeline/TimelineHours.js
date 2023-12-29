import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { DEFAULT_PROPS } from "../../constants";
import { useTimelineCalendarContext } from "../../context/TimelineProvider";
import { ThemeProperties } from "../../types";

export const HourItem = { text: string, hourNumber: number };

const TimelineHours = () => {
  const { hours, hourWidth, timeIntervalHeight, spaceFromTop, theme } =
    useTimelineCalendarContext();

  const _renderHour = (hour, index) => {
    return (
      <HourItem
        key={index}
        hour={hour}
        index={index}
        timeIntervalHeight={timeIntervalHeight}
        spaceContent={spaceFromTop}
        theme={theme}
      />
    );
  };

  return (
    <View
      style={[
        styles.hours,
        {
          width: hourWidth,
          backgroundColor: theme.backgroundColor,
          marginBottom: spaceFromTop,
        },
      ]}
    >
      {hours.map(_renderHour)}
      <View
        style={[
          styles.verticalLine,
          { top: spaceFromTop, backgroundColor: theme.cellBorderColor },
        ]}
      />
    </View>
  );
};

export default memo(TimelineHours);

const HourItem = ({ hour, index, timeIntervalHeight, spaceContent, theme }) => {
  const hourLabelStyle = Animated.useAnimatedStyle(() => {
    return { top: timeIntervalHeight.value * index - 6 + spaceContent };
  });

  return (
    <Animated.Text
      allowFontScaling={theme.allowFontScaling}
      key={`hourLabel_${hour.text}`}
      style={[styles.hourText, theme.hourText, hourLabelStyle]}
    >
      {hour.text}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  hours: {
    alignItems: "center",
    overflow: "hidden",
  },
  hourText: {
    position: "absolute",
    fontSize: 10,
    color: DEFAULT_PROPS.BLACK_COLOR,
  },
  verticalLine: {
    width: 1,
    backgroundColor: DEFAULT_PROPS.CELL_BORDER_COLOR,
    position: "absolute",
    right: 0,
    height: "100%",
  },
});
