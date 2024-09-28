enum ImageSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
	full = 'full'
}

export type Image = {
	src: string
	alt: string
	size?: ImageSize
}

export { ImageSize }
