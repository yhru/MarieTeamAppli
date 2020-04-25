import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleDisplay: {
        paddingBottom: 27,
        fontWeight: '600',
        fontFamily: 'Whitney',
        fontSize: 20,
        color: '#2c2f33',
    },
    data: {
        fontStyle: 'italic',
        fontFamily: 'Whitney',
        color: '#2c2f33',
    }
});
