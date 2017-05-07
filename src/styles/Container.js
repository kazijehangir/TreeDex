import {
  StyleSheet,
} from 'react-native';
import Constants from '../Constants'
import Colors from '../Colors'

export default StyleSheet.create({
  Container : {
    height: Constants.height
  },
  swiper: {
    height: Constants.height,
    flex: -1
  },
   activityIndicator: {
      flex: 1,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   },
  scrollView: {
    height:50,
    backgroundColor: Colors.background,
  },
  friendsList: {
    flex: 1,
    // height: Constants.height,
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
    flexDirection: 'column'
  },
  whitebox: {
    height: Constants.height * 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  greenbox: {
    height: Constants.height * 0.65,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: Colors.primary
  },
  camera: {
    height: Constants.height,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "transparent",
  },
  navHeader: {
    backgroundColor: Colors.primary
  },
  navHeaderText: {
    color: 'white'
  },
  explore: {
    height: Constants.height
  },
  ExploreImage: {
    height: Constants.height/2,
    width: Constants.width/2,
    resizeMode: 'contain'
  }
})
