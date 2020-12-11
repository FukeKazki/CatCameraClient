import React, { FC, useContext, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Image } from '../../../../types'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import styles from './styles'
import Header from './Header'
import { NavigationStackProp } from 'react-navigation-stack'
import { UploadContext } from '~/lib/context/upload'

type Params = {
	label: string
}

type Props = {
	screenProps: {
		images: Image[]
	},
	navigation: NavigationStackProp<{}, Params>
}

const UploadSelectView: FC<Props> = ({ screenProps, navigation }) => {
	const { selected, addLabelToImage, removeLabelToImage } = useContext(UploadContext)
	const images = screenProps.images
	const label = navigation.state.params!.label

	const handleSelected = (image: Image) => {

		if (selected.includes(image)) {
			removeLabelToImage(image)
		} else {
			addLabelToImage(label, image)
		}
	}

	useEffect(() => {
	}, [])

	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			<ScrollView>
				<GridContainer>
					{images.map(image => (
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
		</View>
	)
}

export default UploadSelectView

