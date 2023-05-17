<script setup>

import { useMealsStore } from "../../stores/meals"
const meals = useMealsStore()
const props = defineProps(["meal"])

</script>

<template>
    <div class="counter">
        <template v-if="props.meal.count > 0">
            <button class="sub" @click="meals.subMealToCart(props.meal)"><i class="ri-subtract-line"></i></button>
            <span class="count">{{ props.meal.count }}</span>
        </template>

        <button class="add" @click="meals.addMealToCart(props.meal)"><i class="ri-add-line"></i></button>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
    align-items: center;
}


.sub,
.add {
    width: 36rem;
    height: 36rem;
    background-color: rgb(234, 178, 0);
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32rem;
    /* font-weight: bold; */
}

i{
    width: 36rem;
    height: 36rem;
}
.sub {
    background-color: #fff;
    border: 1px solid #000;
}

.count {
    font-size: 30rem;
    margin: 0 20rem;
}

</style>