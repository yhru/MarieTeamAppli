import React, { Component } from 'react'
import { AppRegistry, Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

export default class AddBateau extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nomBateau: ''
        }
    }

    bateauRegister = () => {
        // alert('ok');
        const { nomBateau } = this.state;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "nom": nomBateau });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        fetch("http://localhost:3000/bateau", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Entrez le nom du bateau"
                    style={{ textAlign: "center" }}
                    onChangeText={nomBateau => this.setState({ nomBateau })}
                />
                <Button style={{}} onPress={this.bateauRegister} title="Ajouter le nouveau bateau" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 35,
        textAlign: "center",
    },

});