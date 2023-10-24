<script setup>
    import { ref } from 'vue'
    import { storage, refFirebase, uploadBytesResumable  } from '@/includes/firebase'

    const is_dragover = ref(false)
    const uploads = ref([])

    function upload($event) {
        is_dragover.value = false
        const files = [ ...$event.dataTransfer.files ]

        files.forEach((file) => {
            if (file.type !== 'audio/mpeg') {
                return
            }

            // Points to the root reference
            const storageRef = refFirebase(storage) //"music-b7571.appspot.com"
            // Points to 'images'
            const songsRef = refFirebase(storageRef, `songs/${file.name}`) //"music-b7571.appspot.com/songs/music.mp3"
            
            const uploadTask = uploadBytesResumable(songsRef, file)

            const uploadIndex = uploads.value.push({
                uploadTask,
                current_progress: 0,
                name: file.name
            }) - 1

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    uploads.value[uploadIndex].current_progress = progress
                }, 
                (error) => {
                    console.log('Ups: ' + error)
                })
        })

        console.log(files)
    }
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
            <hr class="my-6" />
            <!-- progress bar -->
            <div 
                class="mb-4"
                v-for="upload in uploads" :key="upload.name">
                <!-- file name -->
                <div class="font-bold text-sm">{{ upload.name }}</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                    <!-- inner progress bar -->
                    <div 
                        class="transition-all progress-bar bg-blue-400"
                        :style="{ width: upload.current_progress + '%' }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>