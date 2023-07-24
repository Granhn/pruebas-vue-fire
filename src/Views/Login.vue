<template>
    <h2>Login hola que tal</h2>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingresa email" v-model.trim="email">
        <input type="password" placeholder="Ingresa contraseña" v-model.trim="password">
        <button type="submit">Ingresar</button>
    </form>
</template>


<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const email = ref('diego@diego.diego')
const password = ref('difundos13');
const handleSubmit = async () => {
    if(!email.value || !password.value){
        return alert("llena los campos requeridos")
    }
    await userStore.loginUser(email.value, password.value);
    router.push('/home');
}

</script>