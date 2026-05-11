import { defineStore } from "pinia";
import { ref } from "vue";
import type { Activity } from '@/types/Activity.ts'
import { deleteActivity, fetchActivities, fetchActivity, storeActivity } from "@/services/activityService";
import { getDayNum } from "@/utils/dateDayNum";




export const useActivityStore = defineStore('activity', function() {
    const activities = ref<Activity[]>([])
    const isLoading = ref(false)
    const getActivities = async function() {
        try {
            isLoading.value = true

            activities.value = await fetchActivities()

        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    const getActivity = async function() {
        try {
            isLoading.value = true
            const res = await fetchActivity(3)
            console.log(res)
        } catch (error) { console.log(error) } finally { isLoading.value = false }
    }
    const createActivity = async function() {
        try {
            isLoading.value = true
            const dummydata: Activity = {
                name: 'Morning Workout',
                description: 'Full body workout session at the gym',
                priority: 2,
                //               tag_ids: [1, 2],
                start_time: '2026-04-24T09:00:00',
                end_time: '2026-04-24T10:30:00',
            }
            const res = await storeActivity(dummydata)
            console.log(res)
            activities.value.push(res.data)
        } catch (err) { console.log(err) } finally { }
    }

    const destroyActivity = async function(id: number) {

        try {
            isLoading.value = true
            const res = await deleteActivity(id)
            console.log(res)
        } catch (error) { console.log(error) } finally { isLoading.value = false }
    }

    const sortByDay = function(dayNum: number) {
        if (dayNum === 0 || dayNum > 7 || !activities.value.length) return []
        return activities.value?.filter((activity: Activity) => getDayNum(activity.start_time) === dayNum)
    }
    return { activities, isLoading, getActivities, sortByDay, getActivity, destroyActivity, createActivity }
})
