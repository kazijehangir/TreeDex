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
  }
})
