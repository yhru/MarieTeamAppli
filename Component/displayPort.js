import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AddPort  from '../dataAdd/addPort';

export default class DisplayPort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: {}
        }
    }

    componentDidMount() {
        return fetch('http://localhost:3000/port')
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
                    <Text style={styles.titleDisplay}>Liste des ports : </Text>
                    {
                        this.state.dataSource.map((val, key) => <View key={key}><Text style={{paddingLeft: "37%"}}>{val}</Text></View>)
                    }
                <AddPort/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: "center",
        flex: 1,
    },
    titleDisplay: {
        paddingBottom: 27,
        fontWeight: '400',
        fontSize: 20,
        alignSelf: "center"
    },
});
