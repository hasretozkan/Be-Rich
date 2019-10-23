import React from 'react';
import { StyleSheet, Text, AsyncStorage, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Header, Image, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable';
import { AdMobBanner } from 'expo-ads-admob';

const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {

  state = {
    loading: true,
  }

  componentDidMount = async () => {
    var level = await AsyncStorage.getItem('level');

    console.log(level)

    if (level != null) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
          routeName: level,
        })],
      });

      this.props.navigation.dispatch(resetAction);
    }

    this.setState({ loading: false });
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
          <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, paddingTop: 45, paddingBottom: 45, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                <Animatable.Text iterationDelay={1000} iterationCount='infinite' animation="bounce" style={{ color: '#4285F4', fontSize: 30, fontWeight: 'bold' }}>Life Simulator</Animatable.Text>
              </View>
              <TouchableOpacity onPress={() => { this.goTo('Level_1'); }}>
                <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, marginTop: 45, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                  <Animatable.Text iterationDelay={1000} iterationCount='infinite' animation="rubberBand" style={{ color: '#0F9D58', fontSize: 24 }}>Play</Animatable.Text>
                </View>
              </TouchableOpacity>
            </View>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="###" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
          }
        </LinearGradient>
      );
    }
  }
