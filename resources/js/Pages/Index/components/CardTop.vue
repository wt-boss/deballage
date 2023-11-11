<template>
    <div class="flex  gap-4 p-3 bg-white rounded-md shadow-md shadow-slate-300 p-4">
        <img
            src="../../../../img/cat9.jpg"
            class="object-cover  h-[125px] hover:scale-110 transition-transform duration-300 ease-in-out"
            alt=""
        />
        <div class="flex-col flex">
            <h2 class="font-extrabold">{{ name }}</h2>
            <ul class=" flex flex-col">
                <li>
                    <a href="#"> cathegories link</a>
                </li>

                <li>
                    <a href="#"> cathegories link</a>
                </li>
                <li>
                    <a href="#"> cathegories link</a>
                </li>
                <li>
                    <a href="#"> cathegories link</a>
                </li>
               
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name:String,
}) </script>

<style lang="scss" scoped></style>
