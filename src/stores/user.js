import { ref } from "vue"
import { defineStore } from "pinia"
import { 
    auth, 
    createUserWithEmailAndPassword, 
    usersCollection,
    addDoc } from '@/includes/firebase'

export const useUserStore = defineStore("user", () => {
    //state
    const userLoggedIn = ref(false)

    //actions
    async function register(values) {
        //registro de email y password
        await createUserWithEmailAndPassword(auth, values.email, values.password)
        //registro de los demas valores
        await addDoc(usersCollection, {
            name: values.name,
            email: values.email,
            age: values.age,
            country: values.country
        })

        userLoggedIn.value = true
    }

    return { userLoggedIn, register }
})