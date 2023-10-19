<script setup>
    import { ref } from 'vue'
    
    import { useUserStore } from '@/stores/user'

    const userStore = useUserStore()
    
    const schema = {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:6|max:30',
        confirm_password: 'password_mismatch:@password',
        country: 'required|country_excluded:Vietnam',
        tos: 'tos',
    }

    const reg_in_submission = ref(false)
    const reg_show_alert = ref(false)
    const reg_alert_variant = ref('')
    const reg_alert_msg = ref('')

    async function register(values) {
        reg_show_alert.value = true
        reg_in_submission.value = true
        reg_alert_variant.value = "bg-blue-500"
        reg_alert_msg.value = "Please wait, your account is being created."

        try {
            await userStore.register(values)
        } catch (error) {
            /* const errorCode = error.code;
            const errorMessage = error.message; */
            reg_in_submission.value = false
            reg_alert_variant.value = 'bg-red-500'
            reg_alert_msg.value = 'An unexpected error ocurred. Please try again later.'    
            
            return
        }

        reg_alert_variant.value = "bg-green-500"
        reg_alert_msg.value = "Success, your account has been created."
    }

    const userData = {
        country: 'Peru',
    }
</script>

<template>
    <!-- registration form -->
    <div 
        class="text-white text-center font-bold p-4 rounded mb-4"
        v-if="reg_show_alert"
        :class="reg_alert_variant"
    >
        {{ reg_alert_msg }}
    </div>
    <VeeForm 
        :validationSchema="schema"
        @submit="register"
        :initial-values="userData"
    >
        <!-- name -->
        <div class="mb-3">
            <label class="inline-block mb-2">Name</label>
            <VeeField 
                type="text"
                name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" 
                placeholder="Enter Name"
            />
            <ErrorMessage class="text-red-600" name="name" />
        </div>
        <!-- Email -->
        <div class="mb-3">
            <label class="inline-block mb-2">Email</label>
            <VeeField 
                type="email"
                name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
            />
            <ErrorMessage class="text-red-600" name="email" />
        </div>
        <!-- Age -->
        <div class="mb-3">
            <label class="inline-block mb-2">Age</label>
            <VeeField 
                type="number"
                name="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" 
            />
            <ErrorMessage class="text-red-600" name="age" />
        </div>
        <!-- Password -->
        <div class="mb-3">
            <label class="inline-block mb-2">Password</label>
            <VeeField 
                type="password"
                name="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" 
                placeholder="Password" 
            />
            <ErrorMessage class="text-red-600" name="password" />
        </div>
        <!-- Confirm Password -->
        <div class="mb-3">
            <label class="inline-block mb-2">Confirm Password</label>
            <VeeField
                type="password"
                name="confirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" 
                placeholder="Confirm Password" 
            />
            <ErrorMessage class="text-red-600" name="confirm_password" />
        </div>
        <!-- Country -->
        <div class="mb-3">
            <label class="inline-block mb-2">Country</label>
            <VeeField 
                as="select"
                name="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            >
                <option value="USA">USA</option>
                <option value="Peru">Perú</option>
                <option value="Germany">Germany</option>
                <option value="Vietnam">Vietnam</option>
            </VeeField>
            <ErrorMessage class="text-red-600" name="country" />
        </div>
        <!-- TOS -->
        <div class="mb-3 pl-6">
            <VeeField
                type="checkbox"
                name="tos"
                value="1" 
                class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block" />
            <label class="inline-block">Accept terms of service</label>
            <ErrorMessage class="text-red-600 block" name="tos" />
        </div>
        <button 
            type="submit" 
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            :disabled="reg_in_submission"
        >
            Submit
        </button>
    </VeeForm>
</template>