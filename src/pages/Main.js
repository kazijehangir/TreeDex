import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import Camera from 'react-native-camera'

import Constants from '../Constants'
import textStyles from '../styles/Text'
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
const logout = (ev) => {
  alert("Havent implemented logout yet")
}
export default ({ user, onPressQuests, onPressNews, onPressProfile}) => {
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
        <ButtonCustom onPress={onPressProfile} title='Profile' />
        <ButtonCustom onPress={checkUser} title='Check User' />
        <ButtonCustom onPress={logout} title='Logout' />
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
