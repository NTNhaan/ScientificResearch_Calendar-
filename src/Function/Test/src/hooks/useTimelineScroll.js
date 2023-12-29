import { useCallback } from "react";
import { useTimelineCalendarContext } from "../context/TimelineProvider";

const useTimelineScroll = () => {
  const {
    timelineHorizontalListRef,
    currentIndex,
    totalPages,
    isScrolling,
    timelineVerticalListRef,
    viewMode,
  } = useTimelineCalendarContext();

  const goToNextPage = useCallback(
    (animated) => {
      const nextIndex = currentIndex.value + 1;
      if (nextIndex > totalPages[viewMode]) {
        return;
      }
      isScrolling.current = animated || false;
      timelineHorizontalListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: animated,
      });
    },
    [
      currentIndex.value,
      isScrolling,
      timelineHorizontalListRef,
      totalPages,
      viewMode,
    ]
  );

  const goToPrevPage = useCallback(
    (animated) => {
      const nextIndex = currentIndex.value - 1;
      if (nextIndex < 0) {
        return;
      }
      isScrolling.current = animated || false;
      timelineHorizontalListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: animated,
      });
    },
    [currentIndex.value, isScrolling, timelineHorizontalListRef]
  );

  const goToOffsetY = useCallback(
    (target, animated) => {
      timelineVerticalListRef.current?.scrollTo({
        y: target,
        animated,
      });
    },
    [timelineVerticalListRef]
  );

  return {
    goToPrevPage,
    goToNextPage,
    goToOffsetY,
  };
};

export default useTimelineScroll;
