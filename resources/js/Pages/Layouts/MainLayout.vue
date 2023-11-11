<template>
    <div>
        <Nav></Nav>
        <slot></slot>
        <Footer></Footer>

    </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped>

</style>