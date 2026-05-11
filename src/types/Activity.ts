import type { Tag } from './Tag.ts'

export type Activity = {
    id?: number
    name: string
    description: string
    priority: 1 | 2 | 3
    tag_ids?: number[]
    tags?: Tag[]
    start_time: string
    end_time: string

}
