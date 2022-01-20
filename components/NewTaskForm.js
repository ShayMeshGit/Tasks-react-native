import { View, TextInput, Button } from "react-native";
import { useState } from "react";

const CreateTask = ({ navigation, addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTaskHandler = () => {
    if (title.length === 0 || description.length === 0) return;
    const newTask = {
      title: title,
      description: description,
    };
    addTask(newTask);
    navigation.navigate("TaskList");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        border: "solid, black, 2px",
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "yellow",
        color: "white",
        margin: 20,
      }}
    >
      <TextInput
        placeholder="Enter Task name"
        onChangeText={(newText) => setTitle(newText)}
        defaultValue={title}
      />
      <TextInput
        placeholder="Enter description"
        onChangeText={(newText) => setDescription(newText)}
        defaultValue={description}
      />

      <Button title="+" onPress={addTaskHandler} />
    </View>
  );
};
export default CreateTask;
