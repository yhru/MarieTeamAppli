import React from 'react';
import { StyleSheet, View, Picker, InputAccessoryView } from 'react-native';
import { Input } from 'react-native-elements'
import AddNote from '../dataAdd/addNote';

export default class DisplayNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource_mer: [],
            dataSource_traversee: [],
            PickerValue_mer: null,
            PickerValue_liaison: null,
            PickerValue_traversee_id: null,
            inputCommentaire: '',
            inputHeure: '',
        }
    }

    // Récupération des états mer + liaison
    componentDidMount() {
        fetch('http://localhost:3000/mer')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ dataSource_mer: responseJson, isLoading: false })
            })
            .catch(error => {
                console.log(error)
            })

        // Recupération traversee
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/traversee", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({ dataSource_traversee: result }))
            .catch(error => console.log('error', error));
    }

    // Affichage des pickers récup de la BDD + champ heure de retard et commentaire
    render() {
        
        return (
            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.PickerValue_mer}
                    onValueChange={(itemValue => this.setState({ PickerValue_mer: itemValue }))}
                >
                    <Picker.Item label="Selectionner ..." value={null} />
                    {
                        this.state.dataSource_mer.map(dataSource => <Picker.Item label={dataSource.etat} value={dataSource._id} />)
                    }
                </Picker>
                <View style={styles.span}></View>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.PickerValue_traversee_id}
                    onValueChange={(itemValue => this.setState({ PickerValue_traversee_id: itemValue }))}
                >
                    <Picker.Item label="Selectionner ..." value={null} />
                    {
                        this.state.dataSource_traversee.map(dataSource => <Picker.Item label={
                            `
                            ${dataSource.liaison.port_depart.nom} ->
                            ${dataSource.liaison.port_arrivee.nom} -
                            ${dataSource.bateau.nom}
                            `
                        }
                            value={dataSource._id} />)
                    }
                </Picker>
                <View style={styles.span}></View>
                <Input style={styles.input} keyboardType="numeric" placeholder="Heures de retard..." onChange={(event) => {this.setState({inputHeure: event.target.value})}}/>
                <View style={styles.span}></View>
                <Input style={styles.input} placeholder="Commentaire..." onChange={(event) => {this.setState({inputCommentaire: event.target.value})}} />
                {/* le bouton devra renvoyer les données sauvegardés dans le constructeur 
                si une des value est en null ne pas activer le bouton*/}
                <AddNote traversee={this.state.PickerValue_traversee_id} etatMer={this.state.PickerValue_mer} commentaire={this.state.inputCommentaire} heure={this.state.inputHeure}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: "center",
        flex: 3,
        padding: 30
    },
    picker: {
        padding: "1%",
        fontSize: 15,
        backgroundColor: "#f4f4f4",
        borderBottomColor: "grey",
        borderColor: "#f4f4f4",
    },
    span: {
        height: 30
    },
    input: {
        minHeight: 100
    }
});