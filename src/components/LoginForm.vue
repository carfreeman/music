<script setup>
    import { ref } from 'vue'
    import { useUserStore } from '@/stores/user'

    const userStore = useUserStore()

    const loginSchema = {
        email: 'required|email',
        password: 'required|min:3|max:30',
    }

    const login_in_submission = ref(false)
    const login_show_alert = ref(false)
    const login_alert_variant = ref('')
    const login_alert_msg = ref('')

    async function login(values) {
        login_in_submission.value = true
        login_show_alert.value = true
        login_alert_variant.value = 'bg-blue-500'
        login_alert_msg.value = 'Please wait, we are logging you in.'

        try {
            await userStore.authenticate(values)
        } catch (error) {
            login_in_submission.value = false
            login_alert_variant.value = 'bg-red-500'
            login_alert_msg.value = 'Invalid login details.'
            return
        }
        login_alert_variant.value = 'bg-green-500'
        login_alert_msg.value = 'Success! You are now logged in.'
        window.location.reload()
    }
</script>

<template>
    <!-- login-form -->
    <div 
        class="text-white text-center font-bold p-4 mb-4"
        v-if="login_show_alert"
        :class="login_alert_variant"
    >
        {{ login_alert_msg }}
    </div>
    <VeeForm 
        :validationSchema="loginSchema"
        @submit="login"
    >
        <!-- email -->
        <div class="mb-3">
            <label class="inline-block mb-2" >Email</label>
            <VeeField 
                name="email"
                type="email" 
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-800 transition duration-500 focus:outline-none focus:border-block rounded" 
                placeholder="Enter Email" 
            />
            <ErrorMessage class="text-red-600" name="email" />
        </div>
        <!-- password -->
        <div class="mb-3">
            <label class="inline-block mb-2">Password</label>
            <VeeField 
                name="password"
                type="password" 
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus_border-black rounded" 
                placeholder="Password" 
            />
            <ErrorMessage class="text-red-600" name="password" />
        </div>
        <button 
            type="submit" 
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            :disabled="login_in_submission"
        >
            Submit
        </button>
    </VeeForm>
</template>