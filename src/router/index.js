import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/register-view.vue'
import Home from '../views/home-view.vue'
import Resourse from '../views/resource-view.vue'

const routes =  [
  {
    path:"/",
    name:"Home",
    component:Home
  },
  {
      path:"/register",
      name: "Register",
      component: Register
  },
  {
    path:'/resource',
    name:"Resource",
    component:Resourse
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.afterEach(()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
})

export default router
