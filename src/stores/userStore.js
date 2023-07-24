import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebase.config'
import { ref } from 'vue'
import router from '../routes'


export const useUserStore = defineStore("User", () => {

    const loadingSession = ref(false);
    const userData = ref({});
    const registerUser = async (email, password) =>{
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            userData.value = {...user};
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (email, password) => {
        try{
            const {user} =  await signInWithEmailAndPassword(auth,email,password);
            userData.value = user;
        }catch(error){
            console.log(error);
        }
    }
    const logOutUser = async () =>{
        try {
            await signOut(auth);
            userData.value = null;
            router.push('/login');
        } catch (error) {
            console.log(error)
        }
    }
    const currentUser = () => {
        return new Promise((resolve, reject) => {
            const unsuscribe = onAuthStateChanged(auth, user => {
                if(!user){
                    userData.value = null;
                }else{
                    userData.value = user
                }
                resolve(user)
            },e => reject(e))
            unsuscribe();
        })
    }
    return {
        registerUser,
        loginUser,
        logOutUser,
        userData,
        currentUser,
        loadingSession
    }
})