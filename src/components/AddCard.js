import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TodoContext} from '../provider/TodoProvider';

export default function AddCard() {
  const toDo = useContext(TodoContext);
  const [temporaryToDo, setTemporaryToDo] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setTemporaryToDo(text)}
        multiline={true}
        style={styles.inputContainer}
      />
      <TouchableOpacity
        onPress={() => {
          if (temporaryToDo !== null) {
            toDo.setTodo((prevState) => [
              ...prevState,
              {
                id: toDo.todo.length,
                text: temporaryToDo,
              },
            ]);
            setTemporaryToDo();
          }
        }}
        style={styles.buttonLayout}>
        <Text style={styles.buttonStyle}>></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '90%',
    height: '50%',
    borderColor: '#ffc100',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: 20,
    width: '85%',
    height: '101%',
    color: '#ffc100',
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    borderRadius: 30,
    color: '#171717',
    fontWeight: 'bold',
    fontSize: 90,
    marginBottom: 15,
  },
  buttonLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '16%',
    backgroundColor: '#ffc100',
    borderBottomRightRadius: 19,
    borderTopRightRadius: 19,
  },
});
