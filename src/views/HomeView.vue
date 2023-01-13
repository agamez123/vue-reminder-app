<template>
  <div class="text-center font-nunito">
    <h1 class="text-pink-400">Home</h1>
    <button class="btn">Hello daisyui</button>
    <div v-for="doc in reminders" :key="doc.id">
      <ReminderCard :title="doc.title" :description="doc.description"/>
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

    console.log(reminders)

    return { reminders }
  }
}
</script>
