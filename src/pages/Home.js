import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';
import Constants from '../Constants'
import ButtonCustom from '../components/ButtonCustom'

import textStyles from '../styles/Text'
import containerStyles from '../styles/Container'

export default ({ onPressRegister, onPressLogin}) => (
 <View style={containerStyles.containerLogin}>
    <View style={containerStyles.whitebox}>
      <View style={containerStyles.logoWrapper}>
        <Image
          source = {require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
          style={{width:70, height:70, marginTop: 70}}
        />
        <Text style={textStyles.title} >TreeDex</Text>
      </View>
    </View>
    <View style={containerStyles.greenbox}>
       <Image
          source = {require('../images/background1.jpg')}
          style={{width: null, height:Constants.greenboxheight, alignSelf: 'stretch'}}>
        
        <Text style={textStyles.subtitle1}>TreeDex is a
          complete repository for horticulture information.</Text>
        <ButtonCustom onPress={onPressLogin} title='LOG IN' backgroundColor='#F5FCFF' />
        <ButtonCustom onPress={onPressRegister} title='REGISTER' backgroundColor='#F5FCFF' />
      </Image>
    </View>
  </View>
)
