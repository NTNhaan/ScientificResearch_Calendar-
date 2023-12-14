import { TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { Agenda } from "react-native-calendars";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

export default function CalendarFunc() {
  const [items, setItems] = React.useState({});
  const [currentWeek, setCurrentWeek] = React.useState(new Date()); //selesed tại day hiện tại
  const [dayHeight, setDayHeight] = React.useState(50);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };
  // const renderItem = (items) => {
  //   return (
  //     <TouchableOpacity>
  //       <Card>
  //         <Card.Content>
  //           <View>
  //             <Typography>{items.name}</Typography>
  //           </View>
  //         </Card.Content>
  //       </Card>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={currentWeek.toISOString().split("T")[0]}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ height: 7 * dayHeight }}
      />
    </View>
  );
}
