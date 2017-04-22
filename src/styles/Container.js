import {
  StyleSheet,
} from 'react-native';
import Constants from '../Constants'

export default StyleSheet.create({
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
    height: Constants.whiteboxheight,
    backgroundColor: '#F5FCFF'
  },
  logoWrapper:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  greenbox: {
    height: Constants.greenboxheight,
    alignSelf: 'stretch',
    width: null,
    backgroundColor: '#00796b'
  },
})
