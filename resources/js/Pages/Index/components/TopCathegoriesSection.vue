<template>
    <section class=" container mx-auto  mt-12 p-4 bg-white  rounded-md ">
        <h1 class="font-extrabold text-xl my-4">TOP CATEGORIES THIS MONTH</h1>
        <div class="flex-wrap gap-4 flex justify-between ">
            <CardTop :name="'Smartphone & Tablets'"></CardTop>
            <CardTop :name="'Smartphone & Tablets'"></CardTop>
            <CardTop :name="'Smartphone & Tablets'"></CardTop>
            <CardTop :name="'Smartphone & Tablets'"></CardTop>
            <CardTop :name="'Smartphone & Tablets'"></CardTop>
        </div>
    </section>
</template>

<script setup>
import CardTop from './CardTop.vue';
</script>

<style lang="scss" scoped>

</style>