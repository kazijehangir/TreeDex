import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Constants from '../Constants'
import textStyles from '../styles/Text'
import containerStyles from '../styles/Container'

export default ({ onPressQuests, onPressNews}) => ( 
  <View>
    <Image
          source = {require('../images/profile_background.png')}
          style={{width: null, height:Constants.greenboxheight, alignSelf: 'stretch',justifyContent: 'center',alignItems: 'center' }}>
          <Image source={require('../images/profilePic.png')}
           style={{width: 150, height: 150}}/> 
    
    </Image>    

        <View>
          <View 
                style={{flexDirection: 'row', width: 360, height: 50, backgroundColor: '#00796b'}} >
                <Image source={require('../images/edit_icon.png')} style={{width: 50, height: 50}}/>
                <Text  style={styles.titleText}>            EDIT PROFILE</Text>
          </View>
          <View style={{flexDirection: 'row', width: 360, height: 50, backgroundColor: '#21b48c'}}>
                <Image source={require('../images/badges_icon.jpg')} style={{width: 50, height: 50}}/>
                <Text style={styles.titleText}>             BADGES</Text>
          </View>
          <View style={{flexDirection: 'row', width: 360, height: 50, backgroundColor: '#afeeee'}}>
                <Image source={require('../images/adopt_a_plant_icon.png')} style={{width: 50, height: 50}}/>
                <Text style={styles.titleText}>             ADOPT A PLANT</Text>
          </View>     
        </View>
  </View>
)

const styles = StyleSheet.create({
 viewA: {
  height: 360,
  width: 360,
  alignItems: 'center', // doesn't work
  justifyContent: 'center', // doesn't work
  flex: 1,
  flexDirection : 'row'
 },
 viewB: {
  flex: .8
 },
baseText: {
    fontFamily: 'Cochin',
  },
titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});