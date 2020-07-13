import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let [greeting, setGreeting] = useState('goodbye')

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button onPress={() => {setGreeting('Hello')}} title="change greeting"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
