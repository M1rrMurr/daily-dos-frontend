<script setup lang="ts">
import { login } from '@/services/authService'
import { ref } from 'vue'

import { useActivityStore } from '@/stores/activity'

import ActivityCard from '@/components/ActivityCard.vue'

const store = useActivityStore()

const email = ref('zsoli@gmail.com')
const password = ref('password')
const isLoading = ref(false)


</script>

<template>

    <h1>Welcome, welcome</h1>
    <button @click="">click</button>
    <button @click="">tags</button>
    <form @submit.prevent action="">
        <input v-model="email" type="email">
        <input v-model="password" type="password">
        <button @click="login(isLoading, { email, password })">login</button>
        <button @click=" store.getActivities()">activities</button>
        <button @click=" store.getActivity()">activity</button>

    </form>
    <ActivityCard v-if="store.activities?.length" :activities="store.activities" />
</template>
