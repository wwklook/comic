import { createRouter, createWebHistory } from 'vue-router'

const Comic = () => import('../views/Comic.vue')
const Home = () => import('../views/Home.vue')
const Search = () => import('../views/SearchView.vue')

const Detail = () => import('../views/Detail.vue')
const Content = () => import('../views/Content.vue')

const routes = [
  {
    path: '',
    redirect: '/comic/home'
  },
  {
    path: '/comic',
    name: 'Comic',
    component: Comic,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'search',
        name: 'Search',
        component: Search
      },
      {
        path: 'detail',
        name: 'Detail',
        component: Detail
      },
      {
        path: 'content',
        name: 'Content',
        component: Content
      },
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
