import React, { FC } from 'react'
import { Header as NBHeader, Button, Left, Right } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import { activeColor } from '~/utils/colors'

type Props = {
	openDrawer: () => void
}

const Header: FC<Props> = ({ openDrawer }) => (
	<NBHeader style={styles.container}>
		<Left>
			<Button transparent onPress={openDrawer}>
				<MaterialIcons name='menu' size={25} color={activeColor} />
			</Button>
		</Left>
		<Right></Right>
	</NBHeader>
)

export default Header
