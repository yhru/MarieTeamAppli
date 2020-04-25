import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import DisplayBateau from './data/displayBateau';
// import DisplayPort from './data/displayPort'
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marie Team Base de Données</Text>
      <Navigation style={styles.data}/>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#2c2f33',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    // color: '#F8F8FF',
    textAlign: 'center',
    padding: 20,
    // fontFamily: 'Whitney', <-- discord font
  },
  data: {
    
  }
});
