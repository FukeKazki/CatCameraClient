import React, { FC } from 'react'
import { View, Image } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'
import { NavigationStackProp } from 'react-navigation-stack'
import { windowWidth, windowHeight } from '~/lib/style/styles'

import styles from './styles'
import ImageViewerHeader from '~/component/screens/ImageViewer/Header'

import { downloadAsync, documentDirectory } from 'expo-file-system'
import { getPermissionsAsync, createAssetAsync } from 'expo-media-library'

type NavigateProps = {
	url: string
}

type Props = {
	navigation: NavigationStackProp<{}, NavigateProps>
}

const saveImageToLocal = async (url: string): Promise<[boolean, string]> => {
	const permission = await getPermissionsAsync().catch(e => {
		console.error(e)
		return null
	})

	if (!permission || !permission.granted) {
		console.error('アクセス権限がありません')
		return [false, 'アクセス権限がありません']
	}

	const file = await downloadAsync(url, `${documentDirectory}tmp.jpg`).catch(e => {
		console.error(e)
		return null
	})

	if (!file) {
		return [false, '画像のダウンロードに失敗しました']
	}

	const asset = await createAssetAsync(file.uri).catch(e => {
		console.error(e)
		return null
	})

	if (!asset) {
		return [false, '画像の保存に失敗しました']
	}

	return [true, '']
}

const ImageViewer: FC<Props> = ({ navigation }) => {
	const url = navigation.state.params?.url

	const handleClose = () => {
		navigation.goBack()
	}


	const handleDownload = async () => {
		if (url) {
			const [res, err] = await saveImageToLocal(url)
			if (!res) {
				window.alert(err)
			} else {
				window.alert('ダウンロードに成功しました')
			}
		}
	}

	return (
		<View style={styles.container}>
			<ImageViewerHeader handleLeftIconClick={handleClose} handleRightIconClick={handleDownload} />
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
