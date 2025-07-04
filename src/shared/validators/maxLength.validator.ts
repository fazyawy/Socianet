export const maxLengthValidator = (value: number = 300, title: string = "this field") => ({
	maxLength: {
		value,
		message: `The length of ${title} need be under ${value} symbools`
	}
})