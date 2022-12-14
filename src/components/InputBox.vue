<template>
    <input type="text" v-model="inputText" placeholder="Do homework..."
        class="text-white p-2 m-5 bg-slate-600 border-4 rounded-xl border-separate border-orange-200">
    <input type="date" v-model="inputDate"
        class="text-white p-2 m-5 bg-slate-600 border-4 rounded-xl border-separate border-orange-200">
    <button @click="addReminderItem"
        class="font-sans font-bold text-blue-100 p-2 bg-slate-600 border-4 rounded-xl border-separate border-blue-200">Submit</button>
</template>

<script>

export default {
    name: 'InputBox',
    data() {
        return {
            inputText: '',
            inputDate: '',
            reminderItem: {}
        }
    },
    methods: {
        addReminderItem() {
            this.reminderItem = {
                reminderText: this.inputText,
                reminderDate: this.currentDate,
                reminderDueDate: this.inputDate
            }
            this.$emit("reminderCreated", this.reminderItem)
        },
    },
    computed: {
        currentDate() {
            let date = new Date()
            let dd = String(date.getDate()).padStart(2, '0')
            let mm = String(date.getMonth() + 1).padStart(2, '0')

            return mm + '/' + dd
        }
    }
}
</script>