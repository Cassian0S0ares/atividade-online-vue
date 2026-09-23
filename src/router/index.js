import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TarefasView from '../views/TarefasView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tarefas', component: TarefasView }
]

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})