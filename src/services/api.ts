import axios from "axios";

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		// first
		// 'API-KEY': '25fb4cb5-112f-4a3d-9b37-6dbdb23a2f01'
		// second
		'API-KEY': '0978f4ba-63f6-4038-afbe-8118b8895597'

	},
})