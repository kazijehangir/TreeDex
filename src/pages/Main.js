import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  Alert,
  ScrollView,
  TouchableHighlight
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

export default ({ user, signout, onPressQuests, onPressNews, onPressProfile}) => {
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
        <TouchableHighlight
          underlayColor='#EFEFEF'
          onPress={onPressProfile}
          style={buttonStyles.profileButton}>
            <Text style={buttonStyles.buttonText}>Profile</Text>
        </TouchableHighlight>
        <ButtonCustom onPress={checkUser} title='Check User' />
        <ButtonCustom onPress={signout} title='Logout' />
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
