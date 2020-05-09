import React from "react";
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from "react-native";

const displayBateau = "http://localhost:3000/bateau";
const insertNouveauBateau = "http://localhost:3000/insert_nouveau_bateau";

async function getBateauFromServer () {
    try{
        let response = await fetch(displayBateau);
        let responseJson = await response.json();
        return responseJson.data; //liste des bateaux
    } catch(error) {

    }
}