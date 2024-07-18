import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import PortfolioView from "@/views/PortfolioView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/portofolio',
      component: PortfolioView
    },
    {
      path: '/experience',
      component: ExperienceView
    },
    {
      path: '/about',
      component: AboutView
    }
  ]
})

export default router
