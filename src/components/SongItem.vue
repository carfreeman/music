<script setup>
    const props = defineProps({
        song: {
            type: Object,
        }
    })
</script>
<template>
    <li class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50">
        <div>
        <RouterLink
            class="font-bold block text-gray-600"
            :to="{ name: 'song', params: {id: props.song.docId}}">
            {{ props.song.modified_name }}
        </RouterLink>
        <span class="text-gray-500 text-sm">
            {{ props.song.display_name }}
        </span>
        </div>
        <div class="text-gray-600 text-lg">
        <span class="comments">
            <i class="fa fa-comments text-gray-600"></i>
            {{ props.song.commet_count }}
        </span>
        </div>
    </li>
</template>