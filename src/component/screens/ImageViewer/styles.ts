import { StyleSheet } from 'react-native'

import { windowWidth, windowHeight } from '~/lib/style/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: '#000000CD',
    overflow: 'hidden',
    height: windowHeight
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
		width: windowWidth,
		height: windowHeight
  },
  closeIcon: {
    marginTop: windowWidth / 30,
    marginLeft: windowWidth / 30,
    fontSize: windowWidth / 10,
    color: '#FFFFFF'
  }
})
