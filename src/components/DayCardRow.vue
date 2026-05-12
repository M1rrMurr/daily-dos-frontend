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
    <div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="flex group relative font-indie  ">
        <!--dates bg-->
        <div class="flex-2/5 bg-black flex items-center justify-center font-semibold py-1 ">
            <div
                class="flex gap-2 text-sm items-center justify-center group-hover:-translate-x-3 transition-all duration-200">
                {{ formatDate(activity.start_time) }} -
                {{ formatDate(activity.end_time) }}
            </div>
        </div>
        <!--name-->
        <div class="flex-1  bg-slate-900 py-1">
            <div class="flex items-center justify-center transition-all duration-200 group-hover:-translate-x-3">
                {{ activity.name }}
            </div>
        </div>
        <!-- edit/delete container for the row -->
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
