import { ref } from "vue"
import { defineStore } from "pinia"
import { auth, usersCollection, } from '@/includes/firebase'

export const useUserStore = defineStore("user", () => {
    //state
    const userLoggedIn = ref(false)

    //actions
    async function register(values) {
        //registro de email y password en el servicio 
        //authentication de firebase
        const userCredential = await auth.createUserWithEmailAndPassword(values.email, values.password)
        //registro de los demas valores en el servicio
        //de cloud firestore
        await usersCollection.doc(userCredential.user.uid).set({
            name: values.name,
            email: values.email,
            age: values.age,
            country: values.country,
        })

        await userCredential.user.updateProfile({
            displayName: values.name,
        })

        userLoggedIn.value = true
    }

    async function authenticate(values) {
        const userCredential = await auth.signInWithEmailAndPassword(values.email, values.password)
        userLoggedIn.value = true
        //actualizar el perfil del usuario
        const uid = userCredential.user.uid
        const docRef = usersCollection.doc(uid)
        const docSnap = await docRef.get()

        if (docSnap.exists) {
            const dataUser = docSnap.data()
            
            await userCredential.user.updateProfile({
                displayName: dataUser.name,
            })
        } else {
            console.log('No such document')
        }
    }

    async function signOutUser() {
        await auth.signOut()
        userLoggedIn.value = false
    }

    return { userLoggedIn, register, authenticate, signOutUser }
})