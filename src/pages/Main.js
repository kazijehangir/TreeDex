import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';
import {
  Text,
  TextInput,
  Image,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import Camera from 'react-native-camera'

import Constants from '../Constants'
import textStyles from '../styles/Text'
import containerStyles from '../styles/Container'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'

let state = {
  cameraType: Camera.constants.Type.back
}
const _onBarCodeRead = (e) => {
  Alert.alert(
    'Barcode Scanned!',
    "Type: " + e.type + "\nData: " + e.data
  )
}

export default ({ onPressQuests, onPressNews, onPressProfile}) => (
  <Camera
    ref={(cam) => {
      this.camera = cam;
    }}
    style={containerStyles.camera}
    onBarCodeRead={_onBarCodeRead}
    aspect={Camera.constants.Aspect.fill}
    type={state.cameraType}
  />
)
// export default ({ onPressQuests, onPressNews, onPressProfile}) => (
//   <View>
//     <Card>
//       <Card.Media
//         height={200}
//         image={<Image source={require('../images/plant.jpg')} style={{width: Constants.widthWindow}}/>}
//         overlay
//       />
//       <Card.Body>
//         <Text style={textStyles.welcomeLabel}>There is Such a Thing as Plant Intelligence</Text>
//         <Text>Plants are capable of solving problems and learning from past experiences</Text>
//       </Card.Body>
//       <Card.Actions position="right">
//         <Button value="NORMAL FLAT" text="READ MORE" primary="paperTeal" />
//
//       </Card.Actions>
//     </Card>
//     <ButtonCustom onPress={onPressProfile} title='Profile' backgroundColor='#F5FCFF' />
//
//   </View>
// )
