<script setup lang="ts">
import type { Activity } from '@/types/Activity';
const props = defineProps<{ activities: Activity[] }>()
</script>

<template>
    <div class="flex gap-2">
        <div v-for="activity in props.activities" class="border-2">
            <div>{{ activity.name }}</div>
            <div>{{ activity.description }}</div>
            <div>{{ activity.start_time }}</div>
            <div>{{ activity.end_time }}</div>
        </div>

    </div>

</template>
