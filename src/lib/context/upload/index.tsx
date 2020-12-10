import React, { createContext, FC, useState } from 'react'
import { Image } from '../../../../types'

type Context = {
	selected: Image[]
	addLabelToImage: (label: string, image: Image) => void
	removeLabelToImage: (image: Image) => void
}

export const UploadContext = createContext<Context>({
	selected: [],
	addLabelToImage: () => {
	},
	removeLabelToImage: () => {
	}
})

export const UploadProvider: FC = ({ children }) => {
	const [selected, setSelected] = useState<Image[]>([])

	const addLabelToImage = (label: string, image: Image) => {
		image['label'] = label
		setSelected(prevState => [...prevState, image])
	}

	const removeLabelToImage = (image: Image) => {
		setSelected(prevState => prevState.filter(v => v !== image))
	}

	return (
		<UploadContext.Provider value={{ selected, addLabelToImage, removeLabelToImage }}>
			{children}
		</UploadContext.Provider>
	)
}