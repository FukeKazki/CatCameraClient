import { StyleSheet } from 'react-native'
import { activeColor, componentBaseColor, textColor } from '~/utils/colors'
import { windowWidth } from '~/lib/style/styles'

export default StyleSheet.create({
	container: {
		backgroundColor: componentBaseColor,
		flex: 1
	},
	albumCard: {
		width: Math.floor(windowWidth / 2),
		height: Math.floor(windowWidth / 2),
		padding: 8
	},
	image: {
		minWidth: '90%',
		minHeight: '90%',
		borderWidth: 2,
		borderRadius: 20,
		borderColor: activeColor
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: textColor,
		marginTop: 4
	}
})