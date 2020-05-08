import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import DisplayBateau from '../Component/displayBateau'
import DisplayPort from '../Component/displayPort'
import DisplayLiaison from '../Component/displayLiaison'


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
                inactiveColor: '#3e2465',
                barStyle: { backgroundColor: '#694fad' }
                
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
                inactiveColor: '#bda1f7',
                barStyle: { backgroundColor: '#6948f4' }
            }
            
        },
        DisplayLiaison: {
            screen: DisplayLiaison,
            navigationOptions: {
                tabBarLabel: "Ports",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={20} name='ios-link' />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#bda1f7',
                barStyle: { backgroundColor: '#6948f4' }
            }
        }
    },
    {
        //choisir la page d'accueil plus tard ici
        initialRouteName: 'DisplayBateau',
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' }
    }
);

export default createAppContainer(TabNavigator);