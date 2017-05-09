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
export default ({ onPressQuests, onPressNews, onPressSettings}) => ( 
  <View>
    <Image
          source = {require('../images/profpic1.jpg')}




          style={{width: null, height:Constants.profileboxheight, alignSelf: 'stretch',justifyContent: 'center',alignItems: 'center' }}>

           
           

          <Image source={require('../images/profilePic.png')}
           style={{width: 150, height: 150}}/> 

          
          
          <View 
                style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >

                <TouchableHighlight onPress={onPressSettings}>
                <Image source={require('../images/edit_icon.png')} style={{width: 50, height: 50}}></Image>
                 </TouchableHighlight>

                <TouchableHighlight onPress={onPressNews}>
                <Text style={styles.titleText}>        Settings</Text>
                </TouchableHighlight>


                
          </View>
          <View 
                style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >

                <TouchableHighlight onPress={onPressNews}>
                <Image source={require('../images/badges_icon.png')} style={{width: 50, height: 50}}></Image>
                 </TouchableHighlight>

                <TouchableHighlight onPress={onPressNews}>
                <Text style={styles.titleText}>        Badges</Text>
                </TouchableHighlight>


                
          </View>
    
    </Image>    

        
  </View>
)

const styles = StyleSheet.create({
 viewA: {
  height: 360,
  width: 360,
  alignItems: 'center', // doesn't work
  justifyContent: 'center', // doesn't work
  flex: 1,
  flexDirection : 'row'
 },
 viewB: {
  flex: .8
 },
baseText: {
    fontFamily: 'Cochin',
  },
titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

 //       <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
    //         <Image source={require('../images/news1.jpg')} style={{flex:0.5, width: undefined, height: 200, marginLeft: 10, marginRight: 5}}/>
    //         <Image source={require('../images/news2.jpg')} style={{flex: 0.5, width: undefined, height: 200, marginLeft: 5, marginRight: 10}}/>

    //     <TouchableHighlight onPress={onPressSubNews1} style={{flex:0.5}}>
    //         <Image source={require('../images/news1.jpg')} style={{flex:0.5, width: undefined, height: 200, marginLeft: 10, marginRight: 5}}></Image>
    //     </TouchableHighlight>
    //     <TouchableHighlight onPress={onPressSubNews2} style={{flex:0.5}}>
    //         <Image source={require('../images/news2.jpg')} style={{flex: 0.5, width: undefined, height: 200, marginLeft: 5, marginRight: 10}}></Image>
    //     </TouchableHighlight>
    // </View>






