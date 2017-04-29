import {
  StyleSheet,
} from 'react-native';
import Constants from '../Constants'
import Colors from '../Colors'

export default StyleSheet.create({
  swiper: {
  },
  scrollView: {
    height:50,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  whitebox: {
    height: Constants.whiteboxheight,
    backgroundColor: Colors.background
  },
  logoWrapper:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  greenbox: {
    height: Constants.greenboxheight,
    alignSelf: 'stretch',
    width: null,
    backgroundColor: Colors.primary
  },
})
