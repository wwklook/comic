import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Search = () => import('../views/SearchView.vue')

const Detail = () => import('../views/Detail.vue')
const Comic = () => import('../views/Comic.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/comic',
    name: 'Comic',
    component: Comic
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
