<script setup lang="ts">
import { useActivityStore } from '@/stores/activity';
import DayCard from '@/components/DayCard.vue';
import { onMounted } from 'vue';

const store = useActivityStore()

onMounted(() => store.getActivities())


const days = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
</script>

<template>
    <h1 class="text-4xl font-bold font-indie text-slate-100">Weekly Scheadule</h1>
    <div class="flex gap-10 pb-3 flex-wrap justify-between">
        <DayCard v-for="day, i in days" :day :id="i" :activities="store.sortByDay(i + 1) ?? []"></DayCard>
    </div>
</template>
