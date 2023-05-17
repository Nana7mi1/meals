<script setup>
import { useMealsStore } from './stores/meals';
import Meals from './components/Meals/Meals.vue'
import MealsFilter from './components/MealsFilter/MealsFilter.vue';
import CartBar from './components/Cart/CartBar.vue';
import Login from './views/Login/Login.vue';
const measlList = useMealsStore()
</script>

<template>
    <!-- <MealsFilter></MealsFilter>
    <Meals :desc="true" :meals="measlList.filterMeals"></Meals>
    <CartBar></CartBar> -->
    <router-view></router-view>

    <!-- <Login></Login> -->
</template>

<style scoped></style>
