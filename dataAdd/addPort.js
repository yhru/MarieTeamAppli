import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';

export default class AddPort extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nomPort: ''
        }
    }

    portRegister = () => {
        // alert('ok');
        const { nomPort } = this.state;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "nom": nomPort });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        // Text de confirmation + reload
        if (nomPort != ''){
            alert(nomPort + ' a bien été ajouté.');
            window.location.reload(false);
        } else {
            alert('Entrez une valeur correcte dans l\'input');
        }

        fetch("http://localhost:3000/port", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Entrez le nom du port"
                    style={{ textAlign: "center" }}
                    onChangeText={nomPort => this.setState({ nomPort })}
                />
                <Button type="outline" style={{}} onPress={this.portRegister} title="Ajouter le nouveau port" />
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