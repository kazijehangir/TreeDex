import React, { Component } from 'react';

import Swiper from 'react-native-swiper';
import FriendsPage from './Friends'
import ExplorePage from './Explore'
import MainPage from './Main'
import News from './News'

import containerStyles from '../styles/Container'
import Constants from '../Constants'

export default ({ user, onPressSignout, onPressQuests, onPressNews, onPressProfile}) => (
    <Swiper style={containerStyles.swiper}
        showsButtons={true} loop={false} index={1}>
        <FriendsPage/>
        <MainPage
         user={user}
         signout={onPressSignout}
         onPressProfile={onPressProfile} />
        <ExplorePage
            onPressNews={onPressNews}
            onPressQuests={onPressQuests}
        />
    </Swiper>

)
