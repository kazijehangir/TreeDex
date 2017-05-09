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
    this.titles = ['Friends', 'Scan a Tree!', 'Other...']
  }
  componentWillMount() {
    this.props.setHeaderTitle('Scan a Tree!')
  }
  render() {
    return (
      <Swiper style={containerStyles.swiper}
          onMomentumScrollEnd={(e, state, context) => {
            this.props.setHeaderTitle(this.titles[state.index])
          }}
          showsButtons={true} loop={false} index={1}>
          <FriendsPage
            setHeaderTitle={this.props.setHeaderTitle} />
          <MainPage
           setHeaderTitle={this.props.setHeaderTitle}
           user={this.props.user}
           setWebUrl={this.props.setWebUrl}
           openWebView={this.props.openWebView}
           onPressSignout={this.props.onPressSignout}
           onPressSettings={this.props.onPressSettings}
           onPressAbout={this.props.onPressAbout}
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
