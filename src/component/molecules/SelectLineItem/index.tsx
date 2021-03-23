import React, { FC } from 'react'
import { View, TextInput } from 'react-native'
import { Image } from '../../../../types'
import ImageContainer from '~/component/atoms/Image'
import styles from './styles'
import IconButton from '~/component/atoms/IconButton'

type Props = {
	catName: string
	index: number
	handleLabelChange: (text: string, index: number) => void
	images: Image[]
	handleSelect: (catName: string) => {}
	handleDelete: (catName: string) => void
	style?: Object
}

const SelectLineItem: FC<Props> = ({ catName, index, handleLabelChange, images, handleDelete, handleSelect, style, ...props }) => {
	return (
		<View style={[style, styles.container]} {...props}>
			<View style={styles.titleContainer}>
				<TextInput value={catName} onChangeText={(text) => handleLabelChange(text, index)} />
			</View>
			<View style={styles.imageContainer}>
				{images
					.filter(image => image.label === catName)
					.map((image, index) => {
						if (index > 3) return undefined
						return <ImageContainer key={image.url} url={image.url} style={{ width: 50, height: 50 }} />
					})
				}
			</View>
			<View style={styles.buttonContainer}>
				<IconButton
					onPress={() => handleSelect(catName)}
					iconName={'addfolder'}
				/>
				<IconButton
					onPress={() => handleDelete(catName)}
					iconName={'delete'}
				/>
			</View>
		</View>
	)
}

export default SelectLineItem