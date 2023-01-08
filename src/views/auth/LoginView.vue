<template>
    <div class="font-nunito max-w-screen-md max-h-screen mx-auto my-10">
        <div class="w-full p-10 bg-secondary-focus rounded-2xl">
            <h1 class="font-bold text-3xl">Login</h1>

            <form @submit.prevent="handleSubmit" class="mt-12 flex flex-col gap-10 items-center justify-between">
                <input type="email" v-model="email" placeholder="Email" class="input input-bordered text-accent w-full max-w-xs" required />
    
                
                <input type="password" v-model="password" placeholder="Password" class="input input-bordered text-accent w-full max-w-xs" required />
                
                <button class="btn text-white hover:bg-white hover:text-black">submit</button>

                <h1>{{ error }}</h1>
            </form>
        </div>
    </div>
</template>


<script>
import useLogin from '@/composables/useLogin';
import { auth } from '@/firebase/config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const { error, isPending, login } = useLogin()
        const router = useRouter()

        const email = ref(null)
        const password = ref(null)

        const handleSubmit = async () => {
            await login(email.value, password.value)
            console.log(auth.currentUser)
            router.push({ name: 'home' })
        }

        return { email, password, error, isPending, handleSubmit }
    }
}
</script>


<style>

</style>