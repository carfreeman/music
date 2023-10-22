<script setup>
  import AppHeader from '@/components/AppHeader.vue'
  import AppAuth from '@/components/AppAuth.vue'
  import { auth } from '@/includes/firebase'
  import { useUserStore } from './stores/user'
  import { RouterView } from 'vue-router'

  const userStore = useUserStore()
  /* propiedad currentUser para obtener el usuario 
  que accedió. Si no accedió ningún usuario, 
  el valor de currentUser es nulo */
  if (auth.currentUser) {
    userStore.userLoggedIn = true
  }
</script>
<template>
  <AppHeader />
  <RouterView></RouterView>
  <!-- player -->
  <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
    <!-- track info -->
    <div class="text-center">
      <span class="song title font-bold">Song Title</span> by
      <span class="song-artist">Artist</span>
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <!-- play/pause button -->
      <button type="button">
        <i class="fa fa-play-text-gray-500-text-xl"></i>
      </button>
      <!-- current position -->
      <div class="player-currenttime">00:00</div>
      <!-- scrub-container -->
      <div class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
        <!-- player ball -->
        <span class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg" style="left: 50%;">
          <i class="fas fa-circle"></i>
        </span>
        <!-- player progress bar -->
        <span class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400" style="width: 50%;"></span>
      </div>
      <!-- duration -->
      <div class="player-duration">03:06</div>
    </div>
  </div>
  <AppAuth />
</template>
<style scoped>

</style>