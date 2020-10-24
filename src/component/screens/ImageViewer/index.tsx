import React, { FC, ReactNode, useState } from 'react'
import { View, Image, Dimensions, Text } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'

import styles from './styles'

type props = {
  state: {
    params: {
      url: string,
    }
  }
}

const ImageViewer: FC<props> = ({ navigation }) => {

  const [url, setUrl] = useState(navigation.state.params.url)

  const [windowSize, setWindowSize] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  })

  return (
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
  )
}

export default ImageViewer
