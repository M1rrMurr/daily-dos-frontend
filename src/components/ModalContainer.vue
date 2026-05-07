<script setup lang="ts">
import { useUiStore } from '@/stores/ui';
import ActivityModal from './ActivityModal.vue';
import FooModal from './FooModal.vue';

const uiStore = useUiStore()
</script>

<template>
    <div class="fixed inset-0 backdrop-blur-xs bg-black/40  grid place-items-center">
        <component :is="uiStore.modalType === 'activity' ? ActivityModal : FooModal" />
    </div>
</template>
