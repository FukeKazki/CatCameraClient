import { StyleSheet } from 'react-native'

import { windowWidth } from '~/lib/style/styles'

export default StyleSheet.create({
	container: {
		width: Math.floor(windowWidth / 3),
		height: Math.floor(windowWidth / 3)
	}
})