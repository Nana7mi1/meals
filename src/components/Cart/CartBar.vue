<script setup>
import cartBag from "../../assets/bag.png"
import { ref } from "vue";
import { useMealsStore } from "../../stores/meals";
import CartDetails from "./CartDetails.vue";
import Checkout from "../Checkout/Checkout.vue";

const meals = useMealsStore()
const showDetails = ref(false)

const changeMask = () => {
    if (meals.totalCount > 0)
        showDetails.value = !showDetails.value
}
const isShowCheckout = ref(false)

</script>

<template>
    <Checkout :is-show="isShowCheckout" @close="isShowCheckout=false"></Checkout>

    <CartDetails :is-show="showDetails" @hide="showDetails = false"></CartDetails>


    <div class="cart-bar">
        <div class="cart-bag" @click="changeMask">
            <img :src="cartBag" alt="" />
            <span v-show="meals.totalCount > 0" class="total-count">{{ meals.totalCount }}</span>
        </div>
        <div class="total-amount">
            <p v-show="meals.totalCount <= 0" class="no-goods">未选购餐品</p>
            <p v-show="meals.totalCount > 0" class="have-goods" @click="changeMask">{{ meals.amount }}</p>
        </div>
        
        <button v-if="meals.totalCount <= 0" class="no-check-out">去结算</button>
        <button v-if="meals.totalCount > 0" @click="isShowCheckout=true" class="check-out">去结算</button>
    </div>
</template>

<style scoped>
.cart-bar {
    background-color: #3a3a3a;
    position: fixed;
    height: 100rem;
    bottom: 40rem;
    width: 700rem;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 60rem;
    z-index: 9999;

}

.cart-bag {
    width: 100rem;
    position: absolute;
    bottom: -10rem;
}

.total-count {
    /* 有问题，需要改 */
    width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    background-color: red;
    border-radius: 20rem;
    position: absolute;
    right: -20rem;
    color: #fff;

}

.total-amount {
    /* margin-left: 150rem;
    line-height: 100rem; */
    margin-left: 140rem;
    line-height: 100rem;
}

.no-goods,
.have-goods {
    color: rgb(148, 148, 148);
    font-size: 36rem;
    font-weight: bold;
    /* text-align: center; */
}

.have-goods {
    color: #fff;
}

/* 单独设置rmb样式 */
.have-goods::before {
    content: "￥";
    font-size: 25rem;
}

.no-check-out, .check-out {
    position: absolute;
    top: 0;
    right: 0;
    width: 200rem;
    height: 100%;
    border-radius: 60rem;
    border: none;
    background-color: rgb(248, 188, 0);
    font-size: 36rem;
}

.no-check-out{
    background-color: #6b6b6b;
    color: #bfbfbf;
}
</style>