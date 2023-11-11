<template>
    <button type="button" class="text-white   focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 hover:opacity-75" >{{props.children}}</button>

</template>

<script setup>
const props = defineProps(['children'])
</script>

<style lang="scss" scoped>

</style>