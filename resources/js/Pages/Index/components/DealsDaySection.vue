<template>
    <section class="container mx-auto mt-12 p-4 bg-white rounded-md">
        <h1 class="font-extrabold text-xl my-4">DEALS OF THE DAY</h1>
        <div class="flex-wrap gap-4 flex justify-between">
            <VerticalCArd></VerticalCArd>
            <VerticalCArd></VerticalCArd>
            <VerticalCArd></VerticalCArd>
            <VerticalCArd></VerticalCArd>
            <VerticalCArd></VerticalCArd>
            <VerticalCArd></VerticalCArd>
        </div>
    </section>
</template>

<script setup>
    import VerticalCArd from './VerticalCArd.vue';
</script>

<style lang="scss" scoped></style>
