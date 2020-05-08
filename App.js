import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Navigation from './navigation/Navigation'
import NavigationAdvanced from './navigation/NavigationAdvanced'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administration Marie Team</Text>
      {/* <Navigation style={styles.data}/> */}
      <NavigationAdvanced/>
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
