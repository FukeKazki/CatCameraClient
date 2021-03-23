import React, { FC } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import styles from './styles'

import Header from '~/component/screens/AlbumViewer/Header'
import { Image } from '../../../../types'
import { NavigationStackProp } from 'react-navigation-stack'

type Params = {
	images: Image[]
	title: string
}

type Props = {
	navigation: NavigationStackProp<{}, Params>
}

const AlbumViewer: FC<Props> = ({ navigation }) => {
	const images = navigation.state.params!.images
	const title = navigation.state.params!.title

	const onPressImage = (url: string) => {
		navigation.navigate('ImageViewer', { url: url })
	}

	return (
		<View style={styles.container}>

			<Header navigation={navigation} title={title} />
			<ScrollView>
				<GridContainer>
					{images.map(image => (
						<View key={image.url}>
							<TouchableOpacity
								onPress={() => onPressImage(image.url)}
								key={image.url}
							>
								<ImageContainer
									url={image.url}
									key={image.url}
								/>
							</TouchableOpacity>
						</View>
					))}
				</GridContainer>
			</ScrollView>
		</View>
	)
}

export default AlbumViewer
