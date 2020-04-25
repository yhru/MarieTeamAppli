import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

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
    // backgroundColor: '#2c2f33',
  },
  titleDisplay: {
    paddingBottom: 27,
    fontWeight: '600',
    // color: '#F8F8FF',
    fontFamily: 'Whitney',
    fontSize: 20,
    color: '#2c2f33',
  },
  data: {
    fontStyle: 'italic',
    // color: '#F8F8FF',
    fontFamily: 'Whitney',
    color: '#2c2f33',
  }
});
