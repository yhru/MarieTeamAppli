import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class DisplayLiaison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: {}
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/liaison')
      .then((response) => response.json())
      .then((responseJson) => {
        let temp = []
        responseJson.forEach(element => {
          temp.push(element.port_depart_id)
        });
        let temp2 = []
        responseJson.forEach(element => {
          temp2.push(element.port_arrivee_id)
        });
        this.setState({
          isLoading: false,
          dataSource: temp,
          dataSource2: temp2
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
            <Text style={styles.titleDisplay}>ID des liaisons : </Text>
            {
              this.state.dataSource.map((val, key) => <View key={key}><Text style={styles.data}>Port de départ : {val}</Text></View>)
            }
            <Text style={styles.titleDisplay}>ID des liaisons 1: </Text>
            {
              this.state.dataSource2.map((val2, key2) => <View key2={key2}><Text style={styles.data}>Port d'arrivée : {val2}</Text></View>)
            }
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
  },
  titleDisplay: {
    padding: 27,
    fontWeight: '400',
    fontSize: 20,
    alignSelf: "center"
  },
});
