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

export default () => (
  <ScrollView style={{height: Constants.height}}>
    <View style ={{flex:1,flexDirection:'row'}}>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image

          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image

          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image

          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
    </View>
    <View style ={{flex:1,flexDirection:'row'}}>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
    </View>
    <View style ={{flex:1,flexDirection:'row'}}>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
    </View>
    <View style ={{flex:1,flexDirection:'row'}}>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
    </View>
    <View style ={{flex:1,flexDirection:'row'}}>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
    </View>
    <View style ={{flex:1,flexDirection:'row'}}>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
      <Button
        onPress={()=>{}}
        style={{flex:1}}
      >
        <Image
          style={{height:100,width:(Constants.width/3),borderWidth:2,borderColor:'black',borderWidth:1}}
          source={require('../images/plant.jpg')}
        />
      </Button>
    </View>
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
        <Text style={{color:Colors.primary,fontWeight:'500'}}>Load More</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>
)
