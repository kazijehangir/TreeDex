import React, { Component } from 'react';

import Swiper from 'react-native-swiper';
import FriendsPage from './Friends'
import ExplorePage from './Explore'
import MainPage from './Main'

import containerStyles from '../styles/Container'

export default ({ onPressQuests, onPressNews}) => (
    <Swiper style={containerStyles.swiper}
        showsButtons={true} loop={false} index={1}>
        <FriendsPage/>
        <MainPage
          onPressQuests={onPressQuests}
          onPressNews={onPressNews} />
        <ExplorePage/>
    </Swiper>

)
