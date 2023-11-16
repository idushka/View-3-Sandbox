<script setup>
import { ref, onMounted } from "vue";
import EventService from "@/services/EventService";
import EventCard from "@/components/EventCard.vue";

const events = ref(null)

onMounted(() => {
// get events from mock db when the component is created
  EventService.getEvents()
    .then((response)=>{
      events.value = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
})
</script>

<template>
  <div class="home">
    <ul role="list" class="divide-y divide-gray-100">
      <li v-for="event in events" :key="event.email">
        <EventCard :event="event"  />
      </li>
    </ul>
  </div>
</template>
