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
  BackAndroid
} from 'react-native';

import containerStyles from '../styles/Container'
import inputStyles from '../styles/Input'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonInverted from '../components/ButtonInverted'
// import * as firebase from "firebase";
import Header from '../components/header'
import Constants from '../Constants'
// using Firebase;

// import Firebase from "firebase";
// import Database from "Firebase";
// using Firebase.Database;

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
       
      alert('Your account was created!');

      // var database = firebase.database();
      // var databasechild = database.child("Users");
      // var new_user_id = databasechild.child(this.state.name);
      // newuserRid.setValue(this.state.username)
      alert(this.state.name)
      Constants.firebaseApp.database().ref('Users/' + "001").set({
      "username": this.state.name,
      "email": this.state.name
      });
      // DatabaseReference rootRef = Database.getInstance().getReference();
      // DatabaseReference listRef = rootRef.child("Users");
      // DatabaseReference newuserRid = listRef.child(this.state.name);
      // newuserRid.setValue(this.state.username);
      
     try{
        await userData.updateProfile({
              displayName: this.state.name,
              userName: this.state.userName
              })
     } catch(error){
        alert(error)
     }

     this.setState({
        email: '',
        password: '',
        username: '',
        name:'',
        loaded: false
      });

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
