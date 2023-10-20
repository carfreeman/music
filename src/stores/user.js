import { ref } from "vue"
import { defineStore } from "pinia"
import { 
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    usersCollection,
    doc,
    setDoc, } from '@/includes/firebase'

export const useUserStore = defineStore("user", () => {
    //state
    const userLoggedIn = ref(false)

    //actions
    async function register(values) {
        //registro de email y password en el servicio 
        //authentication de firebase
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
        //registro de los demas valores en el servicio
        //de cloud firestore
        /* setDoc(referencia, datos) Escribe en el documento 
        al que hace referencia este DocumentReference .
        Si el documento aún no existe, se creará. */
        await setDoc(doc(usersCollection, userCredential.user.uid), {
            name: values.name,
            email: values.email,
            age: values.age,
            country: values.country
        })

        await updateProfile(auth.currentUser, {
            displayName: values.name,
        })

        userLoggedIn.value = true
    }

    return { userLoggedIn, register }
})