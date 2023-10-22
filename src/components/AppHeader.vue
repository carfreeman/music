<script setup>
  import { useModalStore } from '@/stores/modal'
  import { useUserStore } from '@/stores/user'
  import { RouterLink, useRouter, useRoute } from 'vue-router'

  const modalStore = useModalStore()
  const userStore = useUserStore()
  const router = useRouter()
  const route = useRoute()

  function signOut() {
    userStore.signOutUser()
    if (route.meta.requiresAuth) {
      router.push({ name: 'home' })
    }
  }
</script>

<template>
  <!-- header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- app name -->
      <RouterLink 
        class="text-white font-bold uppercase text-2xl mr-4" 
        :to="{ name: 'home' }"
        exact-active-class="no-active">
        Music
      </RouterLink>
      <div class="flex flex-group items-center">
        <!-- primary navigation -->
        <ul class="flex flex-row mt-1">
          <!-- navigation links -->
          <li>
            <RouterLink class="px-2 text-white" :to="{ name: 'about' }">About</RouterLink>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a 
              href="#" 
              class="px-2 text-white"
              @click.prevent="modalStore.toggleAuthModal()"
            >
              Login / Register
            </a>
          </li>
          <template v-else>
            <li>
              <RouterLink class="px-2 text-white" :to="{ name: 'manage' }">Manage</RouterLink>
            </li>
            <li>
              <a 
                href="#" 
                class="px-2 text-white"
                @click.prevent="signOut">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header> 
</template>