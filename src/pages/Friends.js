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
  Platform,
  BackAndroid,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import Constants from '../Constants'
import buttonStyles from '../styles/Button.js'
import Colors from '../Colors'

let friendsArray = []


const Row = (props) => (
  <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:Colors.background}}>
    <View style={containerStyles.friendsList}>
      <Image source={require('../images/profilePic.png')} style={containerStyles.photo} />
      <Text style={textStyles.friends}>
        {props.name}
      </Text>
    </View>
    <TouchableHighlight
      underlayColor={Colors.primaryLight}
      style={{alignItems:'center',flex:0.4,padding:5,margin:8,borderRadius:15,backgroundColor: Colors.primary}}>
        <Text
          style={{textAlign: 'center',
              padding: 8,
              fontWeight: '200',
              fontSize: 15,
              color: '#FFFFFF',}}>
              Add Friend
        </Text>
    </TouchableHighlight>
  </View>
);

const Header = (props) => (
  <View style={containerStyles.searchBar}>
    <TextInput
      style={textStyles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

const Footer = (props) => (
  <View style={containerStyles.footer}>
    <TouchableOpacity
      style={{borderColor: Colors.primary,
          borderWidth: StyleSheet.hairlineWidth,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
            }}
       onPress={() => console.log('load more')}
     >
      <Text style={{color:Colors.primary}}>Load More</Text>
    </TouchableOpacity>
  </View>
);

class Friends extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(friendsArray),
    };
    console.log('friends',friendsArray)

  }
  componentWillMount() {
    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      console.log(user_data)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      friendsArray = user_data
      this.setState({
        dataSource: ds.cloneWithRows(user_data),
        loaded: true
      })
    })
  }
  render() {
    return (
      <View style={containerStyles.Container}>
        <ListView
          Style={containerStyles.friendsList}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={containerStyles.separator} />}
          renderHeader={() => <Header />}
          renderFooter={() => <Footer />}
        />
      </View>
    );
  }
}

export default Friends;
