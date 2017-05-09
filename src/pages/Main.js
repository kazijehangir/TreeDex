import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera'

import Constants from '../Constants'
import textStyles from '../styles/Text'
import buttonStyles from '../styles/Button'
import containerStyles from '../styles/Container'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'
// import ButtonCustom from '../components/ButtonCustom'

//global stuct maintaining the state
let state = {
  showCamera: true,
  // flag: false,
  cameraType: Camera.constants.Type.back
}
const _onBarCodeRead = (e) => {

  // state.flag = true
  if(state.showCamera){
    Alert.alert(
    'Barcode Scanned!',
    "Type: " + e.type + "\nData: " + e.data
    )
  }

  state.showCamera = false

}
const checkUser = (ev) => {
  if (state.user) {
    alert(JSON.stringify(state.user) + " is logged in.")
  } else {
    alert("No user logged in.")
  }
}

export default ({ user, signout, onPressSettings, onPressNews, onPressProfile}) => {
  state.user = user
  if(state.showCamera) {
    return (
      // <View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={containerStyles.camera}
          onBarCodeRead={_onBarCodeRead}
          aspect={Camera.constants.Aspect.fill}
          type={state.cameraType}
        >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={containerStyles.smallCircle}>
            <Image
              source = {require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
              style={{flex:1, height:45, width:45,borderRadius:22.5,alignSelf:'stretch'}}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity
            underlayColor='#EFEFEF'
            onPress={onPressProfile}
            style={buttonStyles.profileButton}>
            <Image
              source={require('../images/profilePic.png')}
              style={{flex:1, height:45, width:45,borderRadius:22.5,alignSelf:'stretch'}}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor='#EFEFEF'
            onPress={onPressSettings}
            style={buttonStyles.profileButton}>
            <Image
              source={require('../images/settings.png')}
              style={{flex:1, height:45, width:45,borderRadius:22.5,alignSelf:'stretch'}}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        </Camera>
      // </View>
    );
  } else {
    return (
      <View>
      </View>
    );
  }
}
