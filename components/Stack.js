import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const defaultTasks = [
  { title: "home", description: "take out the trash" },
  { title: "garden", description: "walk the dog" },
  { title: "home", description: "feed the fish" },
];

export default function MyStack() {
  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (title) => {
    const taskIndex = tasks.findIndex((task) => (task.title = title));
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList">
          {(props) => (
            <TaskList {...props} tasks={tasks} deleteTask={deleteTask} />
          )}
        </Stack.Screen>
        <Stack.Screen name="NewTaskForm">
          {(props) => <NewTaskForm {...props} addTask={addTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
