export const minLengthValidator = (value: number = 15, title: string = "this field") => ({
	minLength: {
		value,
		message: `The length of ${title} is from ${value} symbools`
	}
})