<template>

  <NavbarComponent />

  <div class=" flex-auto bg-[#353537]  mt-32 mx-14 p-0">
    <!-- Home -->
    <!-- <HomeComponent /> -->
    <!-- About -->
    <!-- <AboutComponent :skills="skills" /> -->
    <!-- Portfolio -->
    <!-- <PortfolioComponent :portfolioArray="portfolioArray" /> -->
    <!-- Experience -->
    <!-- <ExperienceComponent :experiences="experiences" /> -->
    <!-- <transition name="fade" mode="out-in">
      <RouterView />
    </transition> -->

    <!-- use a dynamic transition name -->
    <RouterView v-slot="{ Component, route }">
      <transition name="scale" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>

  </div>


</template>
<script setup>

// import HomeComponent from "@/components/Home.vue"
// import AboutComponent from "@/components/About.vue"
// import PortfolioComponent from "@/components/Portfolio.vue"
// import ExperienceComponent from "@/components/Experience.vue"

import NavbarComponent from "@/components/Navbar.vue"
import { RouterView } from 'vue-router'





</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>