<template>
  <div class="font-nunito font-bold">
    <div class="navbar bg-neutral rounded-b-3xl">
      <div class="navbar-start">
        <p>epic button</p>
      </div>
      <div class="navbar-center">
        <h1 class="text-primary normal-case text-xl">Reminder app / {{ currentPage }}</h1>
      </div>
      <div class="navbar-end">
        <p>epic button</p>
      </div>
    </div>

  </div>
</template>


<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "NavBar",
  setup() {
    const route = useRoute()

    const currentPage = ref(route.name)

    watch(route, () => {
      currentPage.value = route.name
    })

    return { currentPage }
  }
}
</script>


<style>

</style>