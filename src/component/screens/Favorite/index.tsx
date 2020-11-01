import React, { FC } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { Image } from '../../../../types'
import styles from './styles'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'

type Props = {
	navigation: NavigationStackProp<{ url: string }>
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