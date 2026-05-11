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
type MessageWithData = { message: string; data: Activity }
export async function storeActivity(data: Activity): Promise<MessageWithData> {
    const response = await apiClient.post<MessageWithData>('api/activity', data)
    return response.data
}

export async function deleteActivity(id: number): Promise<Message> {
    const response = await apiClient.delete<Message>(`api/activity/${id}`)
    return response.data
}
