import {
  Dimensions,

} from 'react-native';
import * as firebase from "firebase";

var {height, width} = Dimensions.get('window')

//Mahnoor's Initialization
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-4zmR4cVvrezgDh0MxsnJA5awezVe5kk",
  authDomain: "treedex-8cb38.firebaseapp.com",
  databaseURL: "https://treedex-8cb38.firebaseio.com",
  projectId: "treedex-8cb38",
  storageBucket: "treedex-8cb38.appspot.com",
  messagingSenderId: "826678556599"
};
const firebaseApp = firebase.initializeApp(config);

export default {
  firebase: firebaseApp,
  height: height - 24,
  greenboxheight: height*0.65,
  whiteboxheight: height*0.35,
  width: width
}
