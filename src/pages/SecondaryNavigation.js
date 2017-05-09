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

class SecondaryNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    // this.props.setHeaderTitle('Secondary Navigation')
  }
  render() {
    return (
      <ScrollView style={{height: Constants.height}}>
        <Card >
          <CardImage>
            <Image
              style={{height:219}}
              source={require('../images/plant.jpg')}
              />
          </CardImage>
          <CardAction seperator>
            <TouchableOpacity style={ButtonStyles.footerButton} onPress={this.props.onPressNews}>
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
              <TouchableOpacity style={ButtonStyles.footerButton} onPress={this.props.onPressExplore}>
                <Text style={textStyles.footerText}>Explore</Text>
              </TouchableOpacity>
            </CardAction>
          </Card>
          </View>
      </ScrollView>
    )
  }
}
export default SecondaryNavigation
