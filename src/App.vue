<template>
  <h1>Hola desde app</h1>
  {{ userData?.email }}
  <nav v-if="!userStore.loadingSession">
    <router-link to="/home" v-if="userData">Home</router-link>
    <router-link to="/login" v-if="!userData">Login</router-link>
    <router-link to="/sign-up" v-if="!userData">Register</router-link>
    <button v-if="userData" @click="userStore.logOutUser">Logout</button>
  </nav>
  <div v-else>
    <p>Loading user ...</p>
  </div>
  <router-view></router-view>
</template>


<script setup>
import { useUserStore } from './stores/userStore';
import { storeToRefs } from 'pinia'

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);
</script>