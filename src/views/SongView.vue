<script setup>
    import { ref, computed, watch } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { 
        songsCollection,
        doc,
        getDoc,
        auth,
        commentsCollection,
        addDoc,
        query,
        where,
        getDocs,
        updateDoc, } from '@/includes/firebase'
    import { useUserStore } from '@/stores/user'
    import { usePlayerStore } from '@/stores/player'

    const userStore = useUserStore()
    const playerStore = usePlayerStore()
    const route = useRoute()
    const router = useRouter()
    const song = ref({})
    const comments = ref([])
    const sort = ref('1')
    const schema = {
        comment: 'required|min:3',
    }
    const comment_in_submission = ref(false)
    const comment_show_alert = ref(false)
    const comment_alert_variant = ref('')
    const comment_alert_message = ref('')

    async function getSong() {
        const docSnap = await getDoc(doc(songsCollection, route.params.id))

        if (!docSnap.exists()) {
            router.push({ name: 'home' })
            return
        }
        //verificar si hay un parametro de consulta
        let { sort } = route.query
        sort = sort === '1' || sort === '2' ? sort : '1'

        song.value = docSnap.data()
        getComments()
    }

    getSong()

    const sortedComments = computed(() => {
        return comments.value.slice().sort((a, b) => {
            if (sort.value === '1') {
                return new Date(b.datePosted) - new Date(a.datePosted)
            }

            return new Date(a.datePosted) - new Date(b.datePosted)
        })
    })

    async function addComment(values, { resetForm }) {
        comment_in_submission.value = true
        comment_show_alert.value = true
        comment_alert_variant.value = 'bg-blue-500'
        comment_alert_message.value = 'Please wait, Your comment is being submitted.'

        const comment = {
            content: values.comment,
            datePosted: new Date().toString(),
            sid: route.params.id,
            name: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
        }
        //agregando el documento en firestore database
        await addDoc(commentsCollection, comment)
        //actualizando el conteo de comentarios de la musica en vue
        song.value.comment_count += 1
        //actualizando el conteo de comentarios de la musica en firestore database
        await updateDoc(doc(songsCollection, route.params.id), {
            comment_count: song.value.comment_count
        })
        
        getComments() //cargar los comentarios

        comment_in_submission.value = false
        comment_alert_variant.value = 'bg-green-500'
        comment_alert_message.value = 'Comment added!'
        
        resetForm() //limpiar el formulario
    }

    async function getComments() {
        //consulta de los comentarios
        const q = query(commentsCollection, where('sid', '==', route.params.id))
        const querySnapshot = await getDocs(q)

        //vaciar los comentarios
        comments.value = []

        querySnapshot.forEach((doc) => {
            //agregar los comentarios
            comments.value.push({
                docId: doc.id,
                ...doc.data(),
            })
        })
    }

    watch(sort, (newVal) => {
        if (newVal === route.query.sort) {
            return
        }
        router.push({
            query: {
                sort: newVal
            }
        })
    })
</script>

<template>
    <!-- music header -->
    <section class="w-full mb-8 py-14 text-center text-white relative">
        <div class="absolute inset-0 w-full h-full box-border bg-contain music-bg" style="background-image: url(/assets/img/song-header.png);">
        </div>
        <div class="container mx-auto flex items-center">
            <!-- play/pause button -->
            <button 
                type="button" 
                class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
                @click.prevent="playerStore.newSong(song)"
            >
                <i class="fas fa-play"></i>
            </button>
            <div class="z-50 text-left ml-8">
                <!-- song-info -->
                <div class="text-3xl font-bold">{{ song.modified_name}}</div>
                <div>{{ song.genre }}</div>
            </div>
        </div>
    </section>
    <!-- form -->
    <section class="container mx-auto mt-6">
        <div class="bg-white rounded border border-gray-200 realtive flex flex-col">
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                <!-- comment count -->
                <span class="card-title">Comments ({{ song.comment_count }})</span>
                <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
            </div>
            <div class="p-6">
                <div 
                    class="text-white text-center font-bold p-4 mb-4"
                    v-if="comment_show_alert"
                    :class="comment_alert_variant">
                    {{ comment_alert_message }}
                </div>
                <VeeForm 
                    v-if="userStore.userLoggedIn"
                    :validationSchema="schema"
                    @submit="addComment">
                    <VeeField 
                        as="textarea" 
                        name="comment"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4" 
                        placeholder="Your comment here...">
                    </VeeField>
                    <ErrorMessage class="text-red-600" name="comment"></ErrorMessage>
                    <button 
                        type="submit" 
                        class="py-1.5 px-3 rounded text-white bg-green-600 block"
                        :disabled="comment_in_submission"
                    >
                        Submit
                    </button>
                </VeeForm>
                <!-- sort comments -->
                <select 
                    class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    v-model="sort">
                    <option value="1">latest</option>
                    <option value="2">oldest</option>
                </select>
            </div>
        </div>
    </section>
    <!-- comments -->
    <ul class="container mx-auto">
        <li 
            class="p-6 bg-gray-50 border border-gray-200"
            v-for="comment in sortedComments"
            :key="comment.docId"
        >
            <!-- comment author -->
            <div class="mb-5">
                <div class="font-bold">{{ comment.name }}</div>
                <time>{{ comment.datePosted }}</time>
            </div>
            <p>{{ comment.content }}</p>
        </li>
    </ul>
</template>