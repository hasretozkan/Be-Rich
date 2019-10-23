import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Home from './screens/home';
import Tutorial from './screens/tutorial';
import Store from './screens/store';
import EarnEMoney from './screens/earnEMoney';
import Level_1 from './screens/levels/level_1';
import Level_2 from './screens/levels/level_2';
import Level_3 from './screens/levels/level_3';
import Level_4 from './screens/levels/level_4';
import Level_5 from './screens/levels/level_5';
import Level_6 from './screens/levels/level_6';
import Level_7 from './screens/levels/level_7';
import Level_8 from './screens/levels/level_8';
import Level_9 from './screens/levels/level_9';
import Level_10 from './screens/levels/level_10';

const { width, height } = Dimensions.get('window');

const MyApp = createStackNavigator({
  Home: {
    screen: Home
  },
  Tutorial: {
    screen: Tutorial
  },
  EarnEMoney: {
    screen: EarnEMoney
  },
  Store: {
    screen: Store
  },
  Level_1: {
    screen: Level_1
  },
  Level_10: {
    screen: Level_10
  },
  Level_6: {
    screen: Level_6
  },
  Level_9: {
    screen: Level_9
  },
  Level_8: {
    screen: Level_8
  },
  Level_7: {
    screen: Level_7
  },
  Level_5: {
    screen: Level_5
  },
  Level_2: {
    screen: Level_2
  },
  Level_3: {
    screen: Level_3
  },
  Level_4: {
    screen: Level_4
  },
},
{
  headerMode: 'none',
  mode: 'card'
});


const App = createAppContainer(MyApp);

export default App;
