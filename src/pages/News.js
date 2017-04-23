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
import Constants from '../Constants'
import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'

export default () => (
 <View style={containerStyles.container}>
   {/*<Text style={textStyles.title}>This is the News page</Text>
   <ButtonCustom onPress={console.log('button pressed')} title='sample button' />*/}
   <Card>
      <Card.Media
        height={200}
        image={<Image source={require('../images/plant.jpg')} style={{ flex: 1, width: undefined, height: undefined}}/>}
        overlay
      />
      <Card.Body>
        <Text style={textStyles.welcomeLabel}>There is Such a Thing as Plant Intelligence</Text>
        <Text>Plants are capable of solving problems and learning from past experiences</Text>
      </Card.Body>
      <Card.Actions position="right">
        <Button value="NORMAL FLAT" text="READ MORE" primary="paperTeal" />

      </Card.Actions>
    </Card>
    <View style={{flex: 1, flexDirection: 'row'}}>
        
    </View>
 </View>  
)