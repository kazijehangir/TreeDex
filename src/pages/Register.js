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
  ActivityIndicator,
  BackAndroid,
  AsyncStorage
} from 'react-native';

import containerStyles from '../styles/Container'
import inputStyles from '../styles/Input'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonInverted from '../components/ButtonInverted'
// import * as firebase from "firebase";
import Header from '../components/header'
import Constants from '../Constants'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      email: '',
      password: '',
      name:''
    };
  }
  componentWillMount() {
    this.props.setHeaderTitle('Register')
  }
 async signup(){

    this.setState({
      loaded: true
    });
    try{
      userData = await Constants.firebaseApp.auth()
       .createUserWithEmailAndPassword(this.state.email, this.state.password)
       AsyncStorage.setItem('user_data',JSON(userData));
       this.setState({
         email:"",
         name:this.state.Username,
         password:"",
         friends:"",
         badges:"",
         profilePicture:"",
         loaded: false
      });
      alert('Your account was created!');

     try{
        await userData.updateProfile({
              displayName: this.state.name,
              userName: this.state.userName
              })
     } catch(error){
        alert(error)
     }
      this.props.onSuccessRegister()
    } catch(error) {
      switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert(error);
        }
        this.setState({
          loaded: false
        })
    }
  }
  render(){
    return(
       <View style={containerStyles.container}>

          <Text style={textStyles.subtitle} >Sign Up</Text>
          <ActivityIndicator animating = {true}
              opacity= {this.state.loaded ? 1:0}
              style = {containerStyles.activityIndicator} size = "large"
          />
          <TextInput placeholder='Name'
          style={inputStyles.nameInput}
          onChangeText={(text)=> this.setState({name:text})}
          value={this.state.name}
          ></TextInput>

          <TextInput placeholder='Username'
          style={inputStyles.nameInput}
          onChangeText={(text)=> this.setState({username:text})}
          value={this.state.username}
          ></TextInput>

          <TextInput placeholder='Email'
          style={inputStyles.emailInput}
          onChangeText={(text)=> this.setState({email:text})}
          value={this.state.email}></TextInput>

          <TextInput placeholder='Password'
          style={inputStyles.passwordInput}
          secureTextEntry={true}
          onChangeText={(text)=>this.setState({password: text})}
          value={this.state.password}></TextInput>

          <ButtonInverted title='Register' onPress={this.signup.bind(this)} />

          <ButtonCustom onPress={this.props.onPress} title='Or go to Login' />

        </View>
    )
  }

}
// AppRegistry.registerComponent('signup', () => signup);
export default Register;
