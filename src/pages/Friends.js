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
  TouchableOpacity
} from 'react-native';

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import Constants from '../Constants'
import buttonStyles from '../styles/Button.js'

const Row = (props) => (
  <View style={containerStyles.friendsList}>
    <Image source={require('../images/profilePic.png')} style={containerStyles.photo} />
    <Text style={textStyles.friends}>
      {props.name}
    </Text>
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
    <TouchableOpacity style={buttonStyles.footerButton} onPress={() => console.log('load more')}>
      <Text style={textStyles.footerText}>Load More</Text>
    </TouchableOpacity>
  </View>
);

class Friends extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{name:'Ali'}, {name:'Wali'}]),
    };
  }

  render() {
    return (
      <View style={containerStyles.Container}>
        <Text style={textStyles.header}>Friends</Text>
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
