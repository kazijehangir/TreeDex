import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import buttonStyles from '../styles/Button'

export default ({title, onPress}) => (
  <TouchableHighlight
    underlayColor='#EFEFEF'
    onPress={onPress}
    style={buttonStyles.buttonSquare}>
      <Text style={buttonStyles.buttonSquareText}>{title}</Text>
  </TouchableHighlight>
)