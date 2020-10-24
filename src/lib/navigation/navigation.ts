import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Daily from '~/component/screens/Daily'
import ImageViewer from '~/component/organisms/ImageViewer'

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
const AppNavigator = createStackNavigator(
  {
    Daily: {
      screen: DailyNavigator
    },
    // ここに新しいナビゲーションを追加する
  },
  {
    initialRouteName: 'Daily',
  }
)

export default createAppContainer(AppNavigator)
