<script setup lang="ts">
import { useUiStore } from '@/stores/ui';
import ActivityModal from './ActivityModal.vue';
import FooModal from './FooModal.vue';
import ActivityForm from './ActivityForm.vue';

const uiStore = useUiStore()
</script>

<template>
    <div @click="uiStore.closeModal()" class="fixed inset-0 backdrop-blur-xs bg-black/40  grid place-items-center">
        <component @click.stop :is="uiStore.modalType === 'activity' ? ActivityForm : FooModal" />
    </div>
</template>
