import {
  StyleSheet,
  Platform
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
    backgroundColor: Colors.background,
    alignItems:'center'
  },
  profileButton: {
    height: 45,
    width:45,
    marginTop:8,
    borderRadius: 22.5,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  profileButton: {
    height: 45,
    width:45,
    marginTop:8,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonInverted: {
    height: 45,
    elevation: 8,
    borderRadius: 50,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: Colors.primary
  },
  buttonText: {
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.primary,
  },
  buttonTextInverted: {
    textAlign: 'center',
    padding: 8,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.background,
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
  buttonRectangle: {
    height: 50,
    width: 200,
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
  },
  navBack:{
    height:24,
    width:24,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain'
  },
  navBackContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    borderColor: Colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  newsButton :{
    padding: 3,
    overflow: 'hidden',
    borderRadius: 4,
    borderWidth: 1,
    borderColor:Colors.primary,
    borderTopColor: Colors.primary
  },
})
