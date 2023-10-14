import axios from 'axios'

const backendUrl = 'http://localhost:3333'

export const axiosInstance = axios.create({
	baseURL: backendUrl,
	headers: {
		'Content-Type': 'application/json',
	},
})
