import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';
import displayNote from '../Component/displayNote'

export default class AddNote extends Component {
    
// pour poster
    registerNote = () => {
        if (this.props.traversee === null || this.props.etatMer === null || this.props.commentaire.length === 0|| this.props.heure.length === 0){
            return 0
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "mer": this.props.etatMer, "commentaire": this.props.commentaire, "retard": this.props.heure });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://localhost:3000/traversee?_id=${this.props.traversee}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    render() {
        console.log(this.props.etatMer)
        return (
            <View style={styles.container}>
                <Button 
                type="outline" 
                disabled={
                    this.props.traversee === null || 
                    this.props.etatMer === null || 
                    this.props.commentaire.length === 0 ||
                    this.props.heure.length === 0
                } 
                onPress={this.registerNote} 
                title="Envoyer" />
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