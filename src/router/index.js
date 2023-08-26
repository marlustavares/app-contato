import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Contatos',
    name: 'Contatos',
    component: () => import('../views/Contatos.vue')
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
