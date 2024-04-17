import axios from 'axios'
import {ACCESS_TOKEN} from './constants'

const apiUrl = 'https://1aa7037c-6222-464b-b933-b79af3d80ee0-dev.e1-us-cdp-2.choreoapis.dev/django-react/backend/rest-api-be2/v1.0'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL:apiUrl
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api