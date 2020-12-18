import React, { FC, useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image as ImageComponent } from 'react-native'
import Header from '~/component/organisms/Header'
import { NavigationDrawerProp } from 'react-navigation-drawer'
import { Cat } from '../../../../types'
import { Firebase } from '~/lib/firebase/firebase'
import GridContainer from '~/component/organisms/GridContainer'
import { DailyImagesContext } from '~/lib/context/dailyImages'
import styles from './styles'

type Props = {
	navigation: NavigationDrawerProp
}

const Album: FC<Props> = ({ navigation }) => {
	const { state } = useContext(DailyImagesContext)
	const [cats, setCats] = useState<Cat[]>([])

	useEffect(() => {
		(async () => {
			const res = await Firebase.catsCollection().get()
			const cats = res.docs.map(value => value.data()) as Cat[]
			setCats(cats)
		})()
	}, [])

	/* Example
		Array [
			Image[], // むぎ
			Image[], // つゆ
			Image[], // つくし
		]
	 */
	const classifiedCats = cats.map(cat => (
		state.images.filter(image => image.labels?.find(v => v === cat.name))
	))

	const navigateDaily = (index: number): void => {
		navigation.navigate('AlbumViewer', { images: classifiedCats[index], title: cats[index].name })
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
				<GridContainer>
					{cats.map((cat, index) => {
						const firstImage = classifiedCats[index][0]
						return (
							<View key={index} style={styles.albumCard}>
								<TouchableOpacity
									onPress={() => navigateDaily(index)}
								>
									{firstImage ? (
										<ImageComponent source={{ uri: firstImage.url }} style={styles.image} />
									) : (
										<Text>画像なし</Text>
									)}
									<Text style={styles.title}>{cat.name}</Text>
								</TouchableOpacity>
							</View>
						)
					})}
				</GridContainer>
			)}
		</View>
	)
}

export default Album