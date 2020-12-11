import { StyleSheet } from 'react-native'
import { activeImageColor, componentBaseColor } from '~/utils/colors'

export default StyleSheet.create({
	container: {
		backgroundColor: componentBaseColor,
		flex: 1
	},
	activeImage: {
		borderColor: activeImageColor
	}
})