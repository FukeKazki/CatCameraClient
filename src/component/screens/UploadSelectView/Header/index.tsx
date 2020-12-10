import React, { FC } from 'react'
import { Header as NBHeader, Body, Left, Right } from 'native-base'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
	navigation: NavigationStackProp<{}, {}>
}

const Header: FC<Props> = ({ navigation }) => (
	<NBHeader style={styles.container}>
		<Left>

		</Left>
		<Body>
			<Text style={styles.title}>選択画面</Text>
		</Body>
		<Right>
			<TouchableOpacity onPress={() => navigation.navigate('Upload')}>
				<Text>閉じる</Text>
			</TouchableOpacity>
		</Right>
	</NBHeader>
)

export default Header