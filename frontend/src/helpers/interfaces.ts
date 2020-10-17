export interface Note {
	_id: string
	title: string
	content: string
	colour: string
	favourite: boolean
	updated: number
}

export interface Popup {
	title?: string
	content?: string
	buttons: Button[]
}

export interface Button{
	content?: string 
	primary?: boolean
	className?: string
	onClick: any
}