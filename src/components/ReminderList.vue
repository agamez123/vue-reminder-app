<template>
    <div class="mt-16">
        <InputBox @reminderCreated="addReminder" />
    </div>
    <ul class="m-16 mt-0 p-10">
        <li class="font-bold flex w-full justify-center items-center">
            <h1 class="w-2/6">Reminder</h1>
            <h1 class="w-2/6">Created Date</h1>
            <h1 class="w-2/6">Due Date</h1>
        </li>
        <li v-for="reminder in reminders" :reminder="reminder"
            class="text-white flex w-full justify-center items-center">

            <div class="w-2/6 break-words">
                {{ reminder.reminderText }}
            </div>
            <div class="w-2/6">
                {{ reminder.reminderDate }}
            </div>
            <div class="w-2/6">
                {{ reminder.reminderDueDate }}
            </div>


        </li>

    </ul>
</template>

<script>
import InputBox from './InputBox.vue'

export default {
    name: 'ReminderList',
    data() {
        return {
            reminders: []
        }
    },
    components: {
        InputBox,
    },
    methods: {
        addReminder(e) {
            this.reminders.push(e)
        }
    }
}
</script>

<style>
p,
h3,
ul {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
    background: #547788;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
    max-width: 960px;
}
</style>