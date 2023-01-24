<template>
    <div class="font-nunito max-w-screen-md mx-auto m-4">
        <h1 class="font-semibold text-xl text-secondary">Create a Reminder</h1>
        <form @submit.prevent="handleSubmit" class="form-control items-center gap-4">
            <label class="label w-2/4">
                <span class="label-text">Reminder name</span>
            </label>
            <input required type="text" v-model="title" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />
            
            <label class="label w-2/4">
                <span class="label-text">Reminder description</span>
            </label>
            <input type="text" v-model="description" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />

            <label class="label w-2/4">
                <span class="label-text">Remind me at...</span>
            </label>
            <Datepicker required class="w-2/4" v-model="date" :dark="true" range fixed-start :clearable="false"></Datepicker>

            <button class="btn w-3/4 mt-6">submit</button> 
        </form>
    </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//firebase imports
import { db } from '@/firebase/config';
import { collection, addDoc } from '@firebase/firestore'
import getUser from '@/composables/getUser';
import getCollection from '@/composables/getCollection'
import { Timestamp } from '@firebase/firestore';

export default {
    components: { Datepicker },
    setup() {
        const { user } = getUser()

        const docs = getCollection('reminders', ['userUid','==',user.value.uid])
        console.log(docs)
        
        const title = ref(null)
        const description = ref(null)
        const date = ref(null)

        onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        })

        const handleSubmit = async () => {
            const dateRemind = new Date(date.value[1])
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