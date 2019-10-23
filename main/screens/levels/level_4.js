import React from 'react';
import { StyleSheet, AsyncStorage, Text, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Header, Image, Card, Overlay } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');

export default class Level_4 extends React.Component {

  state = {
    loading: true,
    money: 0,
    earning: 1,
    isVisible: true,
  }

  componentDidMount = async () => {
    var money = await AsyncStorage.getItem('money');
    var tentBuy = await AsyncStorage.getItem('tentBuyed');
    var level4Unlocked = await AsyncStorage.getItem('Level_4_Unlocked');
    var freshClothesBuy = await AsyncStorage.getItem('freshClothesBuyed');
    var cellPhoneBuy = await AsyncStorage.getItem('cellPhoneBuyed');
    var bicycleBuy = await AsyncStorage.getItem('bicycleBuyed');
    var twoxTime = await AsyncStorage.getItem('2xTime');
    var sHouseBuy = await AsyncStorage.getItem('sHouseBuyed');
    var motocycleBuy = await AsyncStorage.getItem('motocycleBuyed');
    var pcBuy = await AsyncStorage.getItem('pcBuyed');
    var cheapCarBuy = await AsyncStorage.getItem('cheapCarBuyed');

    timestamp = new Date().getTime();

    var earning = this.state.earning;


    if (level4Unlocked == 'true') {
      this.setState({ isVisible: false });
    }

    if (tentBuy == 'true') {
      earning = earning*0.3 + earning;
    }

    if (pcBuy == 'true') {
      earning = earning*1.5 + earning;
    }

    if (cheapCarBuy == 'true') {
      earning = earning*1.8 + earning;
    }

    if (sHouseBuy == 'true') {
      earning = earning + earning;
    }

    if (motocycleBuy == 'true') {
      earning = earning*1.2 + earning;
    }

    if (parseFloat(twoxTime) >= timestamp) {
      earning = earning + earning;
    }

    if (freshClothesBuy == 'true') {
      earning = earning*0.2 + earning;
    }

    if (bicycleBuy == 'true') {
      earning = earning*0.8 + earning;
    }

    if (cellPhoneBuy == 'true') {
      earning = earning*0.6 + earning;
    }

    if (money == NaN || money == null) {
      money = 0;
    }

    await Font.loadAsync({
      'burbank': require('../../fonts/BurbankBigCondensed-Bold.otf'),
    });

    await AsyncStorage.setItem('level', 'Level_4');

    this.setState({ loading: false, money: parseFloat(parseFloat(money).toFixed(2)), earning: earning });
  }

  earnMoney = async () => {
    var money = this.state.money + this.state.earning;

    await this.setState({ money: parseFloat(money.toFixed(2)) });

    await AsyncStorage.setItem('money', money.toString());

    if (money >= 15000) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
          routeName: 'Level_5',
        })],
      });

      await this.props.navigation.dispatch(resetAction);
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

  setNewUnlocked = async () => {
    this.setState({ isVisible: false });
    await AsyncStorage.setItem('Level_4_Unlocked', 'true');
  }

  render() {
    return (
      <LinearGradient colors={['yellow', '#192f6a']} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.loading ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color='white' size='large' />
            <Text style={{ color: '#fff', fontSize: 30 }}>Loading</Text>
          </View>
          :
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
              <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: 'yellow', fontSize: 16 }}>Your Job: Small Restorant Owner</Text>
            </View>
            <View style={{ marginTop: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
              <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#4285F4', fontSize: 32 }}>Your Money</Text>
              <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#000', fontSize: 16, marginTop: 5 }}>{this.state.money} $</Text>
            </View>
            <TouchableOpacity onPress={() => { this.earnMoney(); }}>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, height: width - 80, borderRadius: (width - 80) / 2, marginTop: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
                <Text style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#DB4437', fontSize: 40 }}>Earn Money</Text>
              </View>
            </TouchableOpacity>
            {
              this.state.isVisible ?
              <Overlay
                isVisible={this.state.isVisible}
                height='auto'
                width='auto'
                overlayBackgroundColor='lightgray'
                >
                  <View style={{ alignItems: 'center' }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, marginTop: 5, alignItems: 'center', padding: 10, width: (width) - 40, backgroundColor: 'white'}}>
                    <Text style={{ fontSize: 20, color: 'red' }}>New Level</Text>
                    </View>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, marginTop: 5, alignItems: 'center', padding: 10, width: (width) - 40, backgroundColor: 'white'}}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Now you are on Level 4</Text>
                    </View>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, marginTop: 5, alignItems: 'center', padding: 10, width: (width) - 40, backgroundColor: 'white'}}>
                    <Text style={{ fontSize: 16, color: 'black' }}>You are owner of the small restorant now.</Text>
                    </View>
                    <TouchableOpacity onPress={() => { this.setNewUnlocked(); }}>
                      <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, width: width - 40, backgroundColor: 'pink', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white'  }}>Let's Play</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Overlay>
                :
                null
              }
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
