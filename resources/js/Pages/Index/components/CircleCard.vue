<script setup>

const props = defineProps({
    cathegory: Object,
});
</script>

<template>
    <div>
        <img
            :src=props.cathegory.img
            class="object-cover w-[50px] h-[50px] hover:scale-110 transition-transform duration-300 ease-in-out rounded-full"
            :alt=props.cathegory.img
        />
            <span>{{ props.cathegory.name }}</span>
        
    </div>
</template>

<style lang="scss" scoped></style>
