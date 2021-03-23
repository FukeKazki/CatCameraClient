import React, { useEffect } from 'react'

import AppNavigator from './src/lib/navigation/navigation'
import { UploadProvider } from '~/lib/context/upload'
import { DailyImagesProvider } from '~/lib/context/dailyImages'
import { requestPermissionsAsync, getPermissionsAsync } from 'expo-media-library'

export default function App() {
	useEffect(() => {
		getPermissionsAsync()
			.then(res => {
				if (!res.granted) {
					requestPermissionsAsync()
						.catch(e => {
							console.error(e)
						})
				}
			})
			.catch(e => {
				console.error(e)
			})
	}, [])

	return (
		<DailyImagesProvider>
			<UploadProvider>
				<AppNavigator />
			</UploadProvider>
		</DailyImagesProvider>
	)
}
