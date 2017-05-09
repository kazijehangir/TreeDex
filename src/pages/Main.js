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
import ModalDropdown from 'react-native-modal-dropdown';


import Constants from '../Constants'
import textStyles from '../styles/Text'
import buttonStyles from '../styles/Button'
import containerStyles from '../styles/Container'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'
import Colors from '../Colors'
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

_dropdown_6_onSelect = (idx, value, onPressSettings,onPressSignout) => {
      if (idx === '0'){
        onPressSettings()
      } else {
        onPressSignout()
      }
  }
  const DEMO_OPTIONS_1 = ['Account','Logout','About Us','Contact Us'];


export default ({ user, onPressSignout, onPressSettings, onPressNews, onPressProfile}) => {
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
            onPress={onPressProfile}
            style={buttonStyles.profileButton}>
            <Image
              source={require('../images/profilePic.png')}
              style={{flex:1, height:45, width:45,borderRadius:22.5,alignSelf:'stretch'}}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <ModalDropdown ref={el => this._dropdown_5 = el}
          style={containerStyles.dropDown}
             options={DEMO_OPTIONS_1}
             textStyle={{backgroundColor:Colors.primary}}
             onSelect={(idx , value) => this._dropdown_6_onSelect(idx,value,onPressSettings,onPressSignout)}>
             <View style={buttonStyles.profileButton}>
                <Image
                  style={{flex:1, height:45, width:45,borderRadius:22.5,alignSelf:'stretch'}}
                   source={require('../images/settings.png')}
                />
              </View>
            </ModalDropdown>
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
