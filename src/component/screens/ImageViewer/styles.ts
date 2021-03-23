import { StyleSheet } from 'react-native'

import { windowWidth, windowHeight } from '~/lib/style/styles'
import { componentBaseColor } from '~/utils/colors'

export default StyleSheet.create({
	container: {
		backgroundColor: componentBaseColor,
		flex: 1
	},
	imageContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: windowWidth,
		height: windowHeight
	}
})
