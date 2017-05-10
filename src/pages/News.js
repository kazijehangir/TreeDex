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
import Colors from '../Colors'
import { WebView } from 'react-native';

class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    this.props.setHeaderTitle('News')
  }
  openWebUrl(url) {
    this.props.setWebUrl(url)
    this.props.openWebView()
  }
  render() {
    return (
     <View style={containerStyles.container}>
        <View style = {{marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <TouchableHighlight onPress={(ev) => this.openWebUrl("http://news.nationalgeographic.com/2016/02/160221-plant-science-botany-evolution-mabey-ngbooktalk/")}>
                <Image source={require('../images/plant.jpg')} style={{width: Constants.width, height: 200, marginBottom: 10}}>
                    <Text style={textStyles.welcomeLabel1}>There is Such a Thing as Plant Intelligence</Text>
                </Image>
            </TouchableHighlight>
                <Text style = {{fontFamily:'Roboto', fontSize: 16, color: Colors.primary}}>Plants are capable of solving problems and learning from past experiences</Text>

        </View>
        <View style = {{marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <TouchableHighlight onPress={(ev) => this.openWebUrl("http://news.nationalgeographic.com/2017/03/felix-finkbeiner-plant-for-the-planet-one-trillion-trees/")}>
                <Image source={require('../images/news2.jpg')} style={{width: Constants.width, height: 200, marginBottom: 10}}>
                    <Text style={textStyles.welcomeLabel1}>Teenager Is on Track to Plant a Trillion Trees</Text>
                </Image>
            </TouchableHighlight>
                <Text style = {{fontFamily:'Roboto', fontSize: 16, color: Colors.primary}}>Starting his project as a nine-year-old, Felix Finkbeiner aims to restore the world’s forests.</Text>

        </View>


     </View>
    )
  }
}
export default News
// <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
//         <Image source={require('../images/news1.jpg')} style={{flex:0.5, width: undefined, height: 200, marginLeft: 10, marginRight: 5}}/>
//         <Image source={require('../images/news2.jpg')} style={{flex: 0.5, width: undefined, height: 200, marginLeft: 5, marginRight: 10}}/>
//
//     <TouchableHighlight onPress={this.props.onPressSubNews1} style={{flex:0.5}}>
//         <Image source={require('../images/news1.jpg')} style={{flex:0.5, width: undefined, height: 200, marginLeft: 10, marginRight: 5}}></Image>
//     </TouchableHighlight>
//     <TouchableHighlight onPress={this.props.onPressSubNews2} style={{flex:0.5}}>
//         <Image source={require('../images/news2.jpg')} style={{flex: 0.5, width: undefined, height: 200, marginLeft: 5, marginRight: 10}}></Image>
//     </TouchableHighlight>
// </View>
// <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
//     <View style = {{flex:0.5, marginLeft: 10}}>
//         <Text style={textStyles.newsHeading}>Bats Drawn to Plant via "Echo Beacon"</Text>
//     </View>
//      <View style = {{flex:0.5, marginLeft: 13, marginRight:10}}>
//         <Text style={textStyles.newsHeading}>Teenager Is on Track to Plant a Trillion Trees</Text>
//     </View>
// </View>
