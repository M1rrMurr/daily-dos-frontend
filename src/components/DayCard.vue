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
    <div class="w-96 min-h-72 bg-black">
        <h2 class="bg-slate-950 text-2xl font-bold pb-3">{{ day }}</h2>
        <div class="flex flex-col justify-between bg-black min-h-full ">
            <div class="">
                <DayCardRow v-for="activity in activities" :activity />
            </div>
            <div class="flex justify-end px-1 py-1">
                <IconButton @click="uiStore.openModal('activity')">
                    <IconPlus />
                </IconButton>
            </div>

        </div>
    </div>
</template>
