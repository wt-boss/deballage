<script setup>
import NavForm from "./NavForm.vue";
import DropdownsItem from "./DropdownsItem.vue";
import DropdownLang from "./DropdownLang.vue";
import Button from "./Button.vue";
import {
    ShoppingCartIcon,
    HeartIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/outline";
import cathegories from "../assets/data/cathegories";
import { ref } from "vue";

const show_nav = ref(false);
const set_nav = (state) => {
    show_nav.value = state;

    console.log(show_nav.value);
};
</script>

<template>
    <nav class="hidden lg:flex px-8 pt-4 bg-black flex-col text-gray-100">
        <div
            class="hidden navlink lg:flex justify-between items-center mx-auto container"
        >
            <div class="lang flex justify-between gap-4">
                <span class="">ENG</span>
                <span>FR</span>
            </div>

            <div class="flex justify-between gap-10 items-center">
                <ul
                    class="links flex justify-between gap-6 text-white items-center"
                >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <Button :children="'connexion'" class="flex bg-red"></Button>
            </div>
        </div>
        <div
            class="brand_search flex justify-between items-center mx-auto gap-7 mt-2 container "
        >
            <img
                src="../../../img/logo_blanc.jpg"
                class="block w-[150px]"
                alt="logo deballage"
            />
            <NavForm></NavForm>

            <div class="nav-icons text-white flex gap-2 items-center">
                <ShoppingCartIcon class="w-6 h-6" />
                <HeartIcon class="w-6 h-6" />
            </div>
        </div>
        <div
            class="cathegories hidden lg:flex justify-start mt-4 mx-auto container"
        >
            <DropdownsItem
                :cathegory="cathegory"
                v-for="cathegory in cathegories.cathegories"
            ></DropdownsItem>
        </div>
    </nav>

    <nav
        class="lg:hidden px-8 pt-4 flex bg-black flex-col text-gray-100 gap-2 pb-3"
    >
        <div
            class="brand_search flex justify-between items-center mx-auto container gap-7 mt-2"
        >
            <img
                src="../../../img/logo_blanc.jpg"
                class="block w-[150px]"
                alt="logo deballage"
            />

            <div class="nav-icons text-white flex gap-2 items-center">
                <ShoppingCartIcon class="w-6 h-6" />
                <HeartIcon class="w-6 h-6" />
            </div>
            <Bars3Icon
                class="w-6 h-6"
                @click="() => set_nav(true)"
                as="button"
            ></Bars3Icon>
        </div>
        <NavForm></NavForm>
        <Transition name="nav">
            <div
                class="links flex flex-col gap-7 absolute bg-black e z-50 w-3/4 p-4 gap-4 right-0 top-0"
                v-show="show_nav"
            >
                <div class="mobile-mennu flex items-center justify-between">
                    <img
                        src="../../../img/logo_blanc.jpg"
                        class="block w-[100px]"
                        alt="logo deballage"
                    />
                    <DropdownLang :name="'Francais'"></DropdownLang>
                    <XMarkIcon
                        class="w-6 h-6"
                        @click="() => set_nav(false)"
                        as="button"
                    ></XMarkIcon>
                </div>
                <div class="acccount">
                    <h1>MY ALEIGRO ACCOUNT</h1>
                    <ul
                        class="links flex flex-col gap-2 justify-between mt-2 text-sm opacity-90"
                    >
                        <li><a href="#">Login to Account </a></li>
                        <li><a href="#">Register for free</a></li>
                        <li><a href="#">Tract my order</a></li>
                        <li><a href="#">Learn about selling</a></li>
                        <li><a href="#">Verified Suppliers</a></li>
                    </ul>
                </div>

                <div class="cathegories">
                    <h1>SHOPPING CATEGORIES</h1>
                    <ul class="links flex flex-col gap-2 justify-between mt-2">
                        <li v-for="i in 10">
                            <a
                                href="#"
                                class="flex justify-between items-center text-sm opacity-90"
                                >Cathegory {{ i
                                }}<ChevronRightIcon
                                    class="w-6"
                                ></ChevronRightIcon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
.nav-enter-from {
    transform: translateX(100%);
}
.nav-enter-to {
    transform: translateX(0);
}

.nav-enter-active,
.nav-leave-active {
    transition: all 1s ease-in-out;
}

.nav-leave-from {
}
.nav-leave-to {
    transform: translateX(100%);
}
</style>
