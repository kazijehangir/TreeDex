import {
  StyleSheet,
} from 'react-native';
import Constants from '../Constants'
import Colors from '../Colors'

export default StyleSheet.create({
  swiper: {
    flex: 1
  },
  scrollView: {
    height:50,
    backgroundColor: Colors.background,
  },
  friendsList: {
    flex: 1,
    padding: 12,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.primary,
  },
  sectionHeader: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  searchBar: {
      flex: 1,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#C1C1C1',
  },
  footer: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  whitebox: {
    height: Constants.whiteboxheight - 24,
    flex: 1,
    backgroundColor: Colors.background
  },
  logoWrapper:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  greenbox: {
    // height: Constants.greenboxheight,
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    backgroundColor: Colors.primary
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  navHeader: {
    backgroundColor: Colors.primary
  },
  navHeaderText: {
    color: 'white'
  },
  ExploreImage: {
    height: Constants.height/2,
    width: Constants.width/2,
    resizeMode: 'contain'
  }
})
