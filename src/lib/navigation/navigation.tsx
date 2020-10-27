import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons'

import Daily from '~/component/screens/Daily'
import ImageViewer from '~/component/screens/ImageViewer'

// Daily内部で使用する子ナビゲーター
const DailyNavigator = createStackNavigator(
  {
    Daily: {
      screen: Daily,
    },
    ImageViewer: {
      screen: ImageViewer
    }
  },
  {
    initialRouteName: 'Daily',
    mode: 'modal',
    headerMode: 'none'
  }
)

// 全体で使用する親ナビゲーター
// const AppNavigator = createMaterialTopTabNavigator(
// const AppNavigator = createBottomTabNavigator(
const AppNavigator = createMaterialBottomTabNavigator(
  {
    Daily: {
      screen: DailyNavigator,
      navigationOptions: {
        tabBarLabel: 'フォト',
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialIcons size={25} name='photo' style={{ color: tintColor }} />
        )
      },
    },
    Favorite: {
      screen: DailyNavigator,
      navigationOptions: {
        tabBarLabel: 'お気に入り',
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialCommunityIcons size={25} name='heart' style={{ color: tintColor }} />
        )
      },
    }
    // ここに新しいナビゲーションを追加する
  },
  {
    initialRouteName: 'Daily',
    activeColor: '#89B1FC',
    inactiveColor: '#93979A',
    barStyle: { backgroundColor: '#2D3033' },
  }
)

export default createAppContainer(AppNavigator)
