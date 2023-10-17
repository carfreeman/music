<script setup>
    import { useFavoriteStore } from '../store/favorites';
    import { storeToRefs } from 'pinia';

    const useFavorite = useFavoriteStore();
    const { favorites } = storeToRefs(useFavorite);
    const { remove } = useFavorite;
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favorites.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li v-for="poke in favorites" :key="poke.id" class="list-group-item">
            <div>{{ poke.id }} - {{ poke.name }}</div>
            <RouterLink
                class="btn btn-sm btn-outline-info me-2"
                :to="`/pokemons/${poke.name}`">
                Mas info
            </RouterLink>
            <button
                class="btn btn-sm btn-outline-danger"
                @click="remove(poke.id)">
                Eliminar
            </button>
        </li>
    </ul>
</template>