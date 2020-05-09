import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import DisplayBateau from '../Component/displayBateau'
import DisplayPort from '../Component/displayPort'
import DisplayLiaison from '../Component/displayLiaison'

const BateauNavigator = createStackNavigator({
    DisplayBateau: {
        screen: DisplayBateau,
        navigationOptions:{
            title: "Liste des Bateaux",
            headerTitleStyle: {
                fontWeight: "300",
                textAlign: "center",
            },
            headerStyle:{
            },
            headerTitleAlign: "center"
        }
    },
})

const PortNavigator = createStackNavigator({
    DisplayPort: {
        screen: DisplayPort,
        navigationOptions:{
            title: "Liste des Ports",
            headerTitleStyle: {
                fontWeight: "300",
                textAlign: "center",
            },
            headerStyle:{
            },
            headerTitleAlign: "center"
        }
    },
})

const LiaisonNavigator = createStackNavigator({
    DisplayPort: {
        screen: DisplayLiaison,
        navigationOptions:{
            title: "ID des liaisons",
            headerTitleStyle: {
                fontWeight: "300",
                textAlign: "center",
            },
            headerStyle:{
            },
            headerTitleAlign: "center"
        },
    },
})

const MarieTeamTabNavigator = createBottomTabNavigator({
    DisplayBateau: {
        screen: BateauNavigator,
        navigationOptions:{
            title: "Liste des Bateaux",
        },
        tabBarOption: {
            tabStyle: {
                borderTopColor: "red",
            }
        }
    },
    DisplayPort: {
        screen: PortNavigator,
        navigationOptions: {
            title: "Liste des Ports"
        }
    },
    DisplayLiaison: {
        screen: LiaisonNavigator,
        navigationOptions: {
            title: "ID des liaisons"
        }
    },
})

export default createAppContainer(MarieTeamTabNavigator)