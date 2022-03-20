const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://ya-praktikum.tech/api/v2'

export const environments = {
	baseUrl: 'https://ya-praktikum.tech/api/v2',
	apiUrl: API_URL
};
