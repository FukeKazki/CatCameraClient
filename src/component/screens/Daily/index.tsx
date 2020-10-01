import React, { useEffect, useState } from 'react'

import { Image } from '../../../../types'
import { Firebase } from '~/lib/firebase/firebase'
import GridContainer from '~/component/organisms/GridContainer'
import ImageContainer from '~/component/atoms/Image'

const Daily = () => {
	const [images, setImages] = useState<Image[]>([])

	useEffect(() => {
		(async () => {
			const res = await Firebase.imagesCollection().get()
			const images = res.docs.map(value => value.data()) as Array<Image>
			setImages(images)
		})()
	}, [])

	return (
		<>
			<GridContainer>
				{images.map(image => (
					<ImageContainer
						url={image.url}
						key={image.url}
					/>
				))}
			</GridContainer>
		</>
	)
}

export default Daily