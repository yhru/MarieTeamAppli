import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DisplayBateau from '../data/displayBateau'

const MarieTeamTabNavigator = createStackNavigator({
    DisplayBateau: {
        screen: DisplayBateau,
        navigationOption: {
            title: "Rechercher"
        }
    }
})

export default createAppContainer(MarieTeamTabNavigator)