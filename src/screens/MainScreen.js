import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddCard from '../components/AddCard';

export default function MainScreen() {
  return (
    <View style={styles.container}>
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
    marginTop: 20,
    flex: 1,
    width: '90%',
    height: '10%',
    bottom: 50,
  },
});
