import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import DisplayBateau from '../data/displayBateau'
import DisplayPort from '../data/displayPort'

const BateauNavigator = createStackNavigator({
    DisplayBateau: {
        screen: DisplayBateau,
        navigationOptions:{
            title: "Liste des Bateaux",
            headerStyle: {
                // display: "flex",
                justifyContent: 'center',
                backgroundColor: 'red',
                flexDirection: "row",
                alignItems: "center",
                alignSelf: 'center',
            }
        }
    },
})

const PortNavigator = createStackNavigator({
    DisplayPort: {
        screen: DisplayPort,
        navigationOptions:{
            title: "Liste des Ports",
        }
    },
})

const MarieTeamTabNavigator = createBottomTabNavigator({
    DisplayBateau: {
        screen: BateauNavigator,
        navigationOptions:{
            title: "Liste des Bateaux"
        }
    },
    DisplayPort: {
        screen: PortNavigator,
        navigationOptions: {
            title: "Liste des Ports"
        }
    }
})

export default createAppContainer(MarieTeamTabNavigator)