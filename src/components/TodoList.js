import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import TodoCard from './TodoCard';
import {TodoContext} from '../provider/TodoProvider';

export default function TodoList() {
  const toDo = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={toDo.todo}
        renderItem={({item}) => (
          <View>
            <TodoCard id={item.id} text={item.text} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
