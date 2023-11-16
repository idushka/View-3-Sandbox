<script setup>
import { ref, onMounted } from "vue";
import EventService from "@/services/EventService";

const props = defineProps({
  id: {
    required: true
  }
})

const event = ref(null);


onMounted(()=>{
// fetch event by id and set local data
  EventService.getEventById(props.id)
    .then((response)=>{
      event.value = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
})

</script>

<template>
  <div v-if="event">
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Event Information</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Event details and application.</p>
      <img :src="event.imageUrl"/>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.name }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Event role</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.role }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.email }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Last Seen</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.lastSeen }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style>

</style>