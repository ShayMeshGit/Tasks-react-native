import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import Stack from "./components/Stack";

export default function App() {
  // const [counter, setCounter] = useState(12);
  // const [textEntered, setText] = useState(" ");

  // delTask = (name) => {
  //   let newList = taskList.filter((x) => x.name !== name);
  //   setTask({
  //     taskList: newList,
  //   });
  // };

  // const list = taskList.map((x, ind) => (
  //   <NewNote title={x.title} name={x.name} index={ind} rec2del={delTask} />
  // ));

  return <Stack />;
}
