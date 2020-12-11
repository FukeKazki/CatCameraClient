import { StyleSheet } from 'react-native'
import { componentBaseColor } from '~/utils/colors'

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
		right: '50%',
		transform: [
			{ translateX: 70 }
		]
	}
})