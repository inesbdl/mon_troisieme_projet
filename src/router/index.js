import { createRouter, createWebHistory } from 'vue-router'
import ArticleComponent from '@/components/ArticleComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import ArticlesComponent from '@/components/ArticlesComponent.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesComponent
    }, 
    {
      path: '/articles/:id',
      name: 'article',
      component: ArticleComponent
    }, 
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
  ]
})

export default router
