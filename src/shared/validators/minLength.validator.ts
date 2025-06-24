export const minLengthValidator = (value: number = 15, title: string = "this field") => ({
	minLength: {
		value,
		message: `The length of ${title} need be over ${value} symbools`
	}
})