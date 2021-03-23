import React, { FC } from 'react'
import { Image } from 'react-native'

import styles from './styles'

type Props = {
	url: string
	style?: Object
}

const ImageContainer: FC<Props> = ({ url, style }) => (
	<Image
		source={{
			uri: `${url}`
		}}
		style={[styles.container, style]}
	/>
)

export default ImageContainer