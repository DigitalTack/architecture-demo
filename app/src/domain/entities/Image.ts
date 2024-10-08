enum ImageSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
	full = 'full'
}

export type Image = {
	alt: string
	sizes: Record<ImageSize, string>
}

export { ImageSize }
