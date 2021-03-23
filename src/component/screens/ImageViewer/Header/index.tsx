import { Body, Header, Icon, Left, Right } from 'native-base'
import React, { FC } from 'react'
import styles from './styles'

type Props = {
	handleLeftIconClick: () => void
	handleRightIconClick: () => void
}

const ImageViewerHeader: FC<Props> = ({ handleLeftIconClick, handleRightIconClick, ...props }) => {
	return (
		<Header style={styles.container} {...props}>
			<Left>
				<Icon name='close' onPress={handleLeftIconClick} style={styles.closeIcon} />
			</Left>
			<Body></Body>
			<Right>
				<Icon name='clouddownloado' type='AntDesign' onPress={handleRightIconClick}
					  style={styles.downloadIcon} />
			</Right>
		</Header>
	)
}

export default ImageViewerHeader