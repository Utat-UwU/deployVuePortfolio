<template>
    <div id="porto" class="container mb-10  bg-[#e3e1e4]">
        <h2 class="text-3xl font-bold text-black pt-10">
            My Portfolio
        </h2>
        <div class="container grid md:grid-cols-2 lg:grid-cols-3 justify-center mt-10 mr-20 bg-[#e3e1e4] gap-3">
            <div class="card bg-[#353537] flex-1" v-for="portfolio in portfolioArray">
                <div class="card-body flex  content-center">
                    <h2 class="card-title text-white text-2xl font-bold flex self-center">{{ portfolio.title }}</h2>
                    <p class="text-white text-center">{{ portfolio.desc }}</p>
                    <a class="text-right" :href="portfolio.documentasion">
                        <button class="btn btn-primary">
                            Documentation
                        </button>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    portfolioArray: {
        type: Array,
        required: true
    }
}
)
</script>