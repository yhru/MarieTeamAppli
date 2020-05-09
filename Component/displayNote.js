import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Input } from 'react-native-elements'

export default class DisplayNote extends React.Component {
    constructor(){
        super();
        this.state= {
            PickerValue:''
        }
    }
    clickme=() => {
        alert(this.state.PickerValue);
    }
    render(){
        return(
            <View style={styles.container}>
                <Picker
                style={styles.picker}
                selectedValue={this.state.PickerValue}
                onValueChange={(itemValue => this.setState({PickerValue:itemValue}))}
                >
                {/* data poubelle, il foudra aller chercher les infos dans l'api (traversee) */}
                <Picker.Item label="Sélectionner état de la mer" value="etatMer"/>
                <Picker.Item label="Mer calme" value="merCalme"/>
                <Picker.Item label="Tempête" value="tempete"/>
                </Picker>
                <View style={styles.span}></View>
                <Input style={styles.input} placeholder="Commentaire..."/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30
      },
      picker: {
        flex: 1,
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