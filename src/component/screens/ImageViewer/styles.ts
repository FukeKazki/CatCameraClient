import { StyleSheet } from 'react-native'

import { windowWidth, windowHeight } from '~/lib/style/styles'

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
    position: 'absolute',
    top: windowWidth / 30,
    left: windowWidth / 30,
    fontSize: windowWidth / 10,
    color: '#FFFFFF88'
  }
})
