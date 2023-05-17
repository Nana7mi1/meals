<script setup>
import { useMealsStore } from '../../stores/meals';
const meals = useMealsStore()
</script>

<template>
    <div class="filter">
        <div class="filter-inner">
            <input v-model="meals.keyword"
            type="text" placeholder="请输入关键字">
            <i class="ri-search-line"></i>
        </div>

    </div>
</template>

<style scoped>
.filter {
    padding: 20rem 40rem;
    /* background-color: orange; */
    border-bottom: 1px #e6e6e6 solid;
}

.filter-inner {
    height: 80rem;
    display: flex;
    align-items: center;
    position: relative;
}

input {
    background-color: rgb(242, 242, 242);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40rem;
    outline: none;
    padding: 0 40rem 0 80rem;
}

.filter-inner i {
    position: absolute;

    color: rgb(184, 184, 184);
    font-size: 32rem;
    left: 30rem;
}
</style>