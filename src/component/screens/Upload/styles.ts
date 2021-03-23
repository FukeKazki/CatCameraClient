import { StyleSheet } from 'react-native'
import { componentBaseColor, activeColor } from '~/utils/colors'

export default StyleSheet.create({
	container: {
		backgroundColor: componentBaseColor,
		position: 'relative',
		flex: 1
	},
	fabButton: {
		position: 'absolute',
		bottom: 50,
		right: 50
	},
	learningButton: {
		position: 'absolute',
		bottom: 50,
		right: '52%',
		backgroundColor: activeColor,
		transform: [
			{ translateX: 70 }
		]
	}
})