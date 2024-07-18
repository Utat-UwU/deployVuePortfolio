<template>

        <AboutView :skills="skills"/>

</template>
<script setup>

import AboutView from "@/components/About.vue"
const skills = [
  {
    id: 1,
    icon: "pi pi-globe",
    title: "Web Development",
    desc: "HTML/CSS, Bootstrap, Windtail, Laravel, SQL"
  },
  {
    id: 2,
    icon: "pi pi-chart-line",
    title: "Machine Learning",
    desc: "Tensorflow, Neupy, Pandas"
  },
  {
    id: 3,
    icon: "pi pi-flag",
    title: "Language",
    desc: "English, Bahasa Indonesia"
  }
]
</script>