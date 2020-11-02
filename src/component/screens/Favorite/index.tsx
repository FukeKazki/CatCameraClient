import React, { FC } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Image } from '../../../../types'
import styles from './styles'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import Header from '~/component/organisms/Header'
import { NavigationDrawerProp } from 'react-navigation-drawer'

type Props = {
	navigation: NavigationDrawerProp<{ url: string }>
	screenProps: {
		images: Image[]
	}
}

const Favorite: FC<Props> = ({ navigation, screenProps }) => {
	const images = screenProps.images.filter(image => image.isFavorite)

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

export default Favorite