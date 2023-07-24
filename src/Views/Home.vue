<template>
    <h2>Home vue</h2>
    <p>{{ userData.email }}</p>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { userData } = storeToRefs(userStore);
</script>