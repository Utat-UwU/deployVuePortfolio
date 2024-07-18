<template>
  <div id="about" class="container mt-20">
    <section class="bg-[#d6b75a] pl-2 pt-20">
      <h2 class=" text-5xl ml-20 my-0 font-bold  text-black font-roboto">ABOUT ME</h2>
    </section>
    <div class="container grid md:grid-cols-1 lg:grid-cols-2 grid-flow-row">
      <section class=" mx-20">
        <p class=" text-justify mt-20 text-white">
          My name is Putra Dwi Prasetyo. I am a Junior Web Developer. I love to learn new things and get to
          know about
          other people. <br>
          I graduated from Computer Science Department, Institut Pertanian Bogor. <br>
          Other than Web Developing, I also have interest in machine learning domain.
        </p>
      </section>
      <section class=" flex justify-center mt-14">
        <img :src="diri" alt="" class=" rounded-full size-60 justify-center">
      </section>


    </div>
    <div class="container grid md:grid-cols-2 lg:grid-cols-3 auto-cols-min mt-10 gap-5 px-5 justify-center">

      <div class="card bg-[#d6b75a] flex flex-1 " v-for="skill in skills">
        <div class="card-body flex justify-center text-center">
          <i class="text-[50px] text-center text-black" :class="skill.icon"></i>
          <h2 class="card-title text-black text-2xl font-bold self-center">{{ skill.title }}</h2>
          <p class="text-black text-center">{{ skill.desc }}</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import diri from "@/assets/diri.jpeg";
const props = defineProps({
  skills: {
    type: Array,
    required: true
  }

})
</script>