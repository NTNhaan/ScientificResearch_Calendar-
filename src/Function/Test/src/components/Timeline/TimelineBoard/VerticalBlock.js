import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { useTimelineCalendarContext } from "../../../context/TimelineProvider";
import { UnavailableHour, UnavailableItemProps } from "../../../types";
import UnavailableHourItem from "./UnavailableHourItem";

const VerticalBlock = ({
  dayIndex,
  isOutsideLimit,
  unavailableHour,
  isDayDisabled,
  renderCustomUnavailableItem,
}) => {
  const { columnWidth, start, end, theme } = useTimelineCalendarContext();

  const _renderUnavailableHour = (hour, i) => {
    const startFixed = Math.max(hour.start, start);
    const endFixed = Math.min(hour.end, end);
    return (
      <UnavailableHourItem
        key={`${dayIndex}_${i}`}
        top={startFixed - start}
        hour={endFixed - startFixed}
        renderCustomUnavailableItem={renderCustomUnavailableItem}
      />
    );
  };

  const _renderUnavailableHours = () => {
    if (!isOutsideLimit) {
      if (isDayDisabled) {
        const startFixed = Math.max(0, start);
        const endFixed = Math.min(24, end);
        return (
          <UnavailableHourItem
            top={startFixed - start}
            hour={endFixed - startFixed}
            renderCustomUnavailableItem={renderCustomUnavailableItem}
          />
        );
      }

      if (unavailableHour) {
        return unavailableHour.map(_renderUnavailableHour);
      }
    }
    return null;
  };

  return (
    <View
      pointerEvents="box-none"
      style={[
        styles.verticalBlock,
        {
          left: columnWidth * dayIndex,
          width: columnWidth,
        },
      ]}
    >
      {_renderUnavailableHours()}
      <View
        style={[
          styles.verticalLine,
          { backgroundColor: theme.cellBorderColor },
        ]}
      />
    </View>
  );
};

export default memo(VerticalBlock);

const styles = StyleSheet.create({
  verticalBlock: { position: "absolute", height: "100%" },
  verticalLine: {
    width: 1,
    backgroundColor: "#E8E9ED",
    position: "absolute",
    height: "100%",
    right: 0,
  },
});
