<template>

      <ExperienceView :experiences="experiences"/>  

</template>
<script setup>

import ExperienceView from "@/components/Experience.vue"

const experiences = [
  {
    id: 1,
    year: "",
    title: "Computer Science, Institut Pertanian Bogor",
    desc: `The IPB University Computer Science Study Program is accredited with A accreditation and has a
                        curriculum
                        designed to produce competent and innovative graduates in the field of computer science,
                        especially
                        computational science, system development, data communication and networks, and support research
                        collaboration with other disciplines, especially agricultural sciences in a broad sense,
                        supported by
                        management with ISO 9001: 2015 standards.`
  },
  {
    id: 2,
    year: "",
    title: "Jabar Future Leaders Scholarship",
    desc: "Awardee of Scholarship"
  }, {
    id: 3,
    year: "2023",
    title: "Bangkit Machine Learning Cohort",
    desc: `Publishing Android-based mobile application to provide local, real-time air quality using smartphone camera images`
  },
  {
    id: 4,
    year: "2024",
    title: "Machine Learning Annotator Intern at PT. Nomura Research Institute",
    desc: "Annotate various machine learning datasets, in particular image and video datasets."
  },
]
</script>