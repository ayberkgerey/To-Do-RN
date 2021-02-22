import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TodoContext} from '../provider/TodoProvider';

export default function TodoCard(props) {
  const [num, setNum] = useState();
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.numberStyle}>#{props.id}</Text>
      </View>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 4,
    borderColor: '#ffc100',
    borderRadius: 14,
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
  },
});
