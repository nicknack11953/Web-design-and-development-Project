import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import Name from "@/views/champion/Name.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/champion/:name",
    name: "Name",
    component: Name,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
