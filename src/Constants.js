import {
  Dimensions,
} from 'react-native';
var {widthWindow} = Dimensions.get('window')
var {height} = Dimensions.get('window')

export default {
  greenboxheight: height*0.65,
  whiteboxheight: height*0.35,
  width: widthWindow
}
