import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { sendVariableToNative } from '../NativeModule';

export default function HomeScreen() {
  useEffect(() => {
    sendVariableToNative();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check native code for the shared variable!</Text>
      <Button title="Send Variable to Native" onPress={sendVariableToNative} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the entire screen
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
  },
  text: {
    fontSize: 18, // Makes the text more readable
    marginBottom: 20, // Adds some space between the text and the button
    textAlign: 'center', // Centers the text itself (optional, useful for multi-line text)
  },
});
