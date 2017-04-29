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

let state = {
  showCamera: true,
  cameraType: Camera.constants.Type.back
}
const _onBarCodeRead = (e) => {
  state.showCamera = false
  Alert.alert(
    'Barcode Scanned!',
    "Type: " + e.type + "\nData: " + e.data
  )
}

export default ({ onPressQuests, onPressNews, onPressProfile}) => {
  if(state.showCamera) {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={containerStyles.camera}
        onBarCodeRead={_onBarCodeRead}
        aspect={Camera.constants.Aspect.fill}
        type={state.cameraType}
      />
    );
  } else {
    return (
      <View></View>
    );
  }
}
