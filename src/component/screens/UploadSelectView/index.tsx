import React, { FC, useContext } from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { Image } from '../../../../types'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import styles from './styles'
import Header from './Header'
import { NavigationStackProp } from 'react-navigation-stack'
import { UploadContext } from '~/lib/context/upload'
import { DailyImagesContext } from '~/lib/context/dailyImages'

type Params = {
	label: string
}

type Props = {
	navigation: NavigationStackProp<{}, Params>
}

const UploadSelectView: FC<Props> = ({ navigation }) => {
	const { selected, addLabelToImage, removeLabelToImage } = useContext(UploadContext)
	const { state } = useContext(DailyImagesContext)
	const label = navigation.state.params!.label

	const handleSelected = (image: Image) => {

		if (selected.includes(image)) {
			removeLabelToImage(image)
		} else {
			addLabelToImage(label, image)
		}
	}

	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			{state.status === 'loading' && (
				<Text>Loading...</Text>
			)}
			{state.status === 'error' && (
				<Text>{state.error}</Text>
			)}
			{state.status === 'success' && (
				<ScrollView>
					<GridContainer>
						{state.images.map(image => (
							<TouchableOpacity
								onPress={() => handleSelected(image)}
								key={image.url}
							>
								<ImageContainer
									url={image.url}
									key={image.url}
									style={selected.includes(image) ? styles.activeImage : undefined}
								/>
							</TouchableOpacity>
						))}
					</GridContainer>
				</ScrollView>
			)}
		</View>
	)
}

export default UploadSelectView

