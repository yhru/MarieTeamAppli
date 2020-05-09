import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import DisplayBateau from '../Component/displayBateau'
import DisplayPort from '../Component/displayPort'
import DisplayLiaison from '../Component/displayLiaison'
import DisplayNote from '../Component/displayNote'


const TabNavigator = createMaterialBottomTabNavigator(
    {
        DisplayBateau: {
            screen: DisplayBateau,
            navigationOptions: {
                tabBarLabel: "Bateaux",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={20} name='ios-boat' />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#858991',
                barStyle: { backgroundColor: '#2C2F33' }
                
            }
        },
        DisplayPort: {
            screen: DisplayPort,
            navigationOptions: {
                tabBarLabel: "Ports",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={20} name='ios-home' />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#858991',
                barStyle: { backgroundColor: '#2C2F33' }
            }
            
        },
        DisplayLiaison: {
            screen: DisplayLiaison,
            navigationOptions: {
                tabBarLabel: "Liaisons",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={20} name='ios-link' />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#858991',
                barStyle: { backgroundColor: '#2C2F33' }
            }
        },
        DisplayNote: {
            screen: DisplayNote,
            navigationOptions: {
                tabBarLabel: "Note",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={20} name='md-create' />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#858991',
                barStyle: { backgroundColor: '#2C2F33' }
            }
        }
    },
    {
        //choisir la page d'accueil plus tard ici
        initialRouteName: 'DisplayNote',
        activeColor: '#ffffff',
        inactiveColor: '#858991',
        barStyle: { backgroundColor: '#2C2F33' }
    }
);

export default createAppContainer(TabNavigator);