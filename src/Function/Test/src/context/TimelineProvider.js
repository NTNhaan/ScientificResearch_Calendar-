import { FlashList } from "@shopify/flash-list";
import moment from "moment-timezone";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PixelRatio, ScrollView, useWindowDimensions } from "react-native";
import { GestureType } from "react-native-gesture-handler";
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { COLUMNS, DEFAULT_PROPS } from "../constants";
import useDeepCompare from "../hooks/useDeepCompare";
import {
  CalendarViewMode,
  TimelineCalendarProps,
  UnavailableHour,
} from "../types";
import {
  calculateDates,
  calculateHours,
  getCurrentDate,
  getTheme,
} from "../untils";

const TimelineCalendarContext = React.createContext();

const TimelineProvider = (props) => {
  const {
    children,
    minDate = DEFAULT_PROPS.MIN_DATE,
    maxDate = DEFAULT_PROPS.MAX_DATE,
    viewMode = DEFAULT_PROPS.VIEW_MODE,
    firstDay = DEFAULT_PROPS.FIRST_DAY,
    initialDate: initDate = DEFAULT_PROPS.INITIAL_DATE,
    start = DEFAULT_PROPS.START,
    end = DEFAULT_PROPS.END,
    hourWidth = DEFAULT_PROPS.HOUR_WIDTH,
    timeInterval = DEFAULT_PROPS.TIME_INTERVAL,
    initialTimeIntervalHeight = DEFAULT_PROPS.INIT_TIME_INTERVAL_HEIGHT,
    minTimeIntervalHeight: initialMinTimeIntervalHeight,
    maxTimeIntervalHeight = DEFAULT_PROPS.MAX_TIME_INTERVAL_HEIGHT,
    syncedLists = true,
    theme: initTheme,
    spaceFromTop = DEFAULT_PROPS.SPACE_CONTENT,
    spaceFromBottom = DEFAULT_PROPS.SPACE_CONTENT,
    isShowHalfLine = true,
    allowPinchToZoom = false,
    allowDragToCreate = false,
    dragCreateInterval = DEFAULT_PROPS.DRAG_CREATE_INTERVAL,
    dragStep = DEFAULT_PROPS.DRAG_STEP,
    showNowIndicator = true,
    unavailableHours,
    overlapEventsSpacing = DEFAULT_PROPS.OVERLAP_EVENTS_SPACING,
    rightEdgeSpacing = DEFAULT_PROPS.RIGHT_EDGE_SPACING,
    scrollToNow = true,
    locale = "en",
    isShowHeader = true,
    hourFormat,
    eventAnimatedDuration = DEFAULT_PROPS.EVENT_ANIMATED_DURATION,
    useHaptic = false,
    timeZone = moment.tz.guess(),
    nowIndicatorInterval = DEFAULT_PROPS.NOW_INDICATOR_INTERVAL,
    navigateDelay = DEFAULT_PROPS.NAVIGATION_DELAY,
    calendarWidth,
  } = props;

  const { width: windowWidth } = useWindowDimensions();

  const timelineWidth = calendarWidth || windowWidth;

  const dayBarListRef = useRef(null);
  const timelineHorizontalListRef = useRef(null);
  const timelineVerticalListRef = useRef(null);
  const initialDate = useRef(initDate);
  const timelineLayoutRef = useRef({ width: 0, height: 0 });
  const isScrolling = useRef(false);
  const pinchRef = useRef();

  const pages = useMemo(
    () => calculateDates(firstDay, minDate, maxDate, initialDate.current),
    [firstDay, minDate, maxDate]
  );
  const firstDate = useRef({
    week: pages.week.data[0],
    workWeek: pages.workWeek.data[0],
    day: pages.day.data[0],
    threeDays: pages.threeDays.data[0],
  });

  const hours = useMemo(
    () => calculateHours(start, end, timeInterval, hourFormat),
    [end, start, timeInterval, hourFormat]
  );

  const currentIndex = useSharedValue(pages[viewMode].index);
  const startDate = useDerivedValue(
    () => pages[viewMode].data[currentIndex.value] || ""
  );
  const timeIntervalHeight = useSharedValue(initialTimeIntervalHeight);
  const heightByTimeInterval = useDerivedValue(
    () => timeIntervalHeight.value * (60 / timeInterval)
  );
  const minTimeIntervalHeight = useSharedValue(
    initialMinTimeIntervalHeight || 0
  );
  const isDragCreateActive = useSharedValue(false);
  const offsetY = useSharedValue(0);

  const rHourWidth = useMemo(
    () => PixelRatio.roundToNearestPixel(hourWidth),
    [hourWidth]
  );

  const theme = useDeepCompare(getTheme(initTheme));

  useEffect(() => {
    if (initialMinTimeIntervalHeight) {
      minTimeIntervalHeight.value = initialMinTimeIntervalHeight;
    }
  }, [initialMinTimeIntervalHeight, minTimeIntervalHeight]);

  const [currentDate, setCurrentDate] = useState(() =>
    getCurrentDate(timeZone)
  );

  const updateCurrentDate = useCallback(() => {
    const newDate = getCurrentDate(timeZone);
    if (newDate === currentDate) {
      return;
    }
    setCurrentDate(newDate);
  }, [currentDate, timeZone]);

  const isPinchActive = useSharedValue(false);

  const value = useMemo(() => {
    const totalPages = {
      week: pages.week.data.length,
      workWeek: pages.workWeek.data.length,
      day: pages.day.data.length,
      threeDays: pages.threeDays.data.length,
    };
    const totalHours = hours.length;
    const rightSideWidth = timelineWidth - rHourWidth;
    const numOfColumns = COLUMNS[viewMode];
    const columnWidth = rightSideWidth / numOfColumns;

    return {
      pages,
      hours,
      minDate,
      maxDate,
      initialDate,
      start,
      end,
      firstDay,
      viewMode,
      dayBarListRef,
      timelineHorizontalListRef,
      timelineVerticalListRef,
      timelineLayoutRef,
      timeIntervalHeight,
      minTimeIntervalHeight,
      maxTimeIntervalHeight,
      timeInterval,
      syncedLists,
      hourWidth: rHourWidth,
      rightSideWidth,
      timelineWidth,
      currentIndex,
      columnWidth,
      theme,
      spaceFromTop,
      spaceFromBottom,
      isShowHalfLine,
      totalPages,
      totalHours,
      isScrolling,
      offsetY,
      allowPinchToZoom,
      allowDragToCreate,
      dragCreateInterval,
      dragStep,
      unavailableHours,
      showNowIndicator,
      firstDate,
      overlapEventsSpacing,
      rightEdgeSpacing,
      isDragCreateActive,
      pinchRef,
      scrollToNow,
      locale,
      isShowHeader,
      hourFormat,
      eventAnimatedDuration,
      useHaptic,
      tzOffset: timeZone,
      currentDate,
      updateCurrentDate,
      nowIndicatorInterval,
      isPinchActive,
      navigateDelay,
      numOfColumns,
      initialTimeIntervalHeight,
      heightByTimeInterval,
    };
  }, [
    pages,
    hours,
    timelineWidth,
    rHourWidth,
    viewMode,
    minDate,
    maxDate,
    start,
    end,
    firstDay,
    timeIntervalHeight,
    minTimeIntervalHeight,
    maxTimeIntervalHeight,
    timeInterval,
    syncedLists,
    currentIndex,
    theme,
    spaceFromTop,
    spaceFromBottom,
    isShowHalfLine,
    offsetY,
    allowPinchToZoom,
    allowDragToCreate,
    dragCreateInterval,
    dragStep,
    unavailableHours,
    showNowIndicator,
    overlapEventsSpacing,
    rightEdgeSpacing,
    isDragCreateActive,
    scrollToNow,
    locale,
    isShowHeader,
    hourFormat,
    eventAnimatedDuration,
    useHaptic,
    timeZone,
    currentDate,
    updateCurrentDate,
    nowIndicatorInterval,
    isPinchActive,
    navigateDelay,
    initialTimeIntervalHeight,
    heightByTimeInterval,
  ]);

  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    // Scroll to current date when viewMode is changed
    const numOfDays =
      viewMode === "workWeek" ? COLUMNS.week : COLUMNS[viewMode];
    const currentDay = moment.tz(startDate.value, timeZone);
    const firstDateMoment = moment.tz(firstDate.current[viewMode], timeZone);
    const diffDays = currentDay.startOf("D").diff(firstDateMoment, "d");
    const pageIndex = Math.floor(diffDays / numOfDays);
    setTimeout(() => {
      timelineHorizontalListRef.current?.scrollToIndex({
        index: pageIndex,
        animated: false,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewMode, timeZone]);

  return (
    <TimelineCalendarContext.Provider value={value}>
      {children}
    </TimelineCalendarContext.Provider>
  );
};

export default TimelineProvider;

export const useTimelineCalendarContext = () => {
  const value = useContext(TimelineCalendarContext);
  if (!value) {
    throw new Error(
      "useTimelineCalendarContext must be called from within TimelineCalendarProvider!"
    );
  }
  return value;
};
