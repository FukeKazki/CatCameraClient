import React, { FC } from 'react'
import { View, Image } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'
import { NavigationStackProp } from 'react-navigation-stack'
import { windowWidth, windowHeight } from '~/lib/style/styles'

import styles from './styles'
import ImageViewerHeader from '~/component/screens/ImageViewer/Header'

type NavigateProps = {
	url: string
}

type Props = {
	navigation: NavigationStackProp<{}, NavigateProps>
}

const ImageViewer: FC<Props> = ({ navigation }) => {
	const url = navigation.state.params?.url

	const handleClose = () => {
		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<ImageViewerHeader handleLeftIconClick={handleClose} />
			<ImageZoom
				cropWidth={windowWidth}
				cropHeight={windowHeight}
				imageWidth={windowWidth}
				imageHeight={windowHeight}
				style={styles.imageContainer}
			>
				<Image
					style={styles.image}
					source={{
						uri: `${url}`
					}}
					resizeMode='contain'
				/>
			</ImageZoom>
		</View>
	)
}

export default ImageViewer
