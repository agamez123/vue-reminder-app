<template>
  <div class="text-center font-nunito text-pink-400">
    <h1 class="text-pink-400">Home</h1>
    <button class="btn" @click="handleClick">Hello daisyui</button>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="doc in reminders" :key="doc.id">
        <div>
          <router-link :to="{ name:'reminder', params: { id: doc.id } }">
            <ReminderCard :title="doc.title" :description="doc.description"/>
          </router-link>
        </div>
      </div>
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
    const { documents: reminders } = getCollection('reminders', ['userUid','==',user.value.uid])

    const handleClick = () => {
      console.log(reminders)
    }

    return { reminders, handleClick }
  }
}
</script>
