import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useModalStore = defineStore("modal", () => {
    //state
    const isOpen = ref(false)

    //getters
    const hiddenClass = computed(() => ( !isOpen.value ? "hidden" : ""))
    
    //accions
    function toggleAuthModal() {
        isOpen.value = !isOpen.value
    }

    return { isOpen, hiddenClass, toggleAuthModal }
})