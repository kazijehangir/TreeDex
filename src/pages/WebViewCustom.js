import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import Constants from '../Constants'

class WebViewCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  onPageLoad(e) {
    heading = 'Web view'
    // get page source and extract heading
    this.props.setHeaderTitle(heading)
  }
  render() {
    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <WebView
        source={{uri: this.props.url}}
        style={{flex: 1, height:Constants.height, width: Constants.width}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        onLoad={this.onPageLoad.bind(this)}
        />
    </View>
    )
  }
}
export default WebViewCustom
