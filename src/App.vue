<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout" class="container mx-auto">
    <header>
      <RouterLink :to="{ name: 'event-list' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
