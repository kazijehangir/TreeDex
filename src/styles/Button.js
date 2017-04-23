import {
  StyleSheet,
} from 'react-native';
import Colors from '../Colors'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    height: 45,
    elevation: 8,
    borderRadius: 50,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: Colors.background
  },
  buttonText: {
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.primary,
  },
  buttonSquare: {
    height: 150,
    width: 150,
    elevation: 8,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: Colors.primary
  },
  buttonSquareText:{
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.background
  }
})
