<script setup lang="ts">
import type { Activity } from '@/types/Activity';
import { formatDate } from '@/utils/formatDate';
import DayCardRow from './DayCardRow.vue';
import { IconPlus } from '@tabler/icons-vue';
import IconButton from './IconButton.vue';
import { useUiStore } from '@/stores/ui';
const props = defineProps<{ day: string, activities: Activity[] }>()

const uiStore = useUiStore()


</script>

<template>
    <div class="w-96">
        <h2 class="text-2xl font-bold mb-3">{{ day }}</h2>
        <DayCardRow v-for="activity in activities" :activity />
    </div>
</template>
