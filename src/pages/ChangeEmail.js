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
// import * as firebase from "firebase";
import Constants from '../Constants'
import Header from '../components/header'

class ChangeEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }
  usernameChangeHandler(ev) {
    this.state.username = ev.nativeEvent.text
  }

  emailChangeHandler(ev) {
    this.state.email = ev.nativeEvent.text
    // console.log(ev.nativeEvent.text)
  }
  passwordChangeHandler(ev) {
    state.pass = ev.nativeEvent.text
    // console.log(ev.nativeEvent.text)
  }
  async onPressEmail(email, pass) {
    // var cond = true
    setState({loaded: false})
    var user = Constants.firebase.auth().currentUser;

    user.updateEmail(email).then((userData) => {
      setState({loaded: true})
      // console.log("Email Address Changed");
      alert('Your Email Address was changed!');
    }, (error) => {
      switch(error.code){
        case "EMAIL_TAKEN":
        alert("The new user account cannot be created because the email is already in use.");
        break;

        case "INVALID_EMAIL":
        alert("The specified email is not a valid email.");
        break;

        default:
        alert("Error changing Email:" + JSON.stringify(error));
      }
    })
  }
  componentWillMount() {
    this.props.setHeaderTitle('Change Email')
  }
  render() {
    return (
     <View style={containerStyles.container}>
       <Header text="Email Change" loaded={this.state.loaded} />
       <Text style={textStyles.subtitle} >Change your Email</Text>
       <TextInput placeholder='New Email'
        style={inputStyles.emailInput}
        onChange={this.emailChangeHandler}></TextInput>
        <ButtonInverted title='Change Email' onPress={() => this.onPressEmail(this.state.email, this.state.pass)} />
     </View>
    )
  }
}
export default ChangeEmail
