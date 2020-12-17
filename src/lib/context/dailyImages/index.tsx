import React, { createContext, FC, useCallback, useEffect, useReducer } from 'react'
import { Image } from '../../../../types'
import { Firebase } from '~/lib/firebase/firebase'

type Context = {
	state: Props
	dispatch: React.Dispatch<Action>
}
type Status = 'idle' | 'loading' | 'error' | 'success'

type Props = {
	images: Image[],
	error: null | string,
	status: Status
}

const initialState: Props = {
	images: [],
	error: null,
	status: 'idle'
}

export const DailyImagesContext = createContext<Context>({
	state: initialState,
	dispatch: () => {
	}
})

type Action = {
	type: 'FETCH_IMAGE'
} | {
	type: 'FETCH_IMAGE_SUCCESS'
	images: Image[]
} | {
	type: 'FETCH_IMAGE_FAILED'
	error: string
}

const reducer: React.Reducer<Props, Action> = (state: Props, action: Action) => {
	switch (action.type) {
		case 'FETCH_IMAGE':
			return {
				...state,
				images: [],
				status: 'loading',
				error: null
			}
		case 'FETCH_IMAGE_SUCCESS':
			return {
				...state,
				images: action.images,
				status: 'success',
				error: null
			}
		case 'FETCH_IMAGE_FAILED':
			return {
				...state,
				images: [],
				status: 'error',
				error: action.error
			}
		default:
			return state
	}
}

export const DailyImagesProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchImages = useCallback(async (): Promise<Image[]> => {
		const res = await Firebase.imagesCollection().get()
		const images = res.docs.map(value => value.data()) as Image[]

		return images
	}, [])

	useEffect(() => {
		if (state.status === 'idle') {
			dispatch({ type: 'FETCH_IMAGE' })
			fetchImages()
				.then(images => {
					dispatch({ type: 'FETCH_IMAGE_SUCCESS', images: images })
				})
				.catch(err => {
					dispatch({ type: 'FETCH_IMAGE_FAILED', error: err })
				})
		}
	}, [])

	return (
		<DailyImagesContext.Provider value={{ state, dispatch }}>
			{children}
		</DailyImagesContext.Provider>
	)
}