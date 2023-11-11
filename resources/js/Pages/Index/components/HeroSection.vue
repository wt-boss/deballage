<template>
    <div class="container flex justify-center md:justify-between gap-4 mx-auto ">
        <Sidebar class=" hidden md:block"></Sidebar>

        <div class="hero  w-full md:w-4/5 ">
            <Carousel></Carousel>
            <div class=" service flex justify-around gap-2 p-4 rounded-md shadow-sm bg-white shadow-slate-200 mt-4 ">
                <div class=" ">
                    <h1 class="text-sm font-bold ">Service 1</h1>
                    <p class="text-sm "> Lorem ipsum dolor sit amet.</p>
                </div>
                <div class=" ">
                    <h1 class="text-sm font-bold ">Service 1</h1>
                    <p class="text-sm "> Lorem ipsum dolor sit amet.</p>
                </div>
                <div class=" ">
                    <h1 class="text-sm font-bold ">Service 1</h1>
                    <p class="text-sm "> Lorem ipsum dolor sit amet.</p>
                </div>
            </div>            
        </div>

        <HeroCard class=" hidden md:block"></HeroCard>

        

    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Carousel from './Carousel.vue'
import HeroCard from './HeroCard.vue';


    
</script>
<style lang="scss" scoped>

</style>