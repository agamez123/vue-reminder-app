<template>
  <h1 class="text-6xl font-bold mt-24 text-slate-800">very cool reminder app</h1>
  <ReminderList />
</template>

<script>
import ReminderList from './components/ReminderList.vue'

export default {
  name: 'App',
  components: {
    ReminderList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
