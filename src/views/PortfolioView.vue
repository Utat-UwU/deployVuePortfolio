<template>
<PortfolioView :portfolioArray="portfolioArray"/>
        

</template>
<script setup>
import PortfolioView from "@/components/Portfolio.vue"

const portfolioArray = [
  {
    id: 1,
    title: "Gerak.in (UX Study Case)",
    desc: "Usability Case Study to understand the needs of people in exercising and held a sport event.",
    documentasion: "https://docs.google.com/presentation/d/1SvkQZ3pWSobZIsdIPj212u01gx9E4wTwinlB8fjjEyM/edit"
  },
  {
    id: 2,
    title: "WareWareHouse",
    desc: "An application to manage the flow of goods in the warehouse.",
    documentasion: "https://github.com/imrbp/RPL"
  },
  {
    id: 3,
    title: "DesaBoard",
    desc: "System for displaying population data so that village officials can develop strategies to serve the community correctly and on target.",
    documentasion: "https://github.com/MPPLKel6/MPPLProject"
  },
]
</script>