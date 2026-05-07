<script setup lang="ts">
import ModalContainer from './components/ModalContainer.vue';
import { useUiStore } from './stores/ui';

const uiStore = useUiStore()
</script>

<template>
    <div class="relative bg-slate-950 text-slate-50">
        <div class="flex gap-3 p-2 border-b-amber-50">
            <RouterLink to="/weekly">Schedule</RouterLink>
            <RouterLink to="/">Home</RouterLink>
        </div>
        <div class=" max-w-6xl px-4 mx-auto min-h-screen">
            <RouterView />
        </div>
        <ModalContainer v-if="uiStore.modalType" />
    </div>
</template>

<style scoped></style>
