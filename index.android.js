import React, { Component } from 'react';
import * as firebase from "firebase";
// import { Card, Button } from 'react-native-material-design';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  NavigationExperimental,
  Dimensions,
  ScrollView,
  Platform,
  BackAndroid
} from 'react-native';

const {
 CardStack: NavigationCardStack,
 Header: NavigationHeader,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

import Home from './src/pages/Home'
import Register from './src/pages/Register'
import Login from './src/pages/Login'
import Main from './src/pages/Main'
import Profile from './src/pages/Profile'
import MainSwiper from './src/pages/MainSwiper'
import Quests from './src/pages/Quests'
import News from './src/pages/News'
import containerStyles from './src/styles/Container'
import buttonStyles from './src/styles/Button'
import WebView from './src/pages/WebView'
// import { WebView } from 'react-native';


// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyC-4zmR4cVvrezgDh0MxsnJA5awezVe5kk",
//   authDomain: "treedex-8cb38.firebaseapp.com",
//   databaseURL: "https://treedex-8cb38.firebaseio.com",
//   projectId: "treedex-8cb38",
//   storageBucket: "treedex-8cb38.appspot.com",
//   messagingSenderId: "826678556599"
// };
// const firebaseApp = firebase.initializeApp(config);

export default class TreeDexRN extends Component {
    constructor(props) {
      super(props)
      this.state = {
        navState: NavReducer(undefined, {})
      }
      if (Platform.OS === 'android') {
        BackAndroid.addEventListener('hardwareBackPress', () => {
          if (this.state.navState.index > 0) {
            this.handleBackAction()
            return true
          } else {
            return false
          }
        })
      }
    }
    _handleAction (action) {
        const newState = NavReducer(this.state.navState, action);
        if (newState === this.state.navState) {
          return false;
        }
        this.setState({
          navState: newState
        })
        return true;
    }
    handleBackAction() {
       return this._handleAction({ type: 'pop' });
    }
    _renderRoute (key) {
      if (key === 'Home') {
        return <Home
                 onPressLogin={this._handleAction.bind(this,
                 { type: 'push', key: 'Login' })}
                 onPressRegister={this._handleAction.bind(this,
                 { type: 'push', key: 'Register'})} />
      }
      if (key === 'Register') {
        return <Register
                goBack={this.handleBackAction.bind(this)}
                onPress={this._handleAction.bind(this,
                { type: 'push', key: 'Login' })} />
      }
      if (key === 'Login') {
        return <Login
                 goBack={ this.handleBackAction.bind(this)}
                 onPressSignIn={this._handleAction.bind(this,
                 { type: 'push', key: 'MainSwiper' })} />
      }
      if (key === 'MainSwiper') {
        return <MainSwiper
                 onPressQuests={this._handleAction.bind(this,
                 { type: 'push', key: 'Quests' })}
                 onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News'})}
                 onPressProfile={this._handleAction.bind(this,
                 { type: 'push', key: 'Profile'})} />
      }
      if (key === 'Profile') {
        return <Profile
                 onPressQuests={this._handleAction.bind(this,
                 { type: 'push', key: 'Quests' })}
                 onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News'})} />
      }
      if(key === 'Quests'){
        return <Quests />
      }
      if(key === 'News'){
        return <News 
                onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News1' })}
                 onPressSubNews1={this._handleAction.bind(this,
                 { type: 'push', key: 'News1' })}
                 onPressSubNews2={this._handleAction.bind(this,
                 { type: 'push', key: 'News1' })}/>
      }
      if (key == 'News1'){
        return <WebView
          />
  
      }

    }
    _renderScene(props) {
        const ComponentToRender = this._renderRoute(props.scene.route.key)
        return (
          <ScrollView style={containerStyles.scrollView}>
            {ComponentToRender}
          </ScrollView>
        );
    }
    _renderTitleComponent(props) {
      return (
        <NavigationHeader.Title >
          <Text style={containerStyles.navHeaderText}>
          {props.scene.route.key}
          </Text>
        </NavigationHeader.Title>
      );
    }
    _renderBackButton(props) {
      return (
        <TouchableOpacity
          style={buttonStyles.navBackContainer}
          onPress={() => props.onNavigateBack(this.handleBackAction)}>
          <Image
            style={buttonStyles.navBack} source={require('./src/assets/backButton.png')}
          />
        </TouchableOpacity>
      )
    }
    _renderHeader = (sceneProps) => {
        const route = sceneProps.scene.route
        if (route.key == 'Home' || route.key == 'MainSwiper')
          return null // Here we skip header on home and main screen
        // Next, we remove back navigation on second screen (optional)
        const onNavigateBack =
          sceneProps.scene.index > 1 ? this.handleBackAction : undefined
        return (
            <NavigationHeader
                {...sceneProps}
                renderTitleComponent={this._renderTitleComponent}
                onNavigateBack={this.handleBackAction.bind(this)}
                style={containerStyles.navHeader}
                renderLeftComponent={this._renderBackButton}
            />
        )
    }
    render() {
      direction = 'horizontal'
      if (this.state.navState.routes
            [this.state.navState.routes.length - 1]
            .key === 'Profile') {
        direction = 'vertical'
      }
      return (
        <NavigationCardStack
          direction={direction}
          navigationState={this.state.navState}
          onNavigate={this._handleAction.bind(this)}
          renderScene={this._renderScene.bind(this)}
          renderHeader={this._renderHeader} />
      )
    }
}

function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case 'push':
        return NavigationStateUtils.push(currentState, {key: action.key});
      case 'pop':
        return currentState.index > 0 ?
          NavigationStateUtils.pop(currentState) :
            currentState;
          default:
            return currentState;
      }
   }
}
const NavReducer = createReducer({
  index: 0,
  key: 'App',
  routes: [{key: 'Home'}]
})

AppRegistry.registerComponent('TreeDexRN', () => TreeDexRN);