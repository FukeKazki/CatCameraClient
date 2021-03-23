import React, { FC, ReactNode } from 'react'
import { View } from 'react-native'

import styles from './styles'

type props = {
	children?: ReactNode
}

const GridContainer: FC<props> = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	)
}

export default GridContainer