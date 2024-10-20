enum ButtonColor {
	dark = 'dark',
	light = 'light'
}

export interface ButtonProps {
  color?: ButtonColor
  ariaLabel?: string
}

export { ButtonColor }
