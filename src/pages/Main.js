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


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DEMO_OPTIONS_1: ['Account','Logout','About Us','Contact Us'],
      user: this.props.user,
      showCamera: true,
      cameraType: Camera.constants.Type.back
    }
  }
  componentWillMount() {
    this.props.setHeaderTitle('Scan a Tree!')
  }
  _onBarCodeRead(e) {
    if(this.state.showCamera){
      Alert.alert(
        'Barcode Scanned!',
        "Type: " + e.type + "\nData: " + e.data
      )
    }
    this.state.showCamera = false
  }
  checkUser(ev) {
    if (this.state.user) {
      alert(JSON.stringify(this.state.user) + " is logged in.")
    } else {
      alert("No user logged in.")
    }
  }
  dropdown(idx, value) {
    if (idx === '0'){
      this.props.onPressSettings()
    } else if(idx === '1') {
      this.props.onPressSignout()
    }
  }
  render() {
    if(this.state.showCamera) {
      return (
        // <View>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={containerStyles.camera}
            onBarCodeRead={this._onBarCodeRead}
            aspect={Camera.constants.Aspect.fill}
            type={this.state.cameraType}
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
              onPress={this.props.onPressProfile}
              style={buttonStyles.profileButton}>
              <Image
                source={require('../images/profilePic.png')}
                style={{flex:1, height:45, width:45,borderRadius:22.5,alignSelf:'stretch'}}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <ModalDropdown
               style={containerStyles.dropDown}
               options={this.state.DEMO_OPTIONS_1}
               textStyle={{backgroundColor:Colors.primary}}
               onSelect={(idx, value) => this.dropdown(idx,value)}>
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
}
export default Main
