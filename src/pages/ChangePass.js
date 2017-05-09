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
import inputStyles from '../styles/Input'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonInverted from '../components/ButtonInverted'
import Constants from '../Constants'
import Header from '../components/header'
var loaded = true
const onPressPass = async (pass) => {
  loaded = false
  var user = Constants.firebase.auth().currentUser;
  user.updatePassword(pass).then((userData) => {
    loaded = true
    console.log("Pasword Changed");
    alert('Your Password was changed!');
  }, (error) => {
    switch(error.code){

      case "INVALID_PASSWORD":
        alert("The specified password is not valid.");
      break;

      default:
        alert("Error changing Password:" + JSON.stringify(error));
    }
  })
}


class ChangePass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }
  password1ChangeHandler(ev) {
    setState({pass1:ev.nativeEvent.text})
  }
  password2ChangeHandler(ev) {
    setState({pass2:ev.nativeEvent.text})
  }
  async onPressPass (pass)  {
    if (this.state.pass1 === this.state.pass2) {
      setState({loaded: false})
      var user = Constants.firebase.auth().currentUser;
      user.updatePassword(pass).then((userData) => {
        setState({loaded: true})
        console.log("Password Changed");
        alert('Your Password was changed!');
      }, (error) => {
        switch(error.code){

          case "INVALID_PASSWORD":
          alert("The specified password is not valid.");
          break;

          default:
          alert("Error changing Password:" + JSON.stringify(error));
        }
      })
    } else {
      alert("The passwords don't match. Please re-enter.")
    }
  }
  componentWillMount() {
    this.props.setHeaderTitle('Change Password')
  }
  render() {
    return (
      <View style={containerStyles.container}>
        <Header text="Change Password" loaded={this.state.loaded} />
        <Text style={textStyles.subtitle} >Change Password</Text>


        <TextInput placeholder='Type New Password'
         style={inputStyles.passwordInput}
         secureTextEntry={true}
         onChange={this.password1ChangeHandler}></TextInput>

        <TextInput placeholder='Re-type New Password'
         style={inputStyles.passwordInput}
         secureTextEntry={true}
         onChange={this.password2ChangeHandler}></TextInput>
        <ButtonInverted title='Change Password' onPress={() => onPressPass(state.pass)} />
      </View>
    )
  }
}
export default ChangePass
