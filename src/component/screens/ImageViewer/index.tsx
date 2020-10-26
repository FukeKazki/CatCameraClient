import React, { FC, ReactNode, useState } from 'react'
import { View, Image, Dimensions, Text } from 'react-native'
import { Icon, Button } from 'native-base'
import ImageZoom from 'react-native-image-pan-zoom'
import { NavigationStackProp } from 'react-navigation-stack'

import styles from './styles'

type NavigateProps = {
	url: string
}

type Props = {
	navigation: NavigationStackProp<{}, NavigateProps>
}

const ImageViewer: FC<Props> = ({ navigation }) => {
	const [url, setUrl] = useState(navigation.state.params?.url)

	const [windowSize, setWindowSize] = useState({
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	})

	const handleClose = () => {
		navigation.goBack()
	}

  return (
    <>
      <View
        centerContent
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ImageZoom
          cropWidth={windowSize.width}
          cropHeight={windowSize.height}
          imageWidth={windowSize.width}
          imageHeight={windowSize.height}
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
      <Icon
        name='close'
        style={styles.closeIcon}
        onPress={handleClose}
      />
    </>
  )
}

export default ImageViewer
