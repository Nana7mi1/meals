<script setup>
import Mask from './Mask.vue';
const props = defineProps(["msg"])
const emits = defineEmits(["ok"])
</script>

<template>
    <Mask>
        <div class="dialog">
            <p class="msg">{{ props.msg }}</p>
            <div class="btn">
                <button @click="$emit('hide')" class="cancel">取消</button>
                <button class="ok"
                @click="$emit('ok')">
                    确定
                </button>
            </div>
        </div>
    </Mask>
</template>

<style scoped>
.dialog {
    position: absolute;
    width: 700rem;
    height: 250rem;
    background-color: #fff;
    border-radius: 40rem;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.msg {
    height: 130rem;
    font-size: 40rem;
    text-align: center;
    line-height: 100rem;
    /* background-color: #bfa; */
    border-radius: 40rem;
}

.btn {
    display: flex;
    justify-content: space-around;
    /* background-color: aqua; */
}

button {
    width: 300rem;
    height: 80rem;
    border-radius: 40rem;
    border: 1px solid #898989;
    background-color: #fff;
    font-size: 32rem;
}

.ok {
    background-color: rgb(248, 188, 0);
    border: none;
    font-weight: bold;
}
</style>