import {
  Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window')

export default {
  height: height - 24,
  greenboxheight: height*0.65,
  whiteboxheight: height*0.35,
  width: width
}
