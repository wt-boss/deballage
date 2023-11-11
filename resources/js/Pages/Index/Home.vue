<template>
    <div class="bg-gray-200 py-6 px-4">
        <HeroSection></HeroSection>
        <NewSection></NewSection>
        <TopCathegoriesSection></TopCathegoriesSection>
        <DealsDaySection></DealsDaySection>
        <SectionSelling></SectionSelling>
        <RecommendeSection></RecommendeSection>
        <BrandSection></BrandSection>

        
    </div>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import NewSection from "./components/NewSection.vue";
import TopCathegoriesSection from "./components/TopCathegoriesSection.Vue";
import DealsDaySection from "./components/DealsDaySection.vue";
import SectionSelling from "./components/SectionSelling.vue";
import RecommendeSection from './components/RecommendeSection.vue'
import BrandSection from "./components/BrandSection.vue";
</script>

<style lang="scss" scoped></style>
