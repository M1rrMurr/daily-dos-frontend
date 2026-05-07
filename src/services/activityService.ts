import type { Message } from '@/types/Message.ts'
import type { Activity } from '@/types/Activity.ts'
import apiClient from './apiClient.ts'
import type { ApiResponse } from '@/types/ApiResponse.ts'

export async function fetchActivities(): Promise<Activity[]> {
    const response = await apiClient.get<ApiResponse<Activity[]>>('api/activities')
    return response.data.data
}

export async function fetchActivity(id: number): Promise<Activity> {
    const response = await apiClient.get<ApiResponse<Activity>>(`api/activity/${id}`)
    return response.data.data
}

export async function deleteActivity(id: number): Promise<ApiResponse<Message>> {
    const response = await apiClient.delete<ApiResponse<Message>>(`api/activity/${id}`)
    return response.data
}
