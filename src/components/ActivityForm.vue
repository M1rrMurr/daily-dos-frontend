<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue';
</script>

<template>
    <form class="bg-black px-3 py-2  shadow-lg shadow-slate-700" @submit.prevent>
        <div class="flex justify-between">
            <label for="">name</label>
            <input type="text">
        </div>
        <div>
            <label for="">description</label>
            <input type="text">
        </div>
        <div>
            <label for="">start</label>
            <input type="text">
        </div>
        <div>
            <label for="">end</label>
            <input type="text">
        </div>
        <div class="flex justify-end">
            <div class="flex items-center justify-center gap-2">
                <PrimaryButton>create</PrimaryButton>
                <PrimaryButton>cancel</PrimaryButton>
            </div>
        </div>

    </form>

</template>
