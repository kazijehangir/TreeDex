import React, { Component } from 'react';

import Swiper from 'react-native-swiper';
import FriendsPage from './Friends'
import SecondaryNavigation from './SecondaryNavigation'
import MainPage from './Main'
import News from './News'

import containerStyles from '../styles/Container'
import Constants from '../Constants'

class MainSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    this.props.setHeaderTitle('Scan a Tree!')
  }
  render() {
    return (
      <Swiper style={containerStyles.swiper}
          onSwipe={(e) => alert(JSON.stringify(e))}
          showsButtons={true} loop={false} index={1}>
          <FriendsPage
            setHeaderTitle={this.props.setHeaderTitle} />
          <MainPage
           setHeaderTitle={this.props.setHeaderTitle}
           user={this.props.user}
           onPressSignout={this.props.onPressSignout}
           onPressSettings={this.props.onPressSettings}
           onPressProfile={this.props.onPressProfile} />
          <SecondaryNavigation
              setHeaderTitle={this.props.setHeaderTitle}
              onPressNews={this.props.onPressNews}
              onPressExplore={this.props.onPressExplore}
              onPressSettings={this.props.onPressSettings}
          />
      </Swiper>
    )
  }
}
export default MainSwiper
