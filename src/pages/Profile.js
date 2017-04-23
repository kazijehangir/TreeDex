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
          <View style={{width: 500, height: 50, backgroundColor: '#00796b'}} />
          <View style={{width: 500, height: 50, backgroundColor: '#21b48c'}} />
          <View style={{width: 500, height: 50, backgroundColor: '#afeeee'}} />
        </View>





  </View>
    // <Card>

    //   <Card.Media
    //     // height={250}
    //     image={<Image source={require('../images/background.jpg')}  style={{width: Constants.widthWindow}} />}
    //     overlay
    //   />
    //   // <Card.Body>
    //   //   <Text style={textStyles.welcomeLabel}>There is Such a Thing as Plant Intelligence</Text>
    //   //   <Text>Plants are capable of solving problems and learning from past experiences</Text>
    //   // </Card.Body>
    //   <Card.Actions position="right">
    //     <Button value="NORMAL FLAT" text="READ MORE" primary="paperTeal" />
    //   </Card.Actions>
    // </Card>
  // </View>
)
