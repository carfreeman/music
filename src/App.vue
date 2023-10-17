<script setup>
  import AppHeader from '@/components/AppHeader.vue'
  import AppAuth from '@/components/AppAuth.vue'
</script>
<template>
  <AppHeader />
  <!-- introduction -->
  <section class="mb-8 py-20 text-white text-center relative">
    <div class="absolute inset-0 w-full bg-contain introduction-bg" style="background-image: url(assets/img/header.png);"></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">
          Listen to great music!
        </h1>
        <p class="w-full md:w-8/12 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          In nam eius asperiores quia ipsa eveniet at, neque
          culpa et ex error voluptatem. Incidunt hic 
          tempora modi quis? Porro, iste adipisci.
        </p>
      </div>
    </div>
    <img src="/assets/img/introduction-music.png" class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full" />
  </section>
  <!-- main content -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <!-- icon -->
        <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
      </div>
      <!-- playlist -->
      <ol id="playlist">
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>
          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
      </ol>
      <!-- end playlist -->
    </div>
  </section>
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