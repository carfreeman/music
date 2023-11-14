<script setup>
    import { ref, onBeforeUnmount } from 'vue'
    import { storage, auth, songsCollection, } from '@/includes/firebase'

    const is_dragover = ref(false)
    const uploads = ref([])
    const props = defineProps({
        addSong: {
            type: Function,
            required: true,
        }
    })

    function upload($event) {
        is_dragover.value = false
        
        const files = $event.dataTransfer 
            ? [ ...$event.dataTransfer.files ]
            : [ ...$event.target.files ]

        files.forEach((file) => {
            if (file.type !== 'audio/mpeg') {
                return
            }

            if (!navigator.onLine) {
                uploads.value.push({
                    task: {},
                    current_progress: 100,
                    name: file.name,
                    variant: 'bg-red-400',
                    icon: 'fas fa-times',
                    text_class: 'text-red-400',
                })
                return
            }

            // Points to the root reference
            const storageRef = storage.ref() //"music-b7571.appspot.com"
            // Points to 'songs'
            const songsRef = storageRef.child(`songs/${file.name}`) //"music-b7571.appspot.com/songs/music.mp3"
            const uploadTask = songsRef.put(file)

            const uploadIndex = uploads.value.push({
                uploadTask,
                current_progress: 0,
                name: file.name,
                variant: 'bg-blue-400',
                icon: 'fas fa-spinner fa-spin',
                text_class: '',
            }) - 1

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    uploads.value[uploadIndex].current_progress = progress
                }, 
                (error) => {
                    uploads.value[uploadIndex].variant = 'bg-red-400'
                    uploads.value[uploadIndex].icon = 'fas fa-times'
                    uploads.value[uploadIndex].text_class = 'text-red-400'
                    console.log(error)
                },
                //success
                async () => {
                    //datos para almacenar
                    const song = {
                        uid: auth.currentUser.uid,
                        display_name: auth.currentUser.displayName,
                        original_name: uploadTask.snapshot.ref.name,
                        modified_name: uploadTask.snapshot.ref.name,
                        genre: '',
                        comment_count: 0,
                    }
                    
                    song.url = await uploadTask.snapshot.ref.getDownloadURL()
                    
                    // Add a document with a generated ID.
                    const songRef = await songsCollection.add(song)
                    //Obtener el documento registrado
                    const songSnapshot = await songRef.get()

                    //Cargar la cancion en ManageView
                    props.addSong(songSnapshot)

                    uploads.value[uploadIndex].variant = 'bg-green-400'
                    uploads.value[uploadIndex].icon = 'fas fa-check'
                    uploads.value[uploadIndex].text_class = 'text-green-400'
                })
        })
    }
    //cancelar la carga de archivos si salimos del componente
    onBeforeUnmount(() => {
        uploads.value.forEach((upload) => {
            upload.uploadTask.cancel()
        })
    })
</script>

<template>
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">Upload</span>
            <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
            <!-- upload dropbox -->
            <div 
                class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
                :class="{ 'bg-green-400 border-green-400 border-solid': is_dragover }"
                @drag.prevent.stop=""
                @dragstart.prevent.stop=""
                @dragend.prevent.stop="is_dragover = false"
                @dragover.prevent.stop="is_dragover = true"
                @dragenter.prevent.stop="is_dragover = true"
                @dragleave.prevent.stop="is_dragover = false"
                @drop.prevent.stop="upload($event)">
                <h5>Drop you files here</h5>
            </div>
            <input type="file" multiple @change="upload($event)"/>
            <hr class="my-6" />
            <!-- progress bar -->
            <div 
                class="mb-4"
                v-for="upload in uploads" :key="upload.name">
                <!-- file name -->
                <div class="font-bold text-sm" :class="upload.text_class">
                    <i :class="upload.icon"></i>&nbsp;{{ upload.name }}
                </div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                    <!-- inner progress bar -->
                    <div 
                        class="transition-all progress-bar"
                        :class="upload.variant"
                        :style="{ width: upload.current_progress + '%' }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>