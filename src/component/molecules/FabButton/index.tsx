import React, { FC } from 'react'
import { Fab, Icon } from 'native-base'
import styles from './styles'

type Props = {
	onPress: () => void
}

const FabButton: FC<Props> = ({ onPress, ...props }) => {
	return (
		<Fab
			position='bottomRight'
			onPress={onPress}
			{...props}
			style={styles.button}
		>
			<Icon type={'AntDesign'} name={'pluscircleo'} />
		</Fab>
	)
}

export default FabButton