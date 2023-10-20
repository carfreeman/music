<script setup>
  import { useModalStore } from '@/stores/modal'
  import { useUserStore } from '@/stores/user'

  const modalStore = useModalStore()
  const userStore = useUserStore()
</script>

<template>
  <!-- header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- app name -->
      <a href="#" class="text-white font-bold uppercase text-2xl mr-4">
        Music
      </a>
      <div class="flex flex-group items-center">
        <!-- primary navigation -->
        <ul class="flex flex-row mt-1">
          <!-- navigation links -->
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
              <a href="#" class="px-2 text-white">Manage</a>
            </li>
            <li>
              <a 
                href="#" 
                class="px-2 text-white"
                @click.prevent="userStore.signOutUser()">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header> 
</template>