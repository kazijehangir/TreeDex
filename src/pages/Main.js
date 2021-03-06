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
import { Avatar } from 'react-native-material-design';
import { Icon } from 'react-native-material-design';


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
      DEMO_OPTIONS_1: ['Account','Logout', 'About', 'Contact Us'],
      user: this.props.user,
      showCamera: true,
      cameraType: Camera.constants.Type.back
    }
  }
  componentWillMount() {
    // this.props.setHeaderTitle('Scan a Tree!')
  }
  openUrl (url) {
    this.setState({showCamera: true})
    this.props.setWebUrl(url)
    this.props.openWebView()
  }
  _onBarCodeRead(e) {
    // alert(JSON.stringify(this.state))
    // alert(JSON.stringify(e.data.name))
    if(this.state.showCamera){
      // let st = e.data
      // data = st.filter((ch) => ch != '\\')
      // let test = "{\"name\":\"Gul e Nishtar\",\"url\":\"to fill\",\"imageURL\":\"https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/gulenishtar.jpg?alt=media&token=0d5d07c0-c396-4c04-88df-a8d79a72ca38\",\"age\":\"nill\",\"plantedBy\":\"nill\",\"location\":\"LUMS - Academic Block (Outgate Side)\"}"
      // alert(e.data)
      try {
        data = JSON.parse(e.data)
        // alert(data)

        Alert.alert(
          data.name,
          'Congratulations! You successfully scanned a plant!' + '\n'
          + 'Age:\t' + data.age + '\n'
          + 'Planted by:\t' + data.plantedBy + '\n'
          + 'Location:\t' + data.location,
          [
            {text: 'More info...', onPress: () => this.openUrl(data.url)},
            {text: 'Dismiss', onPress: () => this.setState({showCamera: true}), style: 'cancel'},
          ],
          {cancelable: false}
        )
        this.setState({showCamera: false})
      } catch (e) {
        alert("QR not valid. Please try again.")
      }
    }
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
    } else if (idx === '2') {

    } else if(idx === '2') {
      this.props.onPressAbout()
    } else if(idx === '3') {
      this.props.onPressAbout()
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
            onBarCodeRead={this._onBarCodeRead.bind(this)}
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
              <Icon name="portrait" color="rgba(204, 204, 204,0.9)" size={40}/>
            </TouchableOpacity>
            <ModalDropdown
               style={containerStyles.dropDown}
               options={this.state.DEMO_OPTIONS_1}
               textStyle={textStyles.dropdown}
               onSelect={(idx, value) => this.dropdown(idx,value)}>
               <View style={buttonStyles.profileButton}>
                  <Icon name="settings" color="rgba(204, 204, 204,0.9)" size={40}/>
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
