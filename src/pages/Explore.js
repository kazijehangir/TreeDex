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

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'
import Button from 'react-native-button';
import Colors from '../Colors'
import ButtonStyles from '../styles/Button'

import Constants from '../Constants'




const Header = (props) => (
  <View style={containerStyles.searchBar}>
    <TextInput
      style={textStyles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

class Explore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    this.props.setHeaderTitle('Explore')
  }
  openWebUrl(url) {
    this.props.setWebUrl(url)
    this.props.openWebView()
  }
  render() {
    return (
    <ScrollView style={{height: Constants.height - 50}}>
      <View style={containerStyles.searchBar}>
        <TextInput
          style={textStyles.input}
          placeholder="Search..."
          onChangeText={(text) => console.log('searching for ', text)}
          />
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
        <Button
          onPress={(ev) => this.openWebUrl("https://www.pinterest.com/pin/163325923966197603/")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/gulenishtar.jpg?alt=media&token=0d5d07c0-c396-4c04-88df-a8d79a72ca38'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Polyalthia_longifolia")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/ultaashok.jpg?alt=media&token=a3e53e8e-f8c0-49cf-903a-2bfaa870a8f9'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Murraya_paniculata")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/marwa.jpg?alt=media&token=41685c63-20d0-49e4-a26c-5dc3da11c281'}}
            />
        </Button>
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Margaritaria_discoidea")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/margarita.jpg?alt=media&token=18d5648c-e35c-45ef-834d-470d7a61d1aa'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Phoenix_(plant)")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/fidexpalm.jpg?alt=media&token=97b04f96-5644-4bf6-9698-9e095ba7ca04'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/FayLily")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/daylily.jpg?alt=media&token=9fbdd55f-ea2f-4937-b040-5c00d7f0415c'}}
            />
        </Button>
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Hyphaene_coriacea/")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/lal_tehna.JPG?alt=media&token=322ab2e0-3b4d-455b-bc33-24365a576511'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Rose")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/rose.jpg?alt=media&token=b8aff88e-23f8-419c-b26f-cdf5e036ef05'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Magnolia")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/magnolia.jpg?alt=media&token=8bb12850-6d5d-4920-899d-a19478d10b02'}}
            />
        </Button>
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Cactus")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/cactus.jpg?alt=media&token=54b658ed-435a-4877-88db-b6f25c6e889f'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("http://www.mango.org/en/About-Mangos/Meet-a-Mango-Tree")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/mangotree.JPG?alt=media&token=75bf0791-f2bd-4d58-8fd6-4c5d20cd9fca'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Ficus_lyrata")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/Ficus_lyrata.jpg?alt=media&token=d6863d1e-ffee-4bde-95f1-acfa746f8379'}}
            />
        </Button>
      </View>
      <View style ={{flex:1,flexDirection:'row'}}>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Callistemon")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/bottle_brush.jpg?alt=media&token=0502961d-1e4b-4baf-8dd7-7a0fd9d43a83'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Dalbergia_sissoo")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/sheeshum.jpg?alt=media&token=83f79f5a-5f99-4b00-a5b2-e1438360498b'}}
            />
        </Button>
        <Button
          conditions
          onPress={(ev) => this.openWebUrl("https://en.wikipedia.org/wiki/Morus_nigra")}
          style={{flex:1}}
          >
          <Image
            style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/treedex-8cb38.appspot.com/o/toot_shaitoot.jpg?alt=media&token=f002624b-8ffd-48ed-b8bf-a60901ed9017'}}
            />
        </Button>
      </View>
    </ScrollView>
  )
  }
}
export default Explore
