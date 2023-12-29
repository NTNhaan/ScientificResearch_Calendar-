import { AnimatedFlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, { useMemo, useRef, useEffect } from "react";
import {
  Animated as RNAnimated,
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  View,
  ViewabilityConfig,
  ViewToken,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTimelineCalendarContext } from "../../context/TimelineProvider";
import { EventItem, PackedEvent, UnavailableItemProps } from "../../types";
import DragEditItem from "./DragEditItem";
import TimelineHours from "./TimelineHours";
import TimelinePage from "./TimelinePage";

const TimelineSlots = ({
  onDateChanged,
  isDragging,
  isLoading,
  holidays,
  events,
  selectedEvent,
  onEndDragSelectedEvent,
  editEventGestureEnabled = true,
  renderEventContent,
  renderSelectedEventContent,
  EditIndicatorComponent,
  ...other
}) => {
  const timelineVerticalListRef = useAnimatedRef();
  const timelineHorizontalListRef = useAnimatedRef();
  const dayBarListRef = useAnimatedRef();
  const pinchRef = useAnimatedRef();

  const spaceFromBottom = useSharedValue(0);
  const spaceFromTop = useSharedValue(0);
  const timeIntervalHeight = useSharedValue(0);
  const totalHours = useSharedValue(0);
  const timelineWidth = useSharedValue(0);
  const viewMode = useSharedValue("day");
  const maxTimeIntervalHeight = useSharedValue(0);
  const pages = useDerivedValue(() => getPages(viewMode.value));
  const syncedLists = useSharedValue(true);
  const currentIndex = useSharedValue(0);
  const rightSideWidth = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const allowDragToCreate = useSharedValue(true);
  const currentDate = useSharedValue("");

  // ... (define other variables and hooks if needed)

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!syncedLists) {
      scrollX.removeAllListeners();
      return;
    }
    scrollX.addListener((ev) => {
      dayBarListRef.current?.scrollToOffset({
        offset: ev.value,
        animated: false,
      });
    });
  });

  const onHorizontalScroll = useAnimatedScrollHandler((event) => {
    const x = event.contentOffset.x;
    const width = event.layoutMeasurement.width;
    const pageIndex = Math.round(x / width);
    if (currentIndex.value !== pageIndex) {
      currentIndex.value = pageIndex;
    }
  });

  const extraValues = useMemo(
    () => ({
      allowDragToCreate,
      isLoading,
      holidays,
      events,
      selectedEventId: selectedEvent?.id,
      currentDate,
    }),
    [
      allowDragToCreate,
      isLoading,
      holidays,
      events,
      selectedEvent?.id,
      currentDate,
    ]
  );

  const renderPage = ({ item, extraData }) => {
    return (
      <TimelinePage
        startDate={item}
        isLoading={extraData?.isLoading}
        holidays={extraData?.holidays}
        events={extraData?.events}
        selectedEventId={extraData?.selectedEventId}
        renderEventContent={renderEventContent}
        currentDate={extraData.currentDate}
        {...other}
      />
    );
  };

  const viewabilityConfig = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 99,
  }).current;

  const prevIndex = useRef(-1);
  const onViewableItemsChanged = useRef((info) => {
    if (info.viewableItems.length === 0) {
      prevIndex.current = info.changed[0]?.index ?? -1;
    } else {
      const isPressNavigator = info.changed.length === 2;
      const isDragList =
        prevIndex.current !== -1 &&
        prevIndex.current !== info.viewableItems[0]?.index;

      if (isPressNavigator || isDragList) {
        onDateChanged?.(info.viewableItems[0]?.item);
        prevIndex.current = -1;
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  }).current;

  const onVerticalScroll = ({ nativeEvent: { contentOffset } }) => {
    offsetY.value = contentOffset.y;
  };

  const renderSlots = () => {
    const listProps = {
      ref: timelineHorizontalListRef,
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      data: pages[viewMode.value].data,
      initialScrollIndex: pages[viewMode.value].index,
      pagingEnabled: true,
      scrollEventThrottle: 16,
      bounces: false,
      disableHorizontalListHeightMeasurement: true,
      extraData: extraValues,
      scrollEnabled: !isDragging && !selectedEvent?.id,
      viewabilityConfig: viewabilityConfig,
      onViewableItemsChanged: onViewableItemsChanged,
      renderItem: renderPage,
      keyExtractor: (item) => item,
      onScroll: onHorizontalScroll,
    };

    const listSize = {
      height:
        totalHours * maxTimeIntervalHeight + spaceFromTop + spaceFromBottom,
      width: viewMode === "day" ? timelineWidth : rightSideWidth,
    };

    if (viewMode === "day") {
      return (
        <View style={listSize}>
          <AnimatedFlashList
            estimatedItemSize={timelineWidth}
            estimatedListSize={listSize}
            {...listProps}
          />
        </View>
      );
    }

    return (
      <React.Fragment>
        <TimelineHours />
        <Animated.View style={listSize}>
          <AnimatedFlashList
            estimatedItemSize={rightSideWidth}
            estimatedListSize={listSize}
            {...listProps}
          />
        </Animated.View>
      </React.Fragment>
    );
  };

  return (
    <ScrollView
      ref={timelineVerticalListRef}
      waitFor={Platform.OS === "android" ? pinchRef : undefined}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      style={styles.container}
      onScroll={onVerticalScroll}
      scrollEnabled={!isDragging}
    >
      <Animated.View
        style={[
          styles.contentContainer,
          { width: timelineWidth },
          useAnimatedStyle(() => ({
            height:
              totalHours * timeIntervalHeight.value +
              spaceFromTop +
              spaceFromBottom,
          })),
        ]}
      >
        {renderSlots()}
      </Animated.View>
      {!!selectedEvent?.id && (
        <DragEditItem
          selectedEvent={selectedEvent}
          onEndDragSelectedEvent={onEndDragSelectedEvent}
          isEnabled={editEventGestureEnabled}
          EditIndicatorComponent={EditIndicatorComponent}
          renderEventContent={renderSelectedEventContent || renderEventContent}
        />
      )}
    </ScrollView>
  );
};

export default TimelineSlots;

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flexDirection: "row" },
});
