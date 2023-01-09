<template>
    <div class="font-nunito max-w-screen-md mx-auto m-10">
        <h1 class="font-semibold text-xl text-secondary">Create a Reminder</h1>
        <form @submit.prevent="handleSubmit" class="form-control gap-2">
            <label class="label">
                <span class="label-text">Reminder name</span>
            </label>
            <input type="text" v-model="remName" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />
            
            <label class="label">
                <span class="label-text">Remind me at...</span>
            </label>
            <input type="datetime-local" v-model="remTime" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />
            
            <button class="btn">submit</button> 
        </form>
    </div>
</template>


<script>
import { ref } from 'vue';

//firebase imports
import { db } from '@/firebase/config';

export default {
    setup() {
        const remName = ref(null)
        const remTime = ref(null)



        const handleSubmit = async () => {
            const colRef = collection(db,'reminders')

            await addDoc(colRef, {
                name: remName.value,
                time: remTime.value,
                userUid: user.value.uid
            })

        }

        return { remName, remTime, handleSubmit}
    }
}
</script>


<style>

</style>