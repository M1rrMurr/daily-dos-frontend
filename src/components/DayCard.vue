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
    <div :class="`mt-10 relative shadow-2xl font-indie border-l border-b min-w-96 min-h-96   text-slate-50 `">
        <h2
            class="absolute  top-0 -translate-y-full pb-2   rounded text-2xl flex justify-center my-2 font-semibold text-white">
            {{ day }}
        </h2>
        <div
            class=" h-full  flex flex-col bg-[linear-gradient(to_right,theme(colors.black)_66%,theme(colors.slate.900)_33%)]">
            <DayCardRow v-if="activities.length" v-for="activity in activities" :key="activity.id" :activity>
            </DayCardRow>

        </div>
        <div class="px-2 bg-black mt-1 py-2 border-slate-500 flex justify-end items-center ">

            <IconButton @click="uiStore.openModal('activity')">
                <IconPlus />
            </IconButton>
        </div>
    </div>

</template>
