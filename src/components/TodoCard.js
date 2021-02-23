import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoContext} from '../provider/TodoProvider';

export default function TodoCard(props) {
  const [showTodo, setShowTodo] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const toDo = useContext(TodoContext);

  const removeIt = () => {
    const filter = toDo.todo.filter((item) => item.text !== props.text);
    toDo.setTodo(filter);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => {
        setShowTodo(!showTodo);
        setShowDelete(!showDelete);
      }}>
      {showTodo ? (
        <View style={styles.labelContainer}>
          <Text style={styles.numberStyle}>#{props.id}</Text>
        </View>
      ) : null}
      {showDelete ? (
        <TouchableOpacity onPress={removeIt} style={styles.deleteContainer}>
          <Text style={styles.deleteText}>DELETE</Text>
        </TouchableOpacity>
      ) : null}

      <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 4,
    borderColor: '#ffc100',
    borderRadius: 14,
    marginTop: 15,
  },
  numberStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#ffc100',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffc100',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  deleteContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'red',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  deleteText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
