import { defineStore } from "pinia"
import { ref } from "vue"

export const usePlayerStore = defineStore('player', () => {
    const current_song = ref({})

    async function newSong(song) {
        console.log('hello')
        current_song.value = song
    }

    return { current_song, newSong }
})