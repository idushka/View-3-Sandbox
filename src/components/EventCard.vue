<script setup>

defineProps({
  event: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <RouterLink :to="{ name: 'event-details', params: { id: event.id }}">
    <div  class="group event-card flex justify-between gap-x-6 p-5 hover:bg-sky-500 hover:ring-sky-500">
      <div class="flex min-w-0 gap-x-4">
        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="event.imageUrl" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="group-hover:text-white text-sm font-semibold leading-6 text-gray-900">{{ event.name }}</p>
          <p class="group-hover:text-white mt-1 truncate text-xs leading-5 text-gray-500">{{ event.email }}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="group-hover:text-white text-sm leading-6 text-gray-900">{{ event.role }}</p>
        <p v-if="event.lastSeen" class="group-hover:text-white mt-1 text-xs leading-5 text-gray-500">
          Last seen <time :datetime="event.lastSeenDateTime">{{ event.lastSeen }}</time>
        </p>
        <div v-else class="mt-1 flex items-center gap-x-1.5">
          <div class="flex-none rounded-full bg-emerald-500/20 p-1">
            <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p class="group-hover:text-white text-xs leading-5 text-gray-500">Online</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
</style>
