import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,

} from 'react-native';

import Constants from '../Constants'
import textStyles from '../styles/Text'
import containerStyles from '../styles/Container'
import ButtonRectangle from '../components/ButtonRectangle'
// 3421
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('profile constructor')
  }
  componentWillMount() {
    this.props.setHeaderTitle('About')
  }
  render() {
    return (
      <View>
        <Text style={textStyles.title}>This application was created for the LUMS Software Engineering course 2017. It recognizes and provides information on Plants and Trees</Text>
       
      </View>
    )
  }
}

export default About
