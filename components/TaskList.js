import { View, Text, Button, StyleSheet } from "react-native";

export default function TaskList({ navigation, tasks, deleteTask }) {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => {
        return (
          <View key={index}>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
            <Button title="X" onPress={() => deleteTask(task.title)} />
          </View>
        );
      })}

      <View style={styles.btnContainer}>
        <Button
          title="+"
          onPress={() => {
            navigation.navigate("NewTaskForm");
          }}
          color="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    backgroundColor: "#000",
  },
});
