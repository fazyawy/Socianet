import axios from "axios";

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '25fb4cb5-112f-4a3d-9b37-6dbdb23a2f01'
	},
})