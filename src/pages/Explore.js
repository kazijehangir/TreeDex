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

export default ({onPressQuests, onPressNews}) => (
  <View style={{flex:1}}>
  <Text style={textStyles.header}>need a name for this page</Text>
    <Card >
      <CardImage>
        <Image
          style={{height:219}}
          source={require('../images/plant.jpg')}
        />
      </CardImage>
      <CardAction seperator>
        <Button
          containerStyle={ButtonStyles.newsButton}
          style={{fontFamily:'Roboto',fontSize: 25, color: Colors.primary}}
          onPress={onPressNews}>
          News
        </Button>
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
          <Button
            containerStyle={ButtonStyles.newsButton}
            style={{fontSize: 25, color: Colors.primary}}>
            Explore
          </Button>
        </CardAction>
      </Card>
      <Card>
        <CardImage>
        <Image
          style={{height:209}}
          source={require('../images/plant.jpg')}
        />
        </CardImage>
        <CardAction >
          <Button
            containerStyle={ButtonStyles.newsButton}
            style={{fontSize: 25, color: Colors.primary}}>
            Settings
          </Button>
        </CardAction>
      </Card>
    </View>
  </View>
)
