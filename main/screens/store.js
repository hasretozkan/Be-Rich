import React from 'react';
import { StyleSheet, AsyncStorage, Text, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Header, Image, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable';
import { AdMobBanner } from 'expo-ads-admob';

const { width, height } = Dimensions.get('window');

export default class Store extends React.Component {

  state = {
    loading: true,
    tentBuy: false,
    phoneBuy: false,
    bicycleBuy: false,
    sHouseBuy: false,
    money: 0,
    freshClothesBuy: false,
    level: '',
    motoCycleBuy: false,
    PCBuy: false,
    cheapCarBuy: false,
    cheapHouseBuy: false,
    expensiveMotocycleBuy: false,
    expensiveCarBuy: false,
    girlfriendPoint: 0,
    girlfriendGet: false,
    yatchBuy: false,
    planeBuy: false,
    getMarried: false
  }

  componentDidMount = async () => {
    var money = await AsyncStorage.getItem('money');
    var tentBuy = await AsyncStorage.getItem('tentBuyed');
    var freshClothesBuy = await AsyncStorage.getItem('freshClothesBuyed');
    var cellPhoneBuy = await AsyncStorage.getItem('cellPhoneBuyed');
    var bicycleBuy = await AsyncStorage.getItem('bicycleBuyed');
    var motocycleBuy = await AsyncStorage.getItem('motocycleBuyed');
    var sHouseBuy = await AsyncStorage.getItem('sHouseBuyed');
    var cheapHouseBuy = await AsyncStorage.getItem('cheapHouseBuyed');
    var cheapCarBuy = await AsyncStorage.getItem('cheapCarBuyed');
    var pcBuy = await AsyncStorage.getItem('pcBuyed');
    var expensiveMotocycleBuy = await AsyncStorage.getItem('expensiveMotocycleBuyed');
    var expensiveCarBuy = await AsyncStorage.getItem('expensiveCarBuyed');
    var getGirlfriend = await AsyncStorage.getItem('getGirlfriendBuyed');
    var getMarried = await AsyncStorage.getItem('getMarriedBuyed');
    var girlfriendPoint = await AsyncStorage.getItem('girlfriendPoint');
    var yatchBuy = await AsyncStorage.getItem('yatchBuyed');
    var planeBuy = await AsyncStorage.getItem('planeBuyed');
    var level = await AsyncStorage.getItem('level');

    if (level != null) {
      this.setState({ level: level });
    } else {
      this.setState({ level: 'Level_1' });
    }

    if (tentBuy == 'true') {
      this.setState({ tentBuy: true });
    }

    if (getMarried == 'true') {
      this.setState({ getMarried: true });
    }

    if (yatchBuy == 'true') {
      this.setState({ yatchBuy: true });
    }

    if (planeBuy == 'true') {
      this.setState({ planeBuy: true });
    }

    if (cheapCarBuy == 'true') {
      this.setState({ cheapCarBuy: true });
    }

    if (getGirlfriend == 'true') {
      this.setState({ girlfriendGet: true });
    }

    if (expensiveCarBuy == 'true') {
      this.setState({ expensiveCarBuy: true });
    }

    if (cheapHouseBuy == 'true') {
      this.setState({ cheapHouseBuy: true });
    }

    if (pcBuy == 'true') {
      this.setState({ PCBuy: true });
    }

    if (motocycleBuy == 'true') {
      this.setState({ motoCycleBuy: true });
    }

    if (expensiveMotocycleBuy == 'true') {
      this.setState({ expensiveMotocycleBuy: true });
    }

    if (sHouseBuy == 'true') {
      this.setState({ sHouseBuy: true });
    }

    if (bicycleBuy == 'true') {
      this.setState({ bicycleBuy: true });
    }

    if (freshClothesBuy == 'true') {
      this.setState({ freshClothesBuy: true });
    }

    if (cellPhoneBuy == 'true') {
      this.setState({ phoneBuy: true });
    }

    if (money == NaN || money == null) {
      money = 0;
    }

    if (girlfriendPoint == NaN || girlfriendPoint == null) {
      girlfriendPoint = 0;
    }

    await Font.loadAsync({
      'burbank': require('../fonts/BurbankBigCondensed-Bold.otf'),
    });

    this.setState({ loading: false, money: parseFloat(money), girlfriendPoint: parseFloat(girlfriendPoint) });
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

  buyTent = async () => {
    if(this.state.money >= 40) {
      await AsyncStorage.setItem('tentBuyed', 'true');
      var money = this.state.money - 40;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 40, tentBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyCheapCar = async () => {
    if(this.state.money >= 12500) {
      await AsyncStorage.setItem('cheapCarBuyed', 'true');
      var money = this.state.money - 12500;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 12500, cheapCarBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyYatch = async () => {
    if(this.state.money >= 5000000) {
      await AsyncStorage.setItem('yatchBuyed', 'true');
      var money = this.state.money - 5000000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 5000000, yatchBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyPlane = async () => {
    if(this.state.money >= 15000000) {
      await AsyncStorage.setItem('planeBuyed', 'true');
      var money = this.state.money - 15000000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 15000000, planeBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyExpensiveMotocycle = async () => {
    if(this.state.money >= 45000) {
      await AsyncStorage.setItem('expensiveMotocycleBuyed', 'true');
      var money = this.state.money - 45000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 45000, expensiveMotocycleBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  getGirlfriend = async () => {
    if(this.state.girlfriendPoint >= 5) {
      await AsyncStorage.setItem('getGirlfriendBuyed', 'true');
      var girlfriendPoint = this.state.girlfriendPoint - 5;
      await AsyncStorage.setItem('girlfriendPoint', girlfriendPoint.toString());
      this.setState({ money: this.state.girlfriendPoint - 5, girlfriendGet: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough girlfriend point!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  getMarried = async () => {
    if(this.state.girlfriendPoint >= 5000) {
      await AsyncStorage.setItem('getMarriedBuyed', 'true');
      var girlfriendPoint = this.state.girlfriendPoint - 5000;
      await AsyncStorage.setItem('girlfriendPoint', girlfriendPoint.toString());
      this.setState({ money: this.state.girlfriendPoint - 5000, getMarried: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough girlfriend point!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyGirlfriendPoint = async () => {
    if(this.state.money >= 500000) {
      var money = this.state.money - 500000;
      var girlfriendPoint = this.state.girlfriendPoint + 1;
      await AsyncStorage.setItem('girlfriendPoint', girlfriendPoint.toString());
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 500000, girlfriendPoint: this.state.girlfriendPoint + 1 });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyExpensiveCar = async () => {
    if(this.state.money >= 150000) {
      await AsyncStorage.setItem('expensiveCarBuyed', 'true');
      var money = this.state.money - 150000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 150000, expensiveCarBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyCheapHouse = async () => {
    if(this.state.money >= 20000) {
      await AsyncStorage.setItem('cheapHouseBuyed', 'true');
      var money = this.state.money - 20000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 20000, cheapHouseBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyPC = async () => {
    if(this.state.money >= 5000) {
      await AsyncStorage.setItem('pcBuyed', 'true');
      var money = this.state.money - 5000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 5000, PCBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyFreshClothes = async () => {
    if(this.state.money >= 20) {
      await AsyncStorage.setItem('freshClothesBuyed', 'true');
      var money = this.state.money - 20;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 20, freshClothesBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyCellPhone = async () => {
    if(this.state.money >= 100) {
      await AsyncStorage.setItem('cellPhoneBuyed', 'true');
      var money = this.state.money - 100;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 100, phoneBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyBicycle = async () => {
    if(this.state.money >= 350) {
      await AsyncStorage.setItem('bicycleBuyed', 'true');
      var money = this.state.money - 350;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 350, bicycleBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buysHouse = async () => {
    if(this.state.money >= 1250) {
      await AsyncStorage.setItem('sHouseBuyed', 'true');
      var money = this.state.money - 1250;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 1250, sHouseBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  buyMotocycle = async () => {
    if(this.state.money >= 2000) {
      await AsyncStorage.setItem('motocycleBuyed', 'true');
      var money = this.state.money - 2000;
      await AsyncStorage.setItem('money', money.toString());
      this.setState({ money: this.state.money - 2000, motoCycleBuy: true });
    } else {
      Alert.alert(
        'Insufficient Amount',
        'You do not have enough money!',
        [
          { text: 'Okay' },
        ],
      );
    }
  }

  render() {
    return (
      <LinearGradient colors={['red', '#192f6a']} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.loading ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color='white' size='large' />
          </View>
          :
          <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', marginBottom: 15 }}>
                <Text style={{ color: '#db3236', fontSize: 24, fontWeight: 'bold' }}>Shop</Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                {this.state.freshClothesBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, marginBottom: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Fresh Clothes (0.2xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyFreshClothes(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, marginBottom: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Fresh Clothes (0.2xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>20 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                <AdMobBanner
                  bannerSize="banner"
                  adUnitID="###" // Test ID, Replace with your-admob-unit-id
                  testDeviceID="EMULATOR"
                  onDidFailToReceiveAdWithError={this.bannerError} />
                {this.state.tentBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Tent (0.3xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyTent(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Tent (0.3xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>40 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.phoneBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Cellphone (0.6xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyCellPhone(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Cellphone (0.6xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>100 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.bicycleBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Bicycle (0.8xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyBicycle(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Bicycle (0.8xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>350 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.sHouseBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Small House (1xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buysHouse(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Small House (1xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>1250 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.motoCycleBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Motocycle (1.2xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyMotocycle(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Motocycle (1.2xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>2000 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.PCBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>PC (1.5xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyPC(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>PC (1.5xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>5000 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.cheapCarBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Cheap Car (1.8xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyCheapCar(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Cheap Car (1.8xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>12500 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.cheapHouseBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Cheap House (2.2xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyCheapHouse(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Cheap House (2.2xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>20000 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.expensiveMotocycleBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Expensive Motocycle (2.8xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyExpensiveMotocycle(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Expensive Motocycle (2.8xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>45000 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                {this.state.expensiveCarBuy ?
                  <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#3cba54', fontSize: 12 }}>Expensive Car (3.2xMoney)</Text>
                    <Icon name='check' color='#3cba54' type='material-community' size={12} />
                  </View>
                  :
                  <TouchableOpacity onPress={() => { this.buyExpensiveCar(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Expensive Car (3.2xMoney)</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>150000 $</Text>
                    </View>
                  </TouchableOpacity>
                }
                  <TouchableOpacity onPress={() => { this.buyGirlfriendPoint(); }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#000', fontSize: 12 }}>Get Charm Point</Text>
                      <Text style={{ color: '#000', fontSize: 12 }}>500000 $</Text>
                    </View>
                  </TouchableOpacity>
                  {this.state.girlfriendGet ?
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#3cba54', fontSize: 12 }}>Get Girlfriend (4xMoney)</Text>
                      <Icon name='check' color='#3cba54' type='material-community' size={12} />
                    </View>
                    :
                    <TouchableOpacity onPress={() => { this.getGirlfriend(); }}>
                      <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontSize: 12 }}>Get Girlfriend (4xMoney)</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ marginRight: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#000', fontSize: 12 }}>5</Text>
                        <Icon name='heart' color='red' type='material-community' size={12} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  }
                  {this.state.yatchBuy ?
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#3cba54', fontSize: 12 }}>Yatch (3.8xMoney)</Text>
                      <Icon name='check' color='#3cba54' type='material-community' size={12} />
                    </View>
                    :
                    <TouchableOpacity onPress={() => { this.buyYatch(); }}>
                      <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontSize: 12 }}>Yatch (3.8xMoney)</Text>
                        <Text style={{ color: '#000', fontSize: 12 }}>5000000 $</Text>
                      </View>
                    </TouchableOpacity>
                  }
                  {this.state.planeBuy ?
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#3cba54', fontSize: 12 }}>Plane (4.2xMoney)</Text>
                      <Icon name='check' color='#3cba54' type='material-community' size={12} />
                    </View>
                    :
                    <TouchableOpacity onPress={() => { this.buyPlane(); }}>
                      <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontSize: 12 }}>Plane (4.2xMoney)</Text>
                        <Text style={{ color: '#000', fontSize: 12 }}>15000000 $</Text>
                      </View>
                    </TouchableOpacity>
                  }
                  {this.state.getMarried ?
                    <View style={{ marginBottom: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: '#3cba54', fontSize: 12 }}>Get Married (10xMoney)</Text>
                      <Icon name='check' color='#3cba54' type='material-community' size={12} />
                    </View>
                    :
                    <TouchableOpacity onPress={() => { this.getMarried(); }}>
                      <View style={{ marginBottom: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 40, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontSize: 12 }}>Get Married (10xMoney)</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ marginRight: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, color: '#000', fontSize: 12 }}>5000</Text>
                        <Icon name='heart' size={12} color='red' type='material-community' />
                        </View>
                      </View>
                    </TouchableOpacity>
                  }
              </View>
              </ScrollView>
            </View>
          }
          <View style={{ height: 50, width: width, backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {this.goTo(this.state.level)}}>
            <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
              <Icon name='home' color='gray' />
            </View>
          </TouchableOpacity>
          <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
          <Icon name='cart' color='#00aced' type='material-community' />
        </View>
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
