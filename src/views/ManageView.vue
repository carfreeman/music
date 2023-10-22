<template>
    <!-- maint content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div class="col-span-1">
                <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                        <span class="card-title">Upload</span>
                        <i class="fas fa-upload float-right text-green-400 text-2x1"></i>
                    </div>
                    <div class="p-6">
                        <!-- upload dropbox -->
                        <div class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid">
                            <h5>Drop you files here</h5>
                        </div>
                        <hr class="my-6" />
                        <!-- progress bar -->
                        <div class="mb-4">
                            <!-- file name -->
                            <div class="font-bold text-sm">Just another song.mp3</div>
                            <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                                <!-- inner progress bar -->
                                <div class="transition-all progress-bar bg-blue-400" style="width: 75%;"></div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="font-bold text-sm">Just another song.mp3</div>
                            <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                                <div class="transition-all progress-bar bg-blue-400" style=" width: 35%"></div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="font-bold text-sm">Just another song.mp3</div>
                            <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                                <div class="transition-all progress-bar bg-blue-400" style=" width: 55%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                        <span class="card-title">My songs</span>
                        <i class="fa fa-compact-disc float-right text-green-400 text-2x1"></i>
                    </div>
                    <div class="p-6">
                        <!-- composition items -->
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2x1 font-bold">Song name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                            <div>
                                <form action="#">
                                    <div class="mb-3">
                                        <label for="" class="inline-block mb-2">Song title</label>
                                        <input 
                                            type="text" 
                                            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                                            placeholder="Enter song title"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="" class="inline-block mb-2">Genre</label>
                                        <input 
                                            type="text"
                                            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                                            placeholder="Enter genre"
                                        />
                                    </div>
                                    <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600"> Submit </button>
                                    <button type="button" class="py-1.5 px-3 rounded text-white bg-gray-600">Go back</button>
                                </form>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2x1 font-bold">Song name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2x1 font-bold">Song name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2x1 font-bold">Song name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="border border-gray-200 p-3 mb-4 rounded">
                            <div>
                                <h4 class="inline-block text-2x1 font-bold">Song name</h4>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                                    <i class="fa fa-pencil-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>