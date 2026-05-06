<script setup lang="ts">
import { login } from '@/services/authService'
import { ref } from 'vue'


import PrimaryButton from '@/components/PrimaryButton.vue'


const email = ref('zsoli@gmail.com')
const password = ref('password')
const isLoading = ref(false)


</script>

<template>

    <h1>Welcome, welcome</h1>
    <form @submit.prevent action="">
        <input v-model="email" type="email">
        <input v-model="password" type="password">
        <PrimaryButton @click="login(isLoading, { email, password })">login</PrimaryButton>

    </form>
</template>
