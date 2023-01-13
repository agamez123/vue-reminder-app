<template>
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
            <h2 class="card-title text-secondary">{{ title }}</h2>
            <p class="text-gray-400">{{ description }}</p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ReminderCard',
    props: ['title','description'],
    setup() {

    }
}
</script>


<style>

</style>