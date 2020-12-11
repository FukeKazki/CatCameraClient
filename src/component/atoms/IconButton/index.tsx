import React, { FC } from 'react'
import { Icon } from 'native-base'
import { TouchableOpacity } from 'react-native'

type Props = {
	onPress: () => any
	iconName: string
	style?: object
	iconSize?: number
}

const IconButton: FC<Props> = ({ onPress, iconName, style, iconSize }) => {
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<Icon type={'AntDesign'} name={iconName} fontSize={iconSize} />
		</TouchableOpacity>
	)
}

export default IconButton
