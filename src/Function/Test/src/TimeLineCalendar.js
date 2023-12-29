import React, { forwardRef } from "react";
import { TimelineCalendarHandle, TimelineCalendarProps } from "./types";
import TimelineProvider from "./context/TimelineProvider";
import { TimeLine } from "./components";

const TimelineCalendar = (
  {
    renderDayBarItem,
    onPressDayNum,
    onDragCreateEnd,
    onLongPressBackground,
    onPressBackground,
    onPressOutBackground,
    onDateChanged,
    isLoading,
    holidays,
    events,
    onLongPressEvent,
    onPressEvent,
    renderEventContent,
    selectedEvent,
    onEndDragSelectedEvent,
    renderCustomUnavailableItem,
    highlightDates,
    onChange,
    editEventGestureEnabled,
    renderSelectedEventContent,
    EditIndicatorComponent,
    renderHalfLineCustom,
    halfLineContainerStyle,
    onTimeIntervalHeightChange,
    ...timelineProviderProps
  },
  ref
) => {
  const timelineProps = {
    renderDayBarItem,
    onPressDayNum,
    onDragCreateEnd,
    onLongPressBackground,
    onPressBackground,
    onPressOutBackground,
    onDateChanged,
    isLoading,
    holidays,
    events,
    onLongPressEvent,
    onPressEvent,
    renderEventContent,
    selectedEvent,
    onEndDragSelectedEvent,
    renderCustomUnavailableItem,
    highlightDates,
    onChange,
    editEventGestureEnabled,
    renderSelectedEventContent,
    EditIndicatorComponent,
    renderHalfLineCustom,
    halfLineContainerStyle,
    onTimeIntervalHeightChange,
  };

  return (
    <TimelineProvider {...timelineProviderProps}>
      <Timeline {...timelineProps} ref={ref} />
    </TimelineProvider>
  );
};

export default TimelineCalendar;
