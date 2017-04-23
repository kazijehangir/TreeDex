import {
  StyleSheet,
} from 'react-native';
import Colors from '../Colors'

export default StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 50,
    color: Colors.primaryLight,
    marginTop: 75,
    textAlign: 'center'
  },
  subtitle1: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 16,
    color: Colors.background,
    marginTop: 20
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 20,
    marginTop: 20
  },
  welcomeLabel: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: Colors.primary,
    marginTop: 10,
    textAlign: 'left'
  },
   welcomeLabel1: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 130,
    textAlign: 'left'
  },
  newsHeading: {
    fontFamily: 'sans-serif',
    fontSize: 13,
    color: Colors.primary,
    textAlign: 'left'
  }
})
