<script setup lang="ts"></script>

<template>
    <div class="bg-slate-950 text-slate-50">
        <div class="flex gap-3 p-2 border-b-amber-50">
            <RouterLink to="/weekly">Schedule</RouterLink>
            <RouterLink to="/">Home</RouterLink>
        </div>
        <div class=" max-w-6xl px-4 mx-auto min-h-screen">
            <RouterView />
        </div>
    </div>
</template>

<style scoped></style>
