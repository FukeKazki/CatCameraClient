import React, { FC } from 'react'
import { Header as NBHeader, Button, Left, Right, Body, Title } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import { activeColor } from '~/utils/colors'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
	navigation: NavigationStackProp<{}>
	title: string
}

const Header: FC<Props> = ({ navigation, title }) => (
	<NBHeader style={styles.container}>
		<Left>
			<Button transparent onPress={() => navigation.navigate('Album')}>
				<MaterialIcons name='arrow-back' size={25} color={activeColor} />
			</Button>
		</Left>
		<Body>
			<Title style={styles.title}>{title}</Title>
		</Body>
		<Right></Right>
	</NBHeader>
)

export default Header
