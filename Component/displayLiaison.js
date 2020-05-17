import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class DisplayLiaison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/liaison')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataSource:responseJson, isLoading: false})
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
              this.state.dataSource.map(dataSource => <Text>{dataSource.port_depart.nom} - {dataSource.port_arrivee.nom}</Text>)
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
