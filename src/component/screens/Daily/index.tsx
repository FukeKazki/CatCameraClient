import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

import { Image } from '../../../../types'
import { Firebase } from '~/lib/firebase/firebase'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'


type props = {
  navigation: NavigationStackProp<{ userId: string }>
}

const Daily = ({ navigation }) => {
	const [images, setImages] = useState<Image[]>([])

	useEffect(() => {
		(async () => {
			const res = await Firebase.imagesCollection().get()
			const images = res.docs.map(value => value.data()) as Array<Image>
			setImages(images)
		})()
	}, [])

  const onPressImage = (url) => {
    navigation.navigate('ImageViewer', { url: url })
  }

	return (
		<>
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
		</>
	)
}

export default Daily
