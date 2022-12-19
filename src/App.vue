<template>
  <h1 class="text-6xl font-bold mt-24 text-slate-800">very cool reminder app</h1>
  <p>{{ hello }}</p>
  <ReminderList />
</template>

<script>
import ReminderList from './components/ReminderList.vue'
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      hello: null,
    }
  },
  components: {
    ReminderList,
  },
  mounted() {

    axios.get('/.netlify/functions/netlify-functions').then(response => (this.hello = response.data.message))

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
