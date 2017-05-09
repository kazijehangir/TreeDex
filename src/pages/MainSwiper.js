import React, { Component } from 'react';

import Swiper from 'react-native-swiper';
import FriendsPage from './Friends'
import SecondaryNavigation from './SecondaryNavigation'
import MainPage from './Main'
import News from './News'

import containerStyles from '../styles/Container'
import Constants from '../Constants'

export default ({ user, onPressSignout, onPressExplore, onPressNews, onPressProfile,onPressSettings}) => (
    <Swiper style={containerStyles.swiper}
        showsButtons={true} loop={false} index={1}>
        <FriendsPage/>
        <MainPage
         user={user}
         onPressSignout={onPressSignout}
         onPressSettings={onPressSettings}
         onPressProfile={onPressProfile} />
        <SecondaryNavigation
            onPressNews={onPressNews}
            onPressExplore={onPressExplore}
            onPressSettings={onPressSettings}
        />
    </Swiper>

)
