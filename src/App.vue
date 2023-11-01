<script setup>
  import AppHeader from '@/components/AppHeader.vue'
  import AppAuth from '@/components/AppAuth.vue'
  import AppPlayer from '@/components/Player.vue'
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
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>
  <AppPlayer />
  <AppAuth />
</template>

<style>
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.5s linear;
  }
  .fade-leave-to {
    transition: all 0.5s linear;
    opacity: 0;
  }
</style>