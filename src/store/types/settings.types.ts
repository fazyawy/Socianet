export interface ISettingsStore {
	isDarkTheme: boolean | null,
	setIsDarkTheme: (value: boolean) => void,

	primaryColor: string,
	setPrimaryColor: (value: string) => void
}