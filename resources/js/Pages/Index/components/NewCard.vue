<template>
    <div class="bg-white p-4 rounded-md shadow-sm shadow-slate-200 ">
        <h1 class="font-extrabold">{{ name }}</h1>
        <ul class="flex justify-between gap-2">
            <li class="flex flex-col items-center gap-2">
                <img
                    src="../../../../img/cat9.jpg"
                    class="object-cover w-[125px] h-[125px] hover:scale-110 transition-transform duration-300 ease-in-out"
                    alt=""
                />
                <div class="text-center">
                    <h2>Other</h2>
                    <span>1.000FCFA</span>
                </div>
            </li>
            <li class="flex flex-col items-center gap-2">
                <img
                    src="../../../../img/cat15.jpg"
                    class="object-cover w-[125px] h-[125px] hover:scale-110 transition-transform duration-300 ease-in-out"
                    alt=""
                />
                <div class="text-center">
                    <h2>Other</h2>
                    <span>1.000FCFA</span>
                </div>
            </li>
            <li class="flex flex-col items-center gap-2">
                <img
                    src="../../../../img/cat1.webp"
                    class="object-cover w-[125px] h-[125px] hover:scale-110 transition-transform duration-300 ease-in-out"
                    alt=""
                />
                <div class="text-center">
                    <h2>Other</h2>
                    <span>1.000FCFA</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    name:String,
}) 

</script>

<style lang="scss" scoped></style>
