export interface ISettingsStore {
	isDarkTheme: boolean | null,
	setIsDarkTheme: (value: boolean) => void,
}