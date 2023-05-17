<script setup>
import Meal from './Meal.vue';
const props = defineProps(["meals"])
</script>

<template>
    <!-- 又有汉堡的容器 -->
    <div class="meals">
        <Meal :desc="$attrs.desc" 
        v-for="item in props.meals" :meal="item"></Meal>
        <span v-if="!props.meals || props.meals.length == 0">抱歉，未找到您想要的餐品
        </span>
    </div>
</template>

<style scoped>
/* 充满视口 */
.meals {
    height: calc(100vh - 120rem);
    padding-bottom: 160rem;
    /* background-color: orange; */
    overflow: auto;
}

.meals span {
    height: 200rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30rem;
    color: #7e7e7e;
}
</style>