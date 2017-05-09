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
  BackAndroid,
  TouchableOpacity
} from 'react-native';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view'
import Button from 'react-native-button';
import Colors from '../Colors'



import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'
import ButtonStyles from '../styles/Button'
import Constants from '../Constants'

//If you gonna change this please put it somewhere back too!!!
// I put them back. - JK
//I changed it a bit. -Basit

export default ({onPressExplore, onPressNews}) => (
  <ScrollView>
    <View style={{flex:0.1}}>
      <Card>
          <Text style={{fontSize:30,fontWeight:'200',color:Colors.primary,marginLeft:0}}>
            TreeDex
          </Text>
      </Card>
    </View>
    <View style={{flex:1}}>
    <Card >
      <CardImage>
        <Image
          style={{height:219}}
          source={require('../images/plant.jpg')}
        />
      </CardImage>
      <CardAction seperator>
        <TouchableOpacity style={ButtonStyles.footerButton} onPress={onPressNews}>
          <Text style={textStyles.footerText}>News</Text>
        </TouchableOpacity>
      </CardAction>
    </Card>
    <View style={{flexDirection:'row',flex:1,marginBottom:30}}>
      <Card>
        <CardImage>
        <Image
          style={{height:209}}
          source={require('../images/plant.jpg')}
        />
        </CardImage>
        <CardAction>
          <TouchableOpacity style={ButtonStyles.footerButton} onPress={onPressExplore}>
            <Text style={textStyles.footerText}>Explore</Text>
          </TouchableOpacity>
        </CardAction>
      </Card>
    </View>
    </View>
  </ScrollView>
)
