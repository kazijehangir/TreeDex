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

import Camera from 'react-native-camera';
import Constants from '../Constants'
import textStyles from '../styles/Text'
import containerStyles from '../styles/Container'
import ButtonRectangle from '../components/ButtonRectangle'
// 3421
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('profile constructor')
  }
  componentWillMount() {
    this.props.setHeaderTitle('Contact Us')
  }
  render() {
    return (
      <View>

        <View
            style={{flexDirection: 'column', justifyContent: 'center'}} >
        
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}} >

              <Image source={require('../images/jehangir.jpg')} style={{width: 125, height: 125}}></Image>
              


              <Image source={require('../images/basit.jpg')} style={{width: 125, height: 125}}></Image>
              
              
          </View>

          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}} >

              <Text style={textStyles.subtitle}>Jehangir Kazi</Text>

              <Text style={textStyles.subtitle}>Basit-Us-Salam Khan</Text>
              
              
          </View>

          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}} >

              <Image source={require('../images/saad.jpg')} style={{width: 125, height: 125}}></Image>
              


              <Image source={require('../images/mahnoor.jpg')} style={{width: 125, height: 125}}></Image>
              
              
          </View>

          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}} >

              <Text style={textStyles.subtitle}>Syed Saad Amer</Text>

              <Text style={textStyles.subtitle}>Mahnoor Malik</Text>
              
              
          </View>


          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}} >

              <Image source={require('../images/ayesha.jpg')} style={{width: 125, height: 125}}></Image>
              
              
              
              
          </View>

          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}} >

            <Text style={textStyles.subtitle}>Ayesha Shahid</Text>
              
              
          </View>

          





        </View>

          

         
      </View>
    )
  }
}

export default Contact
