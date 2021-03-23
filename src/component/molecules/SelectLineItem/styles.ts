import { StyleSheet } from 'react-native'
import { componentBaseColor, inactiveColor } from '~/utils/colors'

export default StyleSheet.create({
	container: {
		backgroundColor: componentBaseColor,
		borderBottomColor: inactiveColor,
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 2
	},
	titleContainer: {
		justifyContent: 'center',
		flexGrow: 1
	},
	imageContainer: {
		flexDirection: 'row',
		flexGrow: 3,
		flexWrap: 'wrap'
	},
	buttonContainer: {
		flexGrow: 1
	}
})