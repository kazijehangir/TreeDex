import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
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
var {widthWindow} = Dimensions.get('window')
var {height} = Dimensions.get('window')
var greenboxheight = height*0.65
var whiteboxheight = height*0.35

const ButtonCustom = ({title, onPress}) => (
  <TouchableHighlight
    underlayColor='#EFEFEF'
    onPress={onPress}
    style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>
)
const styles = StyleSheet.create({
  navHeader: {
    backgroundColor: '#00796b'
  },
  scrollView: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
 container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  whitebox: {
    height: whiteboxheight,
    backgroundColor: '#F5FCFF'
  },
  logoWrapper:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  greenbox: {
    height: greenboxheight,
    backgroundColor: '#00796b'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 40,
    color: '#004D40',
    marginTop: 75,
    textAlign: 'center'
  },
    subtitle1: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 16,
    color: '#F5FCFF',
    marginTop: 20
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20
  },
  welcomeLabel: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#00796b',
    marginTop: 10,
    textAlign: 'left'
  },
  button: {
    height: 40,
    elevation: 4,
    borderRadius: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#F5FCFF'
  },
  buttonText: {
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    fontSize: 16,
    color: '#00796b',
  },
  emailInput: {
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center'
  },
  passwordInput: {
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center'
  },


})


export default ({ onPress, goBack }) => (
 <View style={styles.container}>
   <Text style={styles.title}>Register as a new user</Text>
   <ButtonCustom onPress={onPress} title='Or go to Login' />
   <ButtonCustom onPress={goBack} title='Go Back' />
 </View>
)
