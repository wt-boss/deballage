<template>
    <form action="" class="flex bg-white rounded-full lg:w-1/2 p-1">
        <input
            type="text"
            placeholder="search women and men clothes and chooses"
            name="searchItem"
            id="searchItem"
            class="bg-transparent border-none focus:border-none w-full focus:border-0 focus:border-transparent focus:!outline-0 focus:ring-0 important h-[35px] text-gray-900 ml-2"
        />
        <button
            type="submit"
            class="flex bg-red items-center justify-center gap-1 px-2 rounded-full"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>

            Search
        </button>
    </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
