import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useTimelineCalendarContext } from "../../../context/TimelineProvider";
import { UnavailableItemProps } from "../../../types";

const UnavailableMultipleDays = ({
  diffDays,
  left,
  right,
  renderCustomUnavailableItem,
}) => {
  const { columnWidth, theme, timeIntervalHeight, totalHours } =
    useTimelineCalendarContext();

  return (
    <View
      pointerEvents="box-none"
      style={[
        styles.unavailableDay,
        {
          left,
          right,
          backgroundColor: theme.unavailableBackgroundColor,
          width: diffDays * columnWidth,
        },
      ]}
    >
      {renderCustomUnavailableItem &&
        renderCustomUnavailableItem({
          timeIntervalHeight: timeIntervalHeight,
          hour: totalHours,
          width: diffDays * columnWidth,
        })}
    </View>
  );
};

export default memo(UnavailableMultipleDays);

const styles = StyleSheet.create({
  unavailableDay: {
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
});
