import React, { Component } from 'react';
// import { Card, Button } from 'react-native-material-design';
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
import containerStyles from './src/styles/Container'

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
                 { type: 'push', key: 'Main' })} />
      }
      if (key === 'Main') {
        return <Main
                 onPressQuests={this._handleAction.bind(this,
                 { type: 'push', key: 'Quests' })}
                 onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News'})} />
      }
      if (key === 'Main') {
        return <Main
                 onPressProfile={this._handleAction.bind(this,
                 { type: 'push' key: 'Profile'})} />
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
        <NavigationHeader.Title>
          {props.scene.route.key}
        </NavigationHeader.Title>
      );
    }
    _renderHeader = (sceneProps) => {
        // <Header
        //   style={styles.navHeader}
        //   backnavigate={this.handleBackAction}
        //   {...sceneProps}
        // />
        const route = sceneProps.scene.route
        if (route.key == 'Home' || route.key == 'Main')
          return null // Here we skip header on home and main screen
        // Next, we remove back navigation on second screen (optional)
        const onNavigateBack =
          sceneProps.scene.index > 1 ? this.handleBackAction : undefined
        return (
            <NavigationHeader
                {...sceneProps}
                renderTitleComponent={this._renderTitleComponent}
                onNavigateBack={this._handleBackAction}
            />
        // TODO: Jehangir: fix handleBackAction functionality
        )
    }
    render() {
      return (
        <NavigationCardStack
          navigationState={this.state.navState}
          onNavigate={this._handleAction.bind(this)}
          renderScene={this._renderScene.bind(this)}
          renderHeader={this._renderHeader} />
      )
    }
}
class Header extends Component {
  _back = () => {
    this.props.backnavigate();
  }
  _renderTitleComponent = (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
  render() {
      const route = this.props.scene.route
      if (route.key == 'Home' || route.key == 'Main')
        return null // Here we skip header on home and main screen
      // Next, we remove back navigation on second screen (optional)
      const onNavigateBack =
        this.props.scene.index > 1 ? this._back : undefined
      return (
          <NavigationHeader
              {...this.props}
              renderTitleComponent={this._renderTitleComponent}
              onNavigateBack={this._back}
          />
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
