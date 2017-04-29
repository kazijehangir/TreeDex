import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ListView,
  TouchableHighlight,
  NavigationExperimental,
  Dimensions,
  ScrollView,
  Platform,
  BackAndroid
} from 'react-native';

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import Constants from '../Constants'

<<<<<<< HEAD
class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
      <ListView
        style={containerStyles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
      />
    );
  }
}

export default ListViewDemo;
=======
export default () => (
 <View style={containerStyles.container}>
 <Image
          source = {require('../images/happy.jpg')}
          style={{width: null, alignSelf: 'stretch'}}>
    
   <Text style={textStyles.title}>This is the friends page</Text>
   <ButtonCustom onPress={console.log('button pressed')} title='sample button' />
   </Image>

 </View>
)
>>>>>>> e561bbdff496db36fa1a3ca6a8a6af32a5bf821d
