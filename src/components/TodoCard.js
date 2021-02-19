import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddCard from './AddCard';

export default function TodoCard() {
  return (
    <View style={styles.container}>
      <Text>TodoCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
