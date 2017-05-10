import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,

} from 'react-native';

import Constants from '../Constants'
import textStyles from '../styles/Text'
import containerStyles from '../styles/Container'
import ButtonRectangle from '../components/ButtonRectangle'
// 3421
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('profile constructor')
  }
  componentWillMount() {
    this.props.setHeaderTitle('About')
  }
  render() {
    return (
      <View>
        <Text style={textStyles.title}>This application was created for the LUMS Software Engineering course 2017. It was conceived by Dr. Suleman Shahid, and it was under his supervision that our team of 5 developed this system.\n
        The primary purpose is to increase awareness and importance for horticulture in the LUMS community. The system aims to do that by providing a fun way to learn about different plants, where geo-caching and AR come together.
        The primary application was developed using React Native in cunjunction with Firebase. These two tools have proven invaluable in developing a robust cross-platform system which caters to as many requirments as possible.
        This webpage is developed using Bootstrap templates and a bit of React. The site is hosted on Firebase. And yes, we love Firebase.</Text>

      </View>
    )
  }
}

export default About
