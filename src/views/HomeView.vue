<template>
  <div class="text-center font-nunito">
    <h1 class="text-pink-400">Home</h1>
    <button class="btn" @click="handleClick">Hello daisyui</button>
    <div v-for="doc in reminders" :key="doc.id">
      <ReminderCard :title="doc.title" :description="doc.description"/>
      <p>words</p>
    </div>
  </div>
</template>

<script>

import ReminderCard from '@/components/ReminderCard.vue';
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser';

export default {
  name: 'HomeView',
  components: { ReminderCard },
  setup() {
    const { user } = getUser()

    let reminders
    getCollection('reminders', ['userUid','==',user.value.uid]).then(docs => reminders = docs.documents)


    const handleClick = () => {
      console.log(reminders)
    }

    return { reminders, handleClick }
  }
}
</script>
