import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DisplayBateau from './data/displayBateau';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marie Team Base de Donnée</Text>
      <DisplayBateau/>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  }
});
