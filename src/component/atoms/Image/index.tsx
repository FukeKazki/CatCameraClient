import React, { FC } from 'react'
import { Image } from 'react-native'

import styles from './styles'

type Props = {
	url: string
}

const ImageContainer: FC<Props> = ({ url }) => (
	<Image
		source={{
			uri: `${url}`
		}}
		style={styles.container}
	/>
)

export default ImageContainer