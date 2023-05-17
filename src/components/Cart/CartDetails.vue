<script setup>
import { useMealsStore } from "../../stores/meals";
import Meals from "../Meals/Meals.vue"
import Mask from "../UI/Mask.vue";
import { ref } from "vue"
import Dialog from "../UI/Dialog.vue";
const meals = useMealsStore()
const emits = defineEmits(["hide"])
const showDialog = ref(false)


const okHandler = ()=>{
    meals.clearCart()
    showDialog.value=false
    emits("hide")
}


</script>

<template>

    <Mask style="z-index: 999">
        <Dialog
        @ok="okHandler"
            :is-show="showDialog"
            @hide="showDialog=false"
            msg="确认是否清空购物车"
        ></Dialog>

        <div class="cart-details">
            <div class="header">
                <h2>已选餐品</h2>
                <a @click="showDialog=true" href="javascript:;">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :desc="false" :meals="meals.cartMeals"></Meals>
        </div>
    </Mask>
</template>

<style scoped>
.cart-details {
    position: absolute;
    bottom: 0;
    width: 750rem;
    /* height: 200rem; */
    max-height: 70%;
    background-color: #fff;
    overflow: auto;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
}

.meals {
    height: 100%;
    padding-top: 40rem;
    padding-bottom: 180rem;
}

.header {
    position: fixed;
    width: 750rem;
    background-color: #fff;
    border-top-left-radius: 40rem;
    border-top-right-radius: 40rem;
    display: flex;
    justify-content: space-between;
    padding: 40rem 40rem;
}

.header h2 {
    font-size: 30rem;
}

.header a {
    color: #9f9f9f;
    font-size: 25rem;
}
</style>