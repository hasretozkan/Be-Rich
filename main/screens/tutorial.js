import React from 'react';
import { StyleSheet, Text, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Icon, Header, Image, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');

export default class Tutorial extends React.Component {

  state = {
    loading: true,
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'burbank': require('../fonts/BurbankBigCondensed-Bold.otf'),
    });

    this.setState({ loading: false });
  }

  render() {
    return (
      <LinearGradient colors={['#00aced', '#192f6a']} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.loading ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color='white' size='large' />
          </View>
          :
          <View>
            <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, paddingTop: 45, paddingBottom: 45, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
              <Animatable.Text iterationDelay={1000} iterationCount='infinite' animation="bounce" style={{ color: '#4285F4', fontSize: 40, fontFamily: 'burbank' }}>Life Simulator</Animatable.Text>
            </View>

            <TouchableOpacity>
              <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, width: width - 80, padding: 15, borderRadius: 4, marginTop: 15, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                <Animatable.Text iterationDelay={3000} iterationCount='infinite' animation="rubberBand" style={{ color: '#000', fontSize: 30, fontFamily: 'burbank' }}>Credits</Animatable.Text>
              </View>
            </TouchableOpacity>
          </View>
        }
            </LinearGradient>
    );
  }
}
