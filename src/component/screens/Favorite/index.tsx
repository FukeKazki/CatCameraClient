import React, { FC, useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import Header from '~/component/organisms/Header'
import { NavigationDrawerProp } from 'react-navigation-drawer'
import { DailyImagesContext } from '~/lib/context/dailyImages'

type Props = {
	navigation: NavigationDrawerProp<{ url: string }>
}

const Favorite: FC<Props> = ({ navigation }) => {
	const { state } = useContext(DailyImagesContext)

	const onPressImage = (url: string) => {
		navigation.navigate('ImageViewer', { url: url })
	}

	return (
		<View style={styles.container}>
			<Header openDrawer={navigation.openDrawer} />
			{state.status === 'loading' && (
				<Text>Loading...</Text>
			)}
			{state.status === 'error' && (
				<Text>{state.error}</Text>
			)}
			{state.status === 'success' && (
				<ScrollView>
					<GridContainer>
						{state.images
							.filter(image => image.isFavorite)
							.map(image => (
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
			)}
		</View>
	)
}

export default Favorite