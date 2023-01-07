<template>
  <div class="font-nunito font-bold">
    <div class="navbar bg-neutral rounded-b-3xl">
      <div class="navbar-start">
        <div v-if="user">
          <router-link :to="{ name: 'home' }"><button class="btn">Home</button></router-link>
          <router-link :to="{ name: 'create' }"><button class="btn">Create</button></router-link>
        </div>
      </div>
      <div class="navbar-center">
        <h1 class="text-primary normal-case text-xl">Reminder app / {{ currentPage }}</h1>
      </div>
      <div class="navbar-end">
        <div v-if="!user">
          <router-link :to="{ name: 'signup' }"><button class="btn">Signup</button></router-link>
          <router-link :to="{ name: 'login' }"><button class="btn">Login</button></router-link>
        </div>
        <div v-if="user">
          <button @click="handleClick" class="btn">Logout</button>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
import { signOut } from '@firebase/auth';
import { auth } from '@/firebase/config';

export default {
  name: "NavBar",
  setup() {
    const { user } = getUser()

    const router = useRouter()
    const route = useRoute()
    const currentPage = ref(route.name)

    watch(route, () => {
      currentPage.value = route.name
    })

    watchEffect(() => {
      if (!user.value) {
        router.push({ name: 'login' })
      }
    })

    const handleClick = () => {
      signOut(auth)
    }

    return { currentPage, user, handleClick }
  }
}
</script>


<style>

</style>