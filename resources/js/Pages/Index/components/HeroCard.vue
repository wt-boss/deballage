<template>
    <div class="flex flex-col gap-4">
        <div
            class="user rounded-sm p-4 shadow-sm shadow-slate-300 bg-white flex flex-col items-center rounded-xl"
        >
            <UserCircleIcon class="w-10"></UserCircleIcon>

            <div class="welcom text-center">
                <p>welcome</p>
                <span class="font-bold text-xl">Yvan Megnemo</span>
            </div>
            <div class="mt-5 flex ">
                <Button children="Connexion" class="bg-red"></Button>
                <Button children="sign up" class="bg-black"></Button>
            </div>
        </div>

        <div class="special-deals bg-white rounded-md  shadow-md  p-4">
            <h2>Special Deals Today</h2>
            <p>find product on promotion</p>
            <ul class="flex flex-col gap-2">
                <li>
                    <a
                        href="#"
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:w-[200px] md:flex-row md:max-w-xl hover:bg-gray-100"
                    >
                        <img
                            class="object-cover w-full rounded-t-lg h-96 md:h-[100px] md:w-1/4 md:rounded-none md:rounded-l-lg"
                            src="../../../../img/cat5.webp"
                            alt=""
                        />
                        <div class="flex flex-col justify-between p-2">
                            <h5
                                class="mb-2 tracking-tight text-gray-900 dark:text-white"
                            >
                                2 Stock
                            </h5>
                            <p
                                class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                            >
                                17,000 FCFA
                            </p>
                        </div>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:w-[200px] md:flex-row md:max-w-xl hover:bg-gray-100"
                    >
                        <img
                            class="object-cover w-full rounded-t-lg h-96 md:h-[100px] md:w-1/4 md:rounded-none md:rounded-l-lg"
                            src="../../../../img/cat1.webp"
                            alt=""
                        />
                        <div class="flex flex-col justify-between p-2">
                            <h5
                                class="mb-2 tracking-tight text-gray-900 dark:text-white"
                            >
                                2 Stock
                            </h5>
                            <p
                                class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                            >
                                17,000 FCFA
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { UserCircleIcon } from "@heroicons/vue/20/solid";
import Button from "../../components/Button.vue";
</script>

<style lang="scss" scoped></style>
