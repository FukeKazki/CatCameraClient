import React, { FC, useState, useContext } from 'react'
import Header from '~/component/organisms/Header'
import { View } from 'react-native'
import { NavigationDrawerProp } from 'react-navigation-drawer'
import { UploadContext } from '~/lib/context/upload'
import axios from 'axios'
import SelectLineItem from '~/component/molecules/SelectLineItem'
import IconButton from '~/component/atoms/IconButton'
import styles from './styles'
import { Button, Icon, Text } from 'native-base'
// @ts-ignore
import { SERVER_URL } from '@env'

type Props = {
	navigation: NavigationDrawerProp<{}>
}

const Upload: FC<Props> = ({ navigation }) => {
	const [labels, setLabels] = useState(['猫の名前'])
	const { selected, removeLabelToImage } = useContext(UploadContext)

	const handleLabelChange = (text: string, index: number) => {
		const newLabels = [...labels.slice(0, index), text, ...labels.slice(index + 1)]
		setLabels(newLabels)
	}

	const handlePress = async (label: string) => {
		navigation.navigate('UploadSelectView', {
			label: label
		})
	}

	const handleAddLine = () => {
		setLabels([...labels, '猫の名前'])
	}

	const handleDeleteLine = (label: string) => {
		setLabels(labels.filter(v => v !== label))
		selected.filter(v => v.label === label).map(v => removeLabelToImage(v))
	}

	const uploadToServer = async (url: string, data: Object) => {
		const res = await axios.post(url, data).catch(e => console.error(e))
		console.log(res)
	}

	const handleSubmit = async () => {
		const upData = { data_list: selected }

		console.log(selected)
		await uploadToServer(SERVER_URL, upData)
	}

	return (
		<View style={styles.container}>
			<Header openDrawer={navigation.openDrawer} />

			{labels.map((label, index) => (
				<SelectLineItem
					key={index}
					catName={label}
					index={index}
					handleLabelChange={handleLabelChange}
					images={selected}
					handleSelect={handlePress}
					handleDelete={handleDeleteLine}
					style={{ height: 100 }}
				/>
			))}

			<IconButton
				onPress={handleAddLine} iconName={'pluscircleo'}
				style={styles.fabButton}
				iconSize={50}
			/>

			<Button iconLeft onPress={handleSubmit} style={styles.learningButton}>
				<Icon type={'AntDesign'} name={'API'} />
				<Text>学習する</Text>
			</Button>
		</View>
	)
}

export default Upload