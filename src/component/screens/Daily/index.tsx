import React, { FC } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

import { Image } from '../../../../types'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import styles from './styles'

import { NavigationDrawerProp } from 'react-navigation-drawer'
import Header from '~/component/organisms/Header'

type Props = {
	navigation: NavigationDrawerProp<{ url: string }>
	screenProps: {
		images: Image[]
	}
}

const Daily: FC<Props> = ({ navigation, screenProps }) => {
	const images = screenProps.images

	const onPressImage = (url: string) => {
		navigation.navigate('ImageViewer', { url: url })
	}

	return (
		<View style={styles.container}>
			<Header openDrawer={navigation.openDrawer} />
			<ScrollView>
				<GridContainer>
					{images.map(image => (
						<TouchableOpacity
							onPress={() => onPressImage(image.url)}
							key={image.url}
						>
							<ImageContainer
								url={image.url}
								key={image.url}
							/>
						</TouchableOpacity>
					))}
				</GridContainer>
			</ScrollView>
		</View>
	)
}

export default Daily
