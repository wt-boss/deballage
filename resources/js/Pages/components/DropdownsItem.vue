<script setup>
const props = defineProps({
    cathegory: Object,
});
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>

<template>
    <Menu as="div" class="relative inline-block text-left flex-grow">
        <div>
            <MenuButton
                class="flex flex-col w-full justify-start items-start gap-x-1.5 bg-transparent px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red"
            >
                {{ cathegory.name }}
                <ChevronDownIcon
                    class="-mr-1 h-6 w-6 text-white"
                    aria-hidden="true"
                />
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <div class="py-1">
                    <MenuItem v-slot="{ active }" >
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >chaussures de sorties</a
                        >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >habit de maison</a
                        >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <a
                            href="#"
                            :class="[
                                active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                'block px-4 py-2 text-sm',
                            ]"
                            >habit de sort</a
                        >
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>
