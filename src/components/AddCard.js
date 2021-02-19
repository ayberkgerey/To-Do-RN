import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AddCard() {
  return (
    <View style={styles.container}>
      <TextInput multiline={true} style={styles.inputContainer} />
      <TouchableOpacity>
        <Text style={styles.buttonStyle}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '90%',
    height: '10%',
    borderColor: '#ffc100',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: 20,
    width: '91%',
    height: '101%',
    color: '#ffc100',
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    borderRadius: 30,
    color: 'green',
  },
});
