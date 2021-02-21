import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AddCard from "../components/AddCard";
import TodoCard from "../components/TodoCard";

export default function ToDoScreen() {
  return (
    <View style={styles.container}>
<View style={styles.todoContainer}>
        <TodoCard/>
</View>
      <View style={styles.inputContainer}>
        <AddCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#171717',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    width: '90%',
    height: '50%',
    bottom: 20,
  },
  todoContainer: {
    height: '70%',
    width: '90%',
    alignItems: 'center',
    marginTop: 40,
    borderColor: '#ffc100',
    borderRadius: 9,
    borderWidth: 2,
  }
});
