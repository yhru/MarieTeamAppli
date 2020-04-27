import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interface Admin Marie Team</Text>
      <Navigation style={styles.data}/>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
    padding: 20,
    // fontFamily: 'Whitney', <-- discord font
  },
  data: {
    
  }
});
