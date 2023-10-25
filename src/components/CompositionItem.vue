<script setup>
    import { defineProps, ref } from 'vue'
    import { 
        songsCollection,
        doc, 
        updateDoc,  } from '@/includes/firebase'

    const props = defineProps({
        song: {
            type: Object,
            required: true,
        },
        updateSong: {
            type: Function,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    })

    const showForm = ref(false)
    const schema = {
        modified_name: 'required',
        genre: 'alpha_spaces',
    }
    const is_submission = ref(false)
    const show_alert = ref(false)
    const alert_variant = ref('')
    const alert_message = ref('')

    async function edit(values) {
        is_submission.value = true
        show_alert.value = true
        alert_variant.value = 'bg-blue-500'
        alert_message.value = 'Please wait, Updating song info.'
        
        const songRef = doc(songsCollection, props.song.docId)

        try {
            await updateDoc(songRef, {
                modified_name: values.modified_name,
                genre: values.genre,
            })   
        } catch (error) {
            is_submission.value = false
            alert_variant.value = 'bg-red-500'
            alert_message.value = 'Something went wrong! Try again later.'
            return
        }

        //success
        props.updateSong(props.index, values)
        
        is_submission.value = false
        alert_variant.value = 'bg-green-500'
        alert_message.value = 'Success!'
    }
</script>

<template>
    <div class="border border-gray-200 p-3 mb-4 rounded">
        <div v-show="!showForm">
            <h4 class="inline-block text-2x1 font-bold">{{ song.modified_name }}</h4>
            <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                <i class="fa fa-times"></i>
            </button>
            <button 
                class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                @click.prevent="showForm = !showForm">
                <i class="fa fa-pencil-alt"></i>
            </button>
        </div>
        <div v-show="showForm">
            <div 
                class="text-white text-center font-bold p-4 mb-4"
                v-if="show_alert"
                :class="alert_variant"
            >
                {{ alert_message }}
            </div>
            <VeeForm
                :validationSchema="schema"
                :initial-values="props.song"
                @submit="edit">
                <div class="mb-3">
                    <label for="" class="inline-block mb-2">Song title</label>
                    <VeeField 
                        type="text" 
                        name="modified_name"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter song title"
                    />
                    <ErrorMessage class="text-red-600" name="modified_name" />
                </div>
                <div class="mb-3">
                    <label for="" class="inline-block mb-2">Genre</label>
                    <VeeField 
                        type="text"
                        name="genre"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter genre"
                    />
                    <ErrorMessage class="text-red-600" name="genre" />
                </div>
                <button 
                    type="submit" 
                    class="py-1.5 px-3 rounded text-white bg-green-600"
                    :disabled="is_submission"
                >
                    Submit
                </button>
                <button 
                    type="button" 
                    class="py-1.5 px-3 rounded text-white bg-gray-600"
                    :disabled="is_submission"
                    @click.prevent="showForm = false">Go back</button>
            </VeeForm>
        </div>
    </div> 
</template>