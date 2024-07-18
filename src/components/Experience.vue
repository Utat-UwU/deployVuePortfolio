<template>

    <div id="works" class="container bg-[#e3e1e4]">
        <h2 class="text-3xl font-bold mb-10 text-black pt-10">
            My Experience
        </h2>
        <section>

            <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4" v-for="experience in experiences">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ experience.year }} </time>
                    <h3 class="text-lg font-semibold text-black">{{ experience.title }}</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ experience.desc }}
                    </p>
                </li>
            </ol>


        </section>
        <!-- {{ experiences }} -->
    </div>

</template>
<script setup>
const props = defineProps({
    experiences: {
        type: Array,
        required: true
    }
})
</script>