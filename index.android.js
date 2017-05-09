import React, { Component } from 'react';
// import * as firebase from "firebase";
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
  BackAndroid,
  AsyncStorage
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
import Explore from './src/pages/Explore'
import News from './src/pages/News'
import Settings from './src/pages/Settings'
import ChangeName from './src/pages/ChangeName'
import ChangePass from './src/pages/ChangePass'
import containerStyles from './src/styles/Container'
import buttonStyles from './src/styles/Button'
import WebView from './src/pages/WebView'
import Constants from './src/Constants'
// import { WebView } from 'react-native';


export default class TreeDexRN extends Component {
    constructor(props) {
      super(props)
      this.state = {
        navState: NavReducer(undefined, {}),
        headerTitle: 'TreeDex'
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
    componentDidMount(){
      // Constants.firebaseApp.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     // User is signed in.
      //     // alert(JSON.stringify(user) + " signed in.")
      //     this.setState({user: user})
      //     this._handleAction({ type: 'push', key: 'MainSwiper' })
      //     let newState = Object.assign({}, this.state.navState)
      //     newState.routes = newState.routes.slice(-1)
      //     newState.index = 0
      //     this.setState({navState: newState})
      //   } else {
      //     // alert("No User signed in.")
      //
      //   }
      // })
    }
    _setHeaderTitle(title) {
      // alert("Setting title: " + title + "\n this.state.headerTitle: " + JSON.stringify(this.state.headerTitle))
      if (this.state.headerTitle != title) {
        if (!this.state.settingState) {
          this.setState({settingState: true}, () => {
            this.setState({headerTitle: title}, () => {
              this.setState({settingState: false})
            })
          })
        }
      }
    }
    async _signOut() {
      // alert("Signing out")
      try {
        prom = await Constants.firebase.auth().signOut()
        this._handleAction({ type: 'push', key: 'Home' })
        let newState = Object.assign({}, this.state.navState)
        newState.routes = newState.routes.slice(-1)
        newState.index = 0
        this.setState({navState: newState})
      } catch (error) {
        alert("Error Signing out!")
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
                 setHeaderTitle={this._setHeaderTitle.bind(this)}
                 onPressLogin={this._handleAction.bind(this,
                 { type: 'push', key: 'Login' })}
                 onPressRegister={this._handleAction.bind(this,
                 { type: 'push', key: 'Register'})} />
      }
      if (key === 'Register') {
        return <Register
                setHeaderTitle={this._setHeaderTitle.bind(this)}
                onSuccessRegister={this._handleAction.bind(this,
                {type: 'push', key: 'MainSwiper'})}
                goBack={this.handleBackAction.bind(this)}
                onPress={this._handleAction.bind(this,
                { type: 'push', key: 'Login' })} />
      }
      if (key === 'Login') {
        return <Login
                setHeaderTitle={this._setHeaderTitle.bind(this)}
                onSuccess={this._handleAction.bind(this,
                { type: 'push', key: 'MainSwiper' })} />
      }
      if (key === 'MainSwiper') {
        return <MainSwiper
                 user={this.state.user}
                 setHeaderTitle={this._setHeaderTitle.bind(this)}
                 onPressSignout={this._signOut.bind(this)}
                 onPressExplore={this._handleAction.bind(this,
                 { type: 'push', key: 'Explore' })}
                 onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News'})}
                 onPressProfile={this._handleAction.bind(this,
                 { type: 'push', key: 'Profile'})}
                 onPressSettings={this._handleAction.bind(this,
                 { type: 'push', key: 'Settings' })} />
      }
      if (key === 'Profile') {
        return <Profile
                 setHeaderTitle={this._setHeaderTitle.bind(this)}
                 onPressExplore={this._handleAction.bind(this,
                 { type: 'push', key: 'Explore' })}
                 onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News'})}
                 onPressSettings={this._handleAction.bind(this,
                 { type: 'push', key: 'Settings' })} />
      }
      if(key === 'Explore'){
        return <Explore
                  setHeaderTitle={this._setHeaderTitle.bind(this)}/>
      }
      if(key === 'News'){
        return <News
                setHeaderTitle={this._setHeaderTitle.bind(this)}
                onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News1' })}
                 onPressSubNews1={this._handleAction.bind(this,
                 { type: 'push', key: 'News1' })}
                 onPressSubNews2={this._handleAction.bind(this,
                 { type: 'push', key: 'News1' })}/>
      }
      if (key == 'News1'){
        return <WebView
                  setHeaderTitle={this._setHeaderTitle.bind(this)}/>

      }

      if (key == 'ChangeName'){
        return <ChangeName
          setHeaderTitle={this._setHeaderTitle.bind(this)}/>

      }

      if (key == 'ChangePass'){
        return <ChangePass
          setHeaderTitle={this._setHeaderTitle.bind(this)}/>

      }

      if (key == 'Settings'){
        return <Settings
                 setHeaderTitle={this._setHeaderTitle.bind(this)}
                 onPressName={this._handleAction.bind(this,
                 { type: 'push', key: 'ChangeName' })}
                 onPressPass={this._handleAction.bind(this,
                 { type: 'push', key: 'ChangePass' })} />

      }


    }
    _renderScene(props) {
        const ComponentToRender = this._renderRoute(props.scene.route.key)
        return (
          <View style={containerStyles.Container}>
            {ComponentToRender}
          </View>
        );
    }
    _renderTitleComponent(props) {
      // alert(JSON.stringify(this.state))
      if (!this.state.headerTitle) {
        this._setHeaderTitle(props.scene.route.key)
      }
      return (
        <NavigationHeader.Title >
          <Text style={containerStyles.navHeaderText}>
          {this.state.headerTitle}
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
        if (route.key == 'Home')
          return null // Here we skip header on home and main screen
        // Next, we remove back navigation on second screen (optional)
        let onNavigateBack = this.handleBackAction
        if (route.key == 'Home' || route.key == 'MainSwiper')
          onNavigateBack = undefined
          // sceneProps.scene.index > 1 ? this.handleBackAction : undefined
        return (
            <NavigationHeader
                {...sceneProps}
                renderTitleComponent={this._renderTitleComponent.bind(this)}
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

const createReducer = (initialState) => {
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
