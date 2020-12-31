import { StyleSheet } from 'react-native'

import { windowWidth } from '~/lib/style/styles'
import { componentBaseColor, inactiveColor } from '~/utils/colors'

export default StyleSheet.create({
	container: {
		backgroundColor: componentBaseColor,
		paddingLeft: 20
	},
	closeIcon: {
		fontSize: windowWidth / 10,
		color: inactiveColor
	},
	downloadIcon: {
		fontSize: windowWidth / 12,
		color: inactiveColor,
		marginRight: 4
	}
})
