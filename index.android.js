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
  BackAndroid
} from 'react-native';
var {height} = Dimensions.get('window')
var greenboxheight = height*0.65
var whiteboxheight = height*0.35
const {
 CardStack: NavigationCardStack,
 Header: NavigationHeader,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

const emailChangeHandler = ev => {
  console.log(ev.nativeEvent.text)
}
const passwordChangeHandler = ev => {
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
 <View style={styles.containerLogin}>
    <View style={styles.whitebox}>
      <View style={styles.logoWrapper}>
        <Image
          source = {require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')}
          style={{width:70, height:70, marginTop: 70}}
        />
        <Text style={styles.title} >TreeDex</Text>
      </View>
    </View>
    <View style={styles.greenbox}>
      <Text style={styles.subtitle1}>TreeDex is a
        complete repository for horticulture information.</Text>
      <Button onPress={onPressLogin} title='LOG IN' />
      <Button onPress={onPressRegister} title='REGISTER' />    
    </View>
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
   <Text style={styles.subtitle1} >Welcome back! Please log-in below.</Text>
   <TextInput placeholder='Email'
    style={styles.emailInput}
    onChange={emailChangeHandler}></TextInput>
   <TextInput placeholder='Password'
    style={styles.passwordInput}
    secureTextEntry={true}
    onChange={passwordChangeHandler}></TextInput>
   <Button title='Sign In' onPress={onPressSignIn} />
 </View>
)

const Main = ({ onPressQuests, onPressNews}) => (
 <View style={styles.container}>
   <Text style={styles.title} >TreeDex</Text>
   <Text style={styles.subtitle}>This is the main page for the application.</Text>
   <Button onPress={onPressQuests} title='Quests' />
   <Button onPress={onPressNews} title='News' />
   <Text style={styles.subtitle}>
       Choose a category or swipe to your destination.</Text>

 </View>
)

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
    backgroundColor: '#F5FCFF',
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  whitebox: {
    height: whiteboxheight,
    backgroundColor: '#F5FCFF'
  },
  logoWrapper:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  greenbox: {
    height: greenboxheight,
    backgroundColor: '#00796b'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 40,
    color: '#004D40',
    marginTop: 75,
    textAlign: 'center'
  },
    subtitle1: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 16,
    color: '#F5FCFF',
    marginTop: 20
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20
  },
  welcomeLabel: {
    fontFamily: 'Roboto',
    fontSize: 33,
    color: '#00796b',
    marginTop: 40,
    textAlign: 'left'
  },
  button: {
    height: 40,
    elevation: 4,
    borderRadius: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#F5FCFF'
  },
  buttonText: {
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    fontSize: 16,
    color: '#00796b',
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
