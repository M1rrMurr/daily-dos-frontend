<script setup lang="ts">
import type { Activity } from '@/types/Activity';
import { formatDate } from '@/utils/formatDate';
import { ref } from 'vue';
import { IconTrash } from '@tabler/icons-vue';
import { IconEdit } from '@tabler/icons-vue';
import IconButton from './IconButton.vue';
import { useUiStore } from '@/stores/ui';
import { useActivityStore } from '@/stores/activity';

const props = defineProps<{ activity: Activity }>()

const uiStore = useUiStore()
const activityStore = useActivityStore()

const isHovered = ref(false)

</script>

<template>
    <div @mouseover="isHovered = true" @mouseleave="isHovered = false"
        class="relative flex hover:-translate-x-4 transition-all duration-200 cursor-default">
        <div class=" px-1 my-1 flex-2 flex items-center justify-center font-indie font-semibold text-sm ">
            {{ formatDate(activity.start_time) }} -
            {{ formatDate(activity.end_time) }}
        </div>

        <div class="flex-1 text-center ">
            {{ activity.name }}
        </div>
        <!-- dropdown container for the row -->
        <div v-if="isHovered"
            class="absolute bg-black space-y-2  text-slate-400 hover:px-1 hover:py-2 transition-all duration-200  bottom-2 -right-4 border-2 border-slate-500">
            <IconButton @click="uiStore.openModal('activity', activity)">
                <IconEdit />
            </IconButton>
            <IconButton @click="activityStore.destroyActivity(activity.id)">
                <IconTrash />
            </IconButton>

        </div>
    </div>
</template>
