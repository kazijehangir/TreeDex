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
import { Avatar } from 'react-native-material-design';
import { Icon } from 'react-native-material-design';
// 3421
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('profile constructor')
  }
  componentWillMount() {
    this.props.setHeaderTitle('Your Profile')
  }
  render() {
    return (
      <View>
        <Image
          source = {require('../images/profpic1.jpg')}
          style={{width: null, height:Constants.profileboxheight, alignSelf: 'stretch',justifyContent: 'center',alignItems: 'center' }}>
    
            <TouchableHighlight onPress={this.props.onPressCamera}>
              <View>
                <Icon name="settings" color="rgba(204, 204, 204,0.9)" size={40}/>
                {/*<Image src='../images/camera-icon.png' style={{weight: 100, height: 100, alignItems: 'center', justifyContent: 'center'}}></Image>*/}
              </View>
              
            </TouchableHighlight>
          <View
            style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center', marginTop: 20}} >

            <TouchableHighlight onPress={this.props.onPressSettings}>
              <Image source={require('../images/edit_icon.png')} style={{width: 50, height: 50}}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onPressSettings}>
              <Text style={textStyles.subtitle}>Settings</Text>
            </TouchableHighlight>
          </View>
          <View
            style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >

            <TouchableHighlight onPress={this.props.onPressNews}>
              <Image source={require('../images/badges_icon.png')} style={{width: 50, height: 50}}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onPressNews}>
              <Text style={textStyles.subtitle}>Badges</Text>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    )
  }
}

export default Profile
