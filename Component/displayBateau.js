import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AddBateau from '../dataAdd/addBateau'

export default class DisplayBateau extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: {}
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/bateau')
      .then((response) => response.json())
      .then((responseJson) => {
        let temp = []
        responseJson.forEach(element => {
          temp.push(element.nom)
        });
        this.setState({
          isLoading: false,
          dataSource: temp
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      return (
        <View style={styles.container}>
          <Text style={styles.titleDisplay}>Nom des bateaux : </Text>
          {
            this.state.dataSource.map((val, key) => <View key={key}><Text style={styles.data}>{val}</Text></View>)
          }
          <AddBateau/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleDisplay: {
    paddingBottom: 27,
    fontWeight: '600',
    fontFamily: 'Whitney',
    fontSize: 20,
  },
  data: {
    fontStyle: 'italic',
    fontFamily: 'Whitney',
  }
});
