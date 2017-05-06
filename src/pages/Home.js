import React, { Component } from 'react';
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

export default ({onPressRegister, onPressLogin}) => (
  <View style={containerStyles.containerLogin}>
    <View style={containerStyles.whitebox}>
      <Image
        source = {require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
        style = {{flex:0.5, alignSelf:'stretch', resizeMode: 'contain', width: null, height: null, margin: 25}}>
      </Image>
      <View style={{flex:1, flexWrap: 'nowrap'}}>
        <Text style={textStyles.title} >TreeDex</Text>
      </View>
    </View>
    <View style={containerStyles.greenbox}>
        <Image
          source = {require('../images/background1.jpg')}
          style={{flex:1, alignSelf: 'stretch', width: null, height: null}}>

        <Text style={textStyles.subtitle1}>TreeDex is a
          complete repository for horticulture information.</Text>
        <ButtonCustom onPress={onPressLogin} title='LOG IN' backgroundColor='#F5FCFF' />
        <ButtonCustom onPress={onPressRegister} title='REGISTER' backgroundColor='#F5FCFF' />
      </Image>
    </View>
  </View>
)

// <View style={containerStyles.logoWrapper}>
//   <Image
//     source = {require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
//     style = {{flex:1}}>
//   </Image>
//   <Text style={textStyles.title} >TreeDex</Text>
// </View>


// style={{width: null, height:Constants.greenboxheight, alignSelf: 'stretch'}}>
// TODO: fix layout on landscape.
// style={{width:70, height:70, marginTop: 70, marginBottom: 35}}
