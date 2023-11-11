<template>
    <section class="bg-white rounded-sm  shadow-sm shadow-stone-200 flex justify-center container mx-auto mt-12 gap-16 ">
        <div class="flex flex-col gap-5 justify-center p-16">
            <h1 class="text-6xl font-extrabold text-gray-900">Reach millions of B2B and B2C buyers globally with Aleigro</h1>

            <p class=" text-lg text-gray-900 ">
                Differentiate yourself from the competition with a full store
                dedicated to your products- no coding or design skills
                necessary!. Become part of the Aleigro sellers community today
                and watch your business growth like magic.
            </p>
            <div class="flex justify-center"><Button :children="'Start Selling -It\'s Free'" class="bg-red "></Button></div>
            
        </div>
        <img src="../../../../img/pub.jpg" class=" object-cover w-1/2 min-h[1000px]" alt="">
    </section>
</template>

<script setup>
import Button from '../../components/Button.vue';

</script>
<style lang="scss" scoped></style>
