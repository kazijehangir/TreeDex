import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  NavigationExperimental,
  ScrollView
} from 'react-native';
const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

const emailChangeHandler = ev => {
  console.log(ev.nativeEvent.text)
}
const Button = ({title, onPress}) => (
  <TouchableHighlight
    underlayColor='#EFEFEF'
    onPress={onPress}
    style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>
)
const Home = ({ onPressRegister, onPressLogin}) => (
 <View style={styles.container}>
   <Text style={styles.title} >TreeDex</Text>
   <Text style={styles.subtitle}>TreeDex is a
       complete repository for horticulture information.</Text>
   <Button onPress={onPressLogin} title='Login' />
   <Button onPress={onPressRegister} title='Register' />
 </View>
)
const Register = ({ onPress, goBack }) => (
 <View style={styles.container}>
   <Text style={styles.title}>Register as a new user</Text>
   <Button onPress={onPress} title='Or go to Login' />
   <Button onPress={goBack} title='Go Back' />
 </View>
)
const Login = ({ goBack, onPressSignIn }) => (
 <View style={styles.container}>
   <Button title='Go Back' onPress={goBack} />
   <Text style={styles.subtitle} >Welcome back! Please log-in below.</Text>
   <TextInput placeholder='Email'
    style={styles.emailInput}
    onChange={emailChangeHandler}></TextInput>
   <TextInput placeholder='Password'
    style={styles.passwordInput}
    secureTextEntry={true}
    onChange={emailChangeHandler}></TextInput>
   <Button title='Sign In' onPress={onPressSignIn} />
 </View>
)

const Main = ({ onPressQuests, onPressNews}) => (
 <View style={styles.container}>
   <Text style={styles.title} >TreeDex</Text>
   <Text style={styles.subtitle}>This is the main page for the application.</Text>
   <Button onPress={onPressQuests} title='Quests' />
   <Button onPress={onPressNews} title='News' />
 </View>
)

export default class TreeDexRN extends Component {
    constructor(props) {
      super(props)
      this.state = {
        navState: NavReducer(undefined, {})
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
        return <Home
                 onPressQuests={this._handleAction.bind(this,
                 { type: 'push', key: 'Quests' })}
                 onPressNews={this._handleAction.bind(this,
                 { type: 'push', key: 'News'})} />
      }
    }
    _renderScene(props) {
        const ComponentToRender = this._renderRoute(props.scene.route.key)
        return (
          <ScrollView style={styles.scrollView}>
            {ComponentToRender}
          </ScrollView>
        );
    }
    render() {
      return (
        <NavigationCardStack
          navigationState={this.state.navState}
          onNavigate={this._handleAction.bind(this)}
          renderScene={this._renderScene.bind(this)} />
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
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 40,
    marginTop: 100,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#00796b'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  emailInput: {
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center'
  },
  passwordInput: {
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center'
  }

})
AppRegistry.registerComponent('TreeDexRN', () => TreeDexRN);
