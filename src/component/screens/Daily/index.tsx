import React, { FC, useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

import { Image } from '../../../../types'
import { Firebase } from '~/lib/firebase/firebase'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'
import styles from './styles'

type Props = {
	navigation: NavigationStackProp<{ userId: string }>
}

const Daily: FC<Props> = ({ navigation }) => {
	const [images, setImages] = useState<Image[]>([])

	useEffect(() => {
		(async () => {
			const res = await Firebase.imagesCollection().get()
			const images = res.docs.map(value => value.data()) as Array<Image>
			sortImages(images, 'date', true)
		})()
	}, [])

	const onPressImage = (url: string) => {
		navigation.navigate('ImageViewer', { url: url })
	}

	const sortImages = (images: Array<Image>, orderBy: string, isDescending: boolean = false) => {
		switch (orderBy) {

			case 'date':
				setImages(images.sort((a, b) => (a.postTime.seconds - b.postTime.seconds) * (isDescending ? (-1) : 1)))
				break

			default:
				setImages(images.sort((a, b) => (a.postTime.seconds - b.postTime.seconds) * (isDescending ? (-1) : 1)))

		}
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

export default Daily
