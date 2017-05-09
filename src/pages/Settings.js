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

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'

//If you gonna change this please put it somewhere back too!!!
// I put them back. - JK

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.setHeaderTitle('Settings')
  }
  render() {
    return (
      <View style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >
        <ScrollView style={containerStyles.explore}>
          <Text style={textStyles.header}>Settings</Text>
          <ButtonSquare onPress={this.props.onPressEmail} title='Change Email'/>
          <ButtonSquare onPress={this.props.onPressPass} title= 'Change Password'/>
        </ScrollView>
      </View>
    )
  }
}
export default Settings
