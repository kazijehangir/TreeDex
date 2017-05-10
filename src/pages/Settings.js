import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
  NavigationExperimental,
  Dimensions,
  ScrollView,
  Platform,
  BackAndroid
} from 'react-native';

import { Checkbox } from 'react-native-material-design';

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'
import ButtonInverted from '../components/ButtonInverted'

//If you gonna change this please put it somewhere back too!!!
// I put them back. - JK

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
  }
  componentWillMount() {
    this.props.setHeaderTitle('Settings')
  }
handlecheck(ev){
  this.setstate('check' : true)
}
  render() {
    return (
      <View style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >
        <ScrollView style={containerStyles.explore}>
          <Text style={textStyles.header}>Settings</Text>
          <ButtonInverted onPress={this.props.onPressEmail} title='Change Email'/>
          <ButtonInverted onPress={this.props.onPressPass} title= 'Change Password'/>
          <View
            style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >

            <Checkbox value="accepted" checked={this.state.check} onCheck={this.handlecheck}/>

            <Text style={textStyles.subtitle}>Turn Notifications On</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default Settings
