<script setup lang="ts">
import type { Activity } from '@/types/Activity';
import { formatDate } from '@/utils/formatDate';
import DayCardRow from './DayCardRow.vue';
const props = defineProps<{ day: string, activities: Activity[] }>()


</script>

<template>
    <div
        :class="`mt-10 relative group  shadow-2xl font-indie border-l min-w-96 min-h-96 rounded-md  max-h-fit text-slate-50 `">
        <h2
            class="absolute  top-0 -translate-y-full pb-2  border-slate-500  rounded text-2xl flex justify-center my-2 font-semibold text-white">
            {{ day }}
        </h2>
        <div
            class="h-full py-2 flex flex-col bg-[linear-gradient(to_right,theme(colors.black)_66%,theme(colors.slate.900)_33%)]">
            <DayCardRow v-if="activities.length" v-for="activity in activities" :key="activity.id" :activity>
            </DayCardRow>
        </div>
    </div>

</template>
