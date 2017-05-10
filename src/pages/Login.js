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

import ButtonInverted from '../components/ButtonInverted'
import inputStyles from '../styles/Input'
import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import Header from '../components/header'
import Constants from '../Constants'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      email: '',
      password: ''
    };
  }
  componentWillMount() {
    this.props.setHeaderTitle('Login')
  }
  async login(){
    this.setState({
      loaded: true
    });
    try{

          userData = await Constants.firebaseApp.auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
          alert(JSON.stringify(userData))
          AsyncStorage.setItem('user_data',JSON(userData));
          this.setState({
            loaded: false
          });

          this.props.onSuccess()
    } catch(error){
      this.setState({
        loaded: false
      });
      alert(error)

    }
  }

  render(){
    return(
      <View style={containerStyles.container}>
      <Text style={textStyles.subtitle} >Welcome back! Please log-in below.</Text>
      <ActivityIndicator animating = {true}
          opacity= {this.state.loaded ? 1:0}
          style = {containerStyles.activityIndicator} size = "large"
      />
       <TextInput placeholder='Email'
        style={inputStyles.emailInput}
        onChangeText={(text)=> this.setState({email:text})}
        value={this.state.email}></TextInput>

      <TextInput placeholder='Password'
          style={inputStyles.passwordInput}
          secureTextEntry={true}
          onChangeText={(text)=>this.setState({password: text})}
          value={this.state.password}></TextInput>

      <ButtonInverted title='Sign In'
        onPress={this.login.bind(this)}
      />
    </View>
    )
  }

}
AppRegistry.registerComponent('login', () => login);
export default Login;
