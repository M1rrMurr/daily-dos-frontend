import type { Tag } from './Tag.ts'

export type Activity = {
    id: number
    name: string
    description: string
    priority: boolean
    tags: Tag[]
    start_time: string
    end_time: string
}
