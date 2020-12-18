import React from 'react'

import AppNavigator from './src/lib/navigation/navigation'
import { UploadProvider } from '~/lib/context/upload'
import { DailyImagesProvider } from '~/lib/context/dailyImages'

export default function App() {
	return (
		<DailyImagesProvider>
			<UploadProvider>
				<AppNavigator />
			</UploadProvider>
		</DailyImagesProvider>
	)
}
