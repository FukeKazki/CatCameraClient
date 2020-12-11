import { Body, Header, Icon, Left, Right } from 'native-base'
import React, { FC } from 'react'
import styles from './styles'

type Props = {
	handleLeftIconClick: () => void
}

const ImageViewerHeader: FC<Props> = ({ handleLeftIconClick, ...props }) => {
	return (
		<Header style={styles.container} {...props}>
			<Left>
				<Icon name='close' onPress={handleLeftIconClick} style={styles.closeIcon} />
			</Left>
			<Body></Body>
			<Right></Right>
		</Header>
	)
}

export default ImageViewerHeader