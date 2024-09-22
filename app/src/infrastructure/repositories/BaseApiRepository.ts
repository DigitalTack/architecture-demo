export default abstract class BaseApiRepository {
    baseUrl: string

    constructor() {
        this.baseUrl = import.meta.env.VITE_BASE_URL
    }

    async get(path: string): Promise<any> {
        const endpoint = `${this.baseUrl}/api/${path}`
        console.log(endpoint)
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
        const response = await fetch(endpoint, options)
        if (!response.ok) {
            return Promise.reject(response)
        }

        return await response.json()
    }
}