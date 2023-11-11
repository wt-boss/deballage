<template>
    <div class="sidebar relative  p-4 bg-gray-100 shadow-sm shadow-slate-200 rounded-sm w-1/4 ">
        <ul class=" flex flex-col gap-2 ">
            <li v-for="cathegory in cathegories.cathegories">
              <DropdownsItemSidebar :cathegory="cathegory"></DropdownsItemSidebar>
               
            </li>
         
        </ul>
    </div>
</template>

<script setup>
import DropdownsItemSidebar from '../../components/DropdownsItemSidebar.vue';
import cathegories from '../../assets/data/cathegories';


</script>

<style lang="scss" scoped>

</style>