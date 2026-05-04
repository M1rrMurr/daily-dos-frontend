import { defineStore } from "pinia";
import { ref } from "vue";
import type { Activity } from '@/types/Activity.ts'
import { fetchActivities, fetchActivity } from "@/services/activityService";
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
            const res = await fetchActivity(1)
            console.log(res)
        } catch (error) { console.log(error) } finally { isLoading.value = false }
    }
    const sortByDay = function(dayNum: number) {
        if (dayNum === 0 || dayNum > 7 || !activities.value.length) return []
        return activities.value?.filter((activity: Activity) => getDayNum(activity.start_time) === dayNum)
    }
    return { activities, isLoading, getActivities, sortByDay, getActivity }
})
