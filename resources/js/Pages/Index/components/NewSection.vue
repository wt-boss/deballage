<template>
    <section class=" flex  container mx-auto  gap-4 mt-12 bg-white rounded-md p-4">
        <NewCard :name="'New Arrivals'"></NewCard>
        <NewCard :name="'Today\'s Deals'"></NewCard>
        <NewCard :name="'Products below 20 000FCFA'"></NewCard>


</section>
</template>

<script setup>
import NewCard from './NewCard.vue';

</script>

<style lang="scss" scoped>

</style>