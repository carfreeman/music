<script setup>
    import { useModalStore } from '@/stores/modal';
    import { ref } from 'vue';
    import RegisterForm from './RegisterForm.vue';
    import LoginForm from './LoginForm.vue';

    const modal = useModalStore()
    const currentTab = ref('LoginForm')
    const tabs = {
        LoginForm,
        RegisterForm
    }
</script>

<template>
    <!-- auth modal -->
    <div 
        class="fixed z-10 inset-0 overflow-y-auto" 
        id="modal"
        :class="modal.hiddenClass">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>
            <!-- this element is to trick the browser into centering the modal contents -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <!-- add margin if you want to see some of the overlay behind the modal -->
            <div class="py-4 text-left px-6">
                <!-- title -->
                <div class="flex justify-between items-center pb-4">
                <p class="text-2xl font-bold">Your Account</p>
                <!-- modal close button -->
                <div 
                    class="modal-close cursor-pointer z-50"
                    @click.prevent="modal.toggleAuthModal()">
                    <i class="fas fa-times"></i>
                </div>
                </div>
                <!-- tabs -->
                <ul class="flex flex-wrap mb-4">
                    <li class="flex-auto text-center">
                        <a 
                            href="#" 
                            class="block rounded py-3 px-4 transition"
                            @click.prevent="currentTab = 'LoginForm'"
                            :class="{ 
                                'hover:text-white text-white bg-blue-600':currentTab === 'LoginForm',
                                'hover:text-blue-600': currentTab === 'RegisterForm'
                            }"
                        >
                            Login
                        </a>
                    </li>
                    <li class="flex-auto text-center">
                        <a 
                            href="#" 
                            class="block rounded py-3 px-4 transition"
                            @click.prevent="currentTab = 'RegisterForm'"
                            :class="{ 
                                'hover:text-white text-white bg-blue-600':currentTab === 'RegisterForm',
                                'hover:text-blue-600': currentTab === 'LoginForm'
                            }"
                        >
                            Register
                        </a>
                    </li>
                </ul>
                <component :is="tabs[currentTab]"></component>
            </div>
            </div>
        </div>
    </div>
</template>