import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Constants from '../Constants'
import textStyles from '../styles/Text'

export default ({ onPressQuests, onPressNews}) => (
  // image={<Image source={require('../images/profile_background.jpg')} style={{width: Constants.widthWindow}}/>}
        
  <View>
    <Image
          source = {require('../images/profile_background.png')}
          style={{width: null, height:Constants.greenboxheight, alignSelf: 'stretch'}}/>

        <View>
          <View 
                style={{flexDirection: 'row', width: 500, height: 50, backgroundColor: '#00796b'}} >
                <Image source={require('../images/edit_icon.png')} style={{width: 50, height: 50}}/>
                <Text>EDIT PROFILE</Text>
          </View>
          <View style={{flexDirection: 'row', width: 500, height: 50, backgroundColor: '#21b48c'}}>
                <Image source={require('../images/badges_icon.jpg')} style={{width: 50, height: 50}}/>
                <Text>BADGES</Text>
          </View>
          <View style={{flexDirection: 'row', width: 500, height: 50, backgroundColor: '#afeeee'}}>
                <Image source={require('../images/adopt_a_plant_icon.png')} style={{width: 50, height: 50}}/>
                <Text>ADOPT A PLANT</Text>
          </View>     
        </View>
  </View>
)