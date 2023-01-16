<template>
    <div class="font-nunito max-w-screen-md mx-auto m-10">
        <h1 class="font-semibold text-xl text-secondary">Create a Reminder</h1>
        <form @submit.prevent="handleSubmit" class="form-control gap-2">
            <label class="label">
                <span class="label-text">Reminder name</span>
            </label>
            <input type="text" v-model="title" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />
            
            <label class="label">
                <span class="label-text">Reminder description</span>
            </label>
            <input type="text" v-model="description" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />

            <label class="label">
                <span class="label-text">Remind me at...</span>
            </label>
            <input type="datetime-local" v-model="date" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />
            
            <button class="btn">submit</button> 
        </form>
    </div>
</template>


<script>
import { ref } from 'vue';

//firebase imports
import { db } from '@/firebase/config';
import { collection, addDoc } from '@firebase/firestore'
import getUser from '@/composables/getUser';
import getCollection from '@/composables/getCollection'
import { Timestamp } from '@firebase/firestore';

export default {
    setup() {
        const { user } = getUser()

        const docs = getCollection('reminders', ['userUid','==',user.value.uid])
        console.log(docs)
        
        const title = ref(null)
        const description = ref(null)
        const date = ref(null)



        const handleSubmit = async () => {
            const dateRemind = new Date(date.value)
            const remind = Timestamp.fromDate(dateRemind)

            const timestamp = Timestamp.now()

            const colRef = collection(db,'reminders')
            
            await addDoc(colRef, {
                title: title.value,
                description: description.value,
                remindOn: remind,
                createdAt: timestamp,
                userUid: user.value.uid
            })

            title.value = ''
            description.value = ''
            date.value = ''
        }

        return { title, description, date, handleSubmit }
    }
}
</script>


<style>

</style>