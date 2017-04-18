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
  <View>
    <Card>
      <Card.Media
        height={200}
        image={<Image source={require('../images/plant.jpg')} style={{width: Constants.widthWindow}}/>}
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
  </View>
)
