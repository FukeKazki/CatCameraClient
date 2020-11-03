export interface Image {
	isFavorite: boolean
	url: string
	postTime: firebase.firestore.Timestamp
	cats?: string[]
}

export interface Cat {
	name: string
}