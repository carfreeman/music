<script setup>
    import AppUpload from '@/components/AppUpload.vue'
    import CompositionItem from '@/components/CompositionItem.vue'
    import { ref } from 'vue'
    import { auth, songsCollection, } from '@/includes/firebase'
    import { onBeforeRouteLeave } from 'vue-router'

    const songs = ref([])
    const unSavedFlag = ref(false)

    async function loadSongs() {
        /* const q = query(songsCollection, where('uid', '==', auth.currentUser.uid ))
        const querySnapshot = await getDocs(q) */
        const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()
        snapshot.forEach(addSong)
    }

    loadSongs()

    //funcion que usara el componente CompositionItem
    function updateSong(index, values) {
        songs.value[index].modified_name = values.modified_name
        songs.value[index].genre = values.genre
    }
    //funcion que usara el componente CompositionItem
    function removeSong(i) {
        songs.value.splice(i, 1)
    }
    //funcion que usara el componente AppUpload
    function addSong(document) {
        const song = {
                ...document.data(),
                docId: document.id,
            }

            songs.value.push(song)
    }
    //funcion que usara el componente CompositionItem
    function updateUnSavedFlag(value) {
        unSavedFlag.value = value
    }

     
     onBeforeRouteLeave((to, from, next) => {
        if (!unSavedFlag.value) {
            next()
        } else {
            next(confirm('You have unsaved changes. Are you sure to want to leave?'))
        }
    })
</script>

<template>
    <main>
        <section class="container mx-auto mt-6">
            <div class="md:grid md:grid-cols-3 md:gap-4">
                <div class="col-span-1">
                    <AppUpload :addSong="addSong"/>
                </div>
                <div class="col-span-2">
                    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                            <span class="card-title">My songs</span>
                            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
                        </div>
                        <div class="p-6">
                            <!-- composition items -->
                            <CompositionItem 
                                v-for="(song, i) in songs" 
                                :key="song.docId"
                                :song="song"
                                :updateSong="updateSong"
                                :index="i"
                                :removeSong="removeSong"
                                :updateUnSavedFlag="updateUnSavedFlag"
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>