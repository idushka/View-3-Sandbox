import axios from "axios";

// Create axios defaults
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/idushka/View-3-Sandbox',
  withCredentials: false,
  headers:  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default {
  getEvents(){
    return apiClient.get('/events')
  },
  getEventById(id){
    return apiClient.get('/events/' + id)
  }
}