import React from 'react';
import { StyleSheet, AsyncStorage, Text, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Header, Image, Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');

export default class Level_1 extends React.Component {

  state = {
    loading: true,
    money: 0,
    earning: 0.4
  }

  componentDidMount = async () => {
    var money = await AsyncStorage.getItem('money');
    var tentBuy = await AsyncStorage.getItem('tentBuyed');
    var freshClothesBuy = await AsyncStorage.getItem('freshClothesBuyed');
    var tutorialUnlocked = await AsyncStorage.getItem('Tutorial_Unlocked');
    var twoxTime = await AsyncStorage.getItem('2xTime');
    timestamp = new Date().getTime();

    var earning = this.state.earning;

    if (tutorialUnlocked == 'true') {
      this.setState({ isVisible: false });
    }

    if (tentBuy == 'true') {
      earning = earning*0.3 + earning;
    }

    if (parseFloat(twoxTime) >= timestamp) {
      earning = earning + earning;
    }

    if (freshClothesBuy == 'true') {
      earning = earning*0.2 + earning;
    }


    if (money == NaN || money == null) {
      money = 0;
    }

    await Font.loadAsync({
      'burbank': require('../../fonts/BurbankBigCondensed-Bold.otf'),
    });

    await AsyncStorage.setItem('level', 'Level_1');

    this.setState({ loading: false, money: parseFloat(parseFloat(money).toFixed(2)), earning: earning });
  }

  earnMoney = async () => {
    var money = this.state.money + this.state.earning;

    await this.setState({ money: parseFloat(money.toFixed(2)) });

    await AsyncStorage.setItem('money', money.toString());

    if (money >= 100) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
          routeName: 'Level_2',
        })],
      });

      this.props.navigation.dispatch(resetAction);
    }
  }

  goTo = (route) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: route,
      })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <LinearGradient colors={['#00aced', '#192f6a']} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.loading ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color='white' size='large' />
            <Text style={{ color: '#fff', fontSize: 30 }}>Loading</Text>
          </View>
          :
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
              <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#00aced', fontSize: 20 }}>Your Job: Beggar</Text>
            </View>
            <View style={{ marginTop: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
              <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#4285F4', fontSize: 32 }}>Your Money</Text>
              <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#000', fontSize: 16, marginTop: 5 }}>{this.state.money} $</Text>
            </View>
            <TouchableOpacity onPress={() => { this.earnMoney(); }}>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, height: width - 80, borderRadius: (width - 80) / 2, marginTop: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
                <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#DB4437', fontSize: 48 }}>Beg</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
        <View style={{ height: 50, width: width, backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
            <Icon name='home' color='#00aced' />
          </View>
          <TouchableOpacity onPress={() => {this.goTo('Store')}}>
            <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
              <Icon name='cart' color='gray' type='material-community' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.goTo('EarnEMoney')}}>
            <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
              <Icon name='currency-usd' color='gray' type='material-community' />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
