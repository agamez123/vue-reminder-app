<template>
    <div class="font-nunito">
        <h1 class="text-pink-500">reminder {{ id }}</h1>
        <div v-if="reminder">
            <div class="flex text-pink-400">
                <div class="w-full border-0 border-slate-200 border-r-2">
                    <form @submit.prevent="handleSubmit" class="form-control items-center gap-4">
                        <label class="label w-2/4">
                            <span class="label-text">Reminder name</span>
                        </label>
                        <input type="text" v-model="title" placeholder="Type here" class="input input-bordered text-accent w-full max-w-xs" />
                        
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
                <div class="w-full">
                    <h1>hi</h1>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref, watch } from 'vue';
import getDocument from '@/composables/getDocument';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    props: ['id'],
    components: { Datepicker },
    setup(props) {
        const { document: reminder } = getDocument("reminders", props.id)

        const title = ref(null)
        const description = ref(null)
        const date = ref(null)

        watch(reminder, rem => {
            title.value = rem.title
            description.value = rem.description

            const startDate = new Date();
            date.value = [startDate, rem.remindOn.toDate()];

        })

        return { reminder, title, description, date } 
    }
}
</script>


<style>

</style>