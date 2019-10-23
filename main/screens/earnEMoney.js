import React from 'react';
import { StyleSheet, Text, AsyncStorage, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Header, Image, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { AdMobBanner, AdMobRewarded } from 'expo-ads-admob';

const { width, height } = Dimensions.get('window');

export default class EarnMoney extends React.Component {

  state = {
    loading: true,
    level: ''
  }

  componentDidMount = async () => {
    AdMobRewarded.setAdUnitID(####); // Test ID, Replace with your-admob-unit-id
    AdMobRewarded.setTestDeviceID('EMULATOR');

    var level = await AsyncStorage.getItem('level');

    this.setState({ loading: false, level: level });
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

  watch2xMoney = async () => {
    this.setState({ loading: true });
    await AdMobRewarded.requestAdAsync();
    timestamp = new Date().getTime() + 1000*60*30;
    AdMobRewarded.showAdAsync()
    .then(() => {
      AsyncStorage.setItem('2xTime', timestamp.toString());
      this.setState({ loading: false });
    })
    .catch(() => {
      Alert.alert(
        'No Ads',
        'There is no Ads to watch. Try again later.',
        [
          { text: 'Okay' },
        ],
      );
    });
  }

  watchCashMoney = async () => {
    this.setState({ loading: true });
    await AdMobRewarded.requestAdAsync();
    var money = await AsyncStorage.getItem('money');
    money = parseFloat(money);
    money = money*1.68 + money;
    AdMobRewarded.showAdAsync()
    .then(() => {
      AsyncStorage.setItem('money', money.toString());
      this.setState({ loading: false });
    })
    .catch(() => {
      Alert.alert(
        'No Ads',
        'There is no Ads to watch. Try again later.',
        [
          { text: 'Okay' },
        ],
      );
    });
  }

  render() {
    return (
      <LinearGradient colors={['#00aced', '#192f6a']} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.loading ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color='white' size='large' />
          </View>
          :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="###" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError}
            />
            <TouchableOpacity onPress={() => { this.watch2xMoney(); }}>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                <Text style={{ color: '#000', fontSize: 16 }}>★ Watch Ads for 2xMoney ★</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.watchCashMoney(); }}>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                <Text style={{ color: '#000', fontSize: 14 }}>★ Watch Ads for Cash Money ★</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
        <View style={{ height: 50, width: width, backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {this.goTo(this.state.level)}}>
            <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
            <Icon name='home' color='gray' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.goTo('Store')}}>
          <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
          <Icon name='cart' color='gray' type='material-community' />
        </View>
      </TouchableOpacity>
      <View style={{ width: width / 3, alignItems: 'center', height: 50, justifyContent: 'center' }}>
      <Icon name='currency-usd' color='#00aced' type='material-community' />
    </View>
  </View>
</LinearGradient>
);
}
}
