import React, { useEffect, useState } from 'react'

import AppNavigator from './src/lib/navigation/navigation'
import { Image } from './types'
import { Firebase } from '~/lib/firebase/firebase'
import { UploadProvider } from '~/lib/context/upload'

export default function App() {
	const [images, setImages] = useState<Image[]>([])

	useEffect(() => {
		(async () => {
			const res = await Firebase.imagesCollection().get()
			const images = res.docs.map(value => value.data()) as Array<Image>
			sortImages(images, 'date', true)
		})()
	}, [])

	const sortImages = (images: Array<Image>, orderBy: string, isDescending: boolean = false) => {
		switch (orderBy) {

			case 'date':
				setImages(images.sort((a, b) => (a.postTime.seconds - b.postTime.seconds) * (isDescending ? (-1) : 1)))
				break

			default:
				setImages(images.sort((a, b) => (a.postTime.seconds - b.postTime.seconds) * (isDescending ? (-1) : 1)))

		}
	}

	return (
		<UploadProvider>
			<AppNavigator
				screenProps={{
					images: images
				}}
			/>
		</UploadProvider>
	)
}
