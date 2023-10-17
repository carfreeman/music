import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorites", () => {
    const favorites = ref([]);

    if(localStorage.getItem("favorites")){
        favorites.value = JSON.parse(localStorage.getItem("favorites"));
    }

    const add = (poke) => {
        console.log(poke);
        favorites.value.push(poke);
        localStorage.setItem("favorites", JSON.stringify(favorites.value));
    }

    const remove = (id) => {
        favorites.value = favorites.value.filter((item) => item.id !== id);
        localStorage.setItem("favorites", JSON.stringify(favorites.value));
    }

    const findPoke = (name) => {
        favorites.value.find((item) => item.name === name);
    }

    return {
        favorites, add, remove, findPoke
    }
});