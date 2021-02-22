import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddCard from '../components/AddCard';
import {TodoProvider} from '../provider/TodoProvider';
import TodoList from '../components/TodoList';

export default function ToDoScreen() {
  return (
    <TodoProvider>
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          <TodoList />
        </View>
        <View style={styles.inputContainer}>
          <AddCard />
        </View>
      </View>
    </TodoProvider>
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
    width: '100%',
    height: '50%',
    bottom: 20,
  },
  todoContainer: {
    height: '70%',
    width: '90%',
    alignItems: 'center',
    marginTop: 40,
  },
});
