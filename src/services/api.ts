import axios from "axios";

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		// first
		// 'API-KEY': '75bf90f4-d793-42a8-97a9-1d7279d54e0f'
		// second
		'API-KEY': '0978f4ba-63f6-4038-afbe-8118b8895597'
		// third
		// 'API-KEY': '32a0a843-9984-4f5d-9115-1967c69d182b',

		// "Authorization": "Bearer "

	},
})