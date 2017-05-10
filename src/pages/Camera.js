'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import { Icon } from 'react-native-material-design';
import Constants from '../Constants'
class UploadPhoto extends Component {
    constructor(props) {
    super(props)
    this.state = {}
    // console.log('profile constructor')
  }
    componentWillMount() {
    this.props.setHeaderTitle('Take a picture')
  }
  render() {
    return (
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
    );
  }

  async takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: -1,
    width: Constants.width,
    height: Constants.height - 70,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    marginTop: 20
  }
});

export default UploadPhoto
