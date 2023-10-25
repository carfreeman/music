<script setup>
    import AppUpload from '@/components/AppUpload.vue'
    import CompositionItem from '@/components/CompositionItem.vue'
    import { ref } from 'vue'
    import { 
        songsCollection, 
        query, 
        where, 
        getDocs, 
        auth, } from '@/includes/firebase'

    const songs = ref([])

    async function loadSongs() {
        const q = query(songsCollection, where('uid', '==', auth.currentUser.uid ))
        const querySnapshot = await getDocs(q)
        
        querySnapshot.forEach((doc) => {
            const song = {
                ...doc.data(),
                docId: doc.id,
            }

            songs.value.push(song)
        })
    }

    loadSongs()

    function updateSong(index, values) {
        songs.value[index].modified_name = values.modified_name
        songs.value[index].genre = values.genre
    }
</script>

<template>
    <!-- maint content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div class="col-span-1">
                <AppUpload />
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
                        /> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>