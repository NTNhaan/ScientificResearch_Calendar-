import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SharedValue } from "react-native-reanimated";
import { TimeZone, timeZoneData } from "./assets/TimeZone";

export const TimelineCalendarHandle = {
  goToDate: (props) => {},
  goToNextPage: (animated) => {},
  goToPrevPage: (animated) => {},
  getZones: () => [],
  getZone: (zoneName) => ({}),
  getHour: () => 0,
  getDate: () => "",
  goToHour: (hour, animated) => {},
  forceUpdateNowIndicator: (customDate) => {},
  zoom: (props) => {},
};

export const TimelineCalendarProps = {};

export const TimelineProps = {
  renderDayBarItem: (props) => <React.Fragment />,
  onPressDayNum: (date) => {},
  onDragCreateEnd: (props) => {},
  onPressBackground: (date, event) => {},
  onLongPressBackground: (date, event) => {},
  onPressOutBackground: (date, event) => {},
  onDateChanged: (date) => {},
  isLoading: false,
  holidays: [],
  events: [],
  onPressEvent: (eventItem) => {},
  onLongPressEvent: (eventItem) => {},
  renderEventContent: (event, timeIntervalHeight) => <React.Fragment />,
  renderSelectedEventContent: (event, timeIntervalHeight) => <React.Fragment />,
  selectedEvent: {},
  onEndDragSelectedEvent: (event) => {},
  renderCustomUnavailableItem: (props) => <React.Fragment />,
  highlightDates: {},
  onChange: (props) => {},
  editEventGestureEnabled: true,
  EditIndicatorComponent: <React.Fragment />,
  renderHalfLineCustom: (width) => <React.Fragment />,
  halfLineContainerStyle: {},
  onTimeIntervalHeightChange: (height) => {},
};

export const UnavailableItemProps = {
  timeIntervalHeight: {},
  hour: 0,
  width: 0,
};

export const CalendarViewMode = ["day", "week", "threeDays", "workWeek"];

export const TimelineProviderProps = {
  viewMode: "week",
  firstDay: 1,
  minDate: "",
  maxDate: "",
  initialDate: "",
  start: 0,
  end: 24,
  hourWidth: 53,
  timeInterval: 60,
  initialTimeIntervalHeight: 60,
  minTimeIntervalHeight: undefined,
  maxTimeIntervalHeight: 116,
  syncedLists: true,
  theme: {},
  spaceFromTop: 16,
  spaceFromBottom: 16,
  isShowHalfLine: true,
  allowDragToCreate: false,
  allowPinchToZoom: false,
  dragCreateInterval: 60,
  dragStep: 10,
  unavailableHours: [],
  showNowIndicator: true,
  rightEdgeSpacing: 1,
  overlapEventsSpacing: 1,
  scrollToNow: true,
  locale: "en",
  isShowHeader: true,
  hourFormat: "HH:mm",
  eventAnimatedDuration: 250,
  useHaptic: false,
  timeZone: {},
  nowIndicatorInterval: 1000,
  navigateDelay: 1000,
  calendarWidth: 0,
};

export const DayBarItemProps = {
  width: 0,
  startDate: "",
  columnWidth: 0,
  viewMode: "week",
  hourWidth: 0,
  onPressDayNum: (date) => {},
  theme: {},
  locale: "en",
  highlightDates: {},
  tzOffset: "",
  currentDate: "",
};

export const ThemeProperties = {
  cellBorderColor: "",
  backgroundColor: "",
  dragCreateItemBackgroundColor: "",
  loadingBarColor: "",
  unavailableBackgroundColor: "",
  editIndicatorColor: "",
  nowIndicatorColor: "",
  hourText: {},
  dragHourContainer: {},
  dragHourText: {},
  dayName: {},
  dayNumber: {},
  dayNumberContainer: {},
  todayName: {},
  todayNumber: {},
  todayNumberContainer: {},
  saturdayName: {},
  saturdayNumber: {},
  saturdayNumberContainer: {},
  sundayName: {},
  sundayNumber: {},
  sundayNumberContainer: {},
  eventTitle: {},
  minimumEventHeight: 0,
  allowFontScaling: false,
};

export const RangeTime = {
  start: "",
  end: "",
};

export const UnavailableHour = {
  start: 0,
  end: 0,
};

export const UnavailableHoursStyle = {};

export const EventItem = {
  id: "",
  start: "",
  end: "",
  title: "",
  color: "",
  containerStyle: {},
};

export const PackedEvent = {
  left: 0,
  startHour: 0,
  width: 0,
  duration: 0,
  leftByIndex: 0,
};

export const LocaleType = "";

export const HighlightDates = {};

export const OnChangeProps = {
  date: "",
  index: 0,
  length: 0,
  prevIndex: null,
};
