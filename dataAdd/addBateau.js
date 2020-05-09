import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';

export default class AddBateau extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nomBateau: ''
        }
    }

    bateauRegister = () => {
        const { nomBateau } = this.state;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "nom": nomBateau });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        // Text de confirmation + reload
        if (nomBateau != ''){
            alert(nomBateau + ' a bien été ajouté.');
            window.location.reload(false);
        } else {
            alert('Entrez une valeur correcte dans l\'input');
        }
        

        fetch("http://localhost:3000/bateau", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Entrez le nom du bateau"
                    
                    style={{ textAlign: "center" }}
                    onChangeText={nomBateau => this.setState({ nomBateau })}
                />
                <Button type="outline" style={{}} onPress={this.bateauRegister} title="Ajouter le nouveau bateau" />
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