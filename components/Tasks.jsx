import React from "react";
import { Text, View, FlatList } from "react-native";
import useStore from "../store/store";
import ToDo from "./ToDo";

export default function Tasks() {
  const tasks = useStore((state) => state.tasks);

  const dateToday = new Date().toLocaleDateString();
  const todayTasks = tasks.filter(
    (task) => task.date.toLocaleDateString() === dateToday
  );

  return (
    <View className=''>
      <Text className='uppercase text-xs font-semibold text-gray-700 mb-2'>
        Today's Tasks
      </Text>
      <FlatList
        data={todayTasks}
        renderItem={({ item }) => <ToDo id={item.id} title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
