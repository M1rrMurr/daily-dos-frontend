import type { User } from '@/types/User.ts'
import apiClient from './apiClient.ts'

export async function login(isLoading: boolean, credentials: { email: string, password: string }) {
    try {
        isLoading = true

        //get csrf token
        await apiClient.get('/sanctum/csrf-cookie')

        const res = await apiClient.post('/login', credentials)
        console.log(res)
    } catch (error) { console.log(error) }
    finally { isLoading = false }
}

export async function fetchUser(): Promise<User> {
    const res = await apiClient.get<{ data: User }>('/api/user')
    console.log(res.data)
    return res.data.data
}
