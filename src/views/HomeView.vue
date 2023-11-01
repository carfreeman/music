<script setup>
  import { ref, onBeforeUnmount } from 'vue'
  import { 
    songsCollection, 
    getDocs,
    getDoc,
    doc,
    orderBy, 
    startAfter, 
    limit,
    query, } from '@/includes/firebase'
  import SongItem from '@/components/SongItem.vue'

  const songs = ref([])
  let maxPerPage = 3
  let pendingRequest = false

  //obtener las canciones de la coleccion songs
  async function loadSongs() {
    let snapshots
    //si esta pendiente, no se solicita mas canciones
    if (pendingRequest) {
      return
    }

    pendingRequest = true
    
    if (songs.value.length) {
      //si hay canciones, solicitamos a partir del ultimo registro
      const lastDoc = await getDoc(doc(songsCollection, songs.value[songs.value.length - 1].docId))
      let q = query(songsCollection, orderBy('modified_name'), startAfter(lastDoc), limit(maxPerPage))
      snapshots = await getDocs(q)
    } else {
      //si no hay canciones, solo solicitamos
      let q = query(songsCollection, orderBy('modified_name'), limit(3))
      snapshots = await getDocs(q)
    }
    
    snapshots.forEach((document) => {
      songs.value.push({
        docId: document.id,
        ...document.data(),
      })
    })

    pendingRequest = false
  }
  //antes de navegar a otra pagina, remover el scroll infinito
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  //scroll infinito
  function handleScroll() {
    //scrollTop => distancia recorrida del documento
    //offsetHeight => medida de la altura del documento
    const { scrollTop, offsetHeight } = document.documentElement
    const { innerHeight } = window //altura de la ventana del navegador
    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight
    //alternativa opcional, menos estricto
    //const bottomOfWindow = Math.round(scrollTop) + innerHeight > offsetHeight - 100
    
    if (bottomOfWindow) {
      loadSongs()
    }
  }
  //agregar el evento scroll infinito
  window.addEventListener('scroll', handleScroll)

  loadSongs()
</script>

<template>
  <main>
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
          <SongItem 
            v-for="song in songs"
            :key="song.docId"
            :song="song"/>
        </ol>
        <!-- end playlist -->
      </div>
    </section>
  </main>
</template>