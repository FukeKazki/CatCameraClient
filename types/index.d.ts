export interface Image {
	isFavorite: boolean
	url: string
	postTime: firebase.firestore.Timestamp
	cats?: string[]
	cat_boxes?: []
	labels?: string[]
	label?: string
}

export interface Cat {
	name: string
}