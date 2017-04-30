import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import Constants from '../Constants'
/*class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}*/
export default() => (
    <View style={{flex:1, alignItems: 'center'}}>
        <WebView
            source={{uri: 'http://news.nationalgeographic.com/2016/02/160221-plant-science-botany-evolution-mabey-ngbooktalk/'}}
            style={{marginTop: 20, flex: 1, height:Constants.height, width: 320}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            scalesPageToFit={true}
        />
    </View>
)