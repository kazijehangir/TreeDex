import {
  StyleSheet,
} from 'react-native';
import Colors from '../Colors'

// const {w,h} = Dimensions.get("window");
export default StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 50,
    color: Colors.primary,
    marginTop: 75,
    textAlign: 'center',
    backgroundColor: Colors.background
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
  header:{
    fontFamily: 'Roboto',
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: 'left',
    position:'relative',
    height: 50,
    padding: 5,
    backgroundColor: Colors.primary
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
  },
  friends: {
    marginLeft: 12,
    fontSize: 16,
    color: 'black'
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  footerText: {
    color: Colors.primary,
  },
  sectionHeaderText: {
    fontSize: 13,
  },
})
