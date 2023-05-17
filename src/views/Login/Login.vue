<script setup>
import { ref } from "vue";
import { loginApi } from "../../apis/testAPI"

const phone = ref("");
const password = ref("");

const login = () => {
    const data = {
        "userName": phone.value,
        "password": password.value
    };
    console.log(data);
    loginApi(data).then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
    }).catch(error => {
        console.log(error);
        // 处理错误情况
    })
}

</script>

<template>
    <div class="login">
        <div class="login-wrap">
            <div class="title">
                <h2>登录后开始点餐</h2>
            </div>

            <div class="phone">
                <i class="ri-smartphone-line"></i>
                <input v-model="phone" type="text" placeholder="请填写手机号" />
            </div>

            <div class="password">
                <i class="ri-lock-2-line"></i>
                <input v-model="password" maxlength="6" type="text" placeholder="请输入短信验证码" />
                <div class="btnQrCode">
                    <button type="button" class="qrbtn">
                        <span>获取验证码</span>
                    </button>
                </div>
            </div>
            <button class="loginbtn" @click="login">登录</button>
        </div>
    </div>
</template>

<style scoped>
.login {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgb(240, 240, 240);
}

.login-wrap {
    position: absolute;
    width: 700rem;
    height: 900rem;
    background-color: #fff;
    border-radius: 40rem;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.title {
    margin: 70rem 50rem 120rem 50rem;
    border-radius: 40rem;
    height: 60rem;
    font-size: 40rem;
    line-height: 60rem;
}

.phone,
.password {
    height: 80rem;
    display: flex;
    align-items: center;
    position: relative;
    margin: 50rem 50rem;
}

input {
    width: 100%;
    height: 100%;
    border-radius: 10rem;
    outline: none;
    padding: 0 40rem 0 80rem;
    font-size: 30rem;
    border: 1px solid #ececec;
    vertical-align: middle;
}

.phone i {
    position: absolute;

    color: rgb(184, 184, 184);
    font-size: 40rem;
    left: 30rem;
}

.password i {
    position: absolute;

    color: rgb(184, 184, 184);
    font-size: 40rem;
    left: 30rem;
}

.btnQrCode {
    position: absolute;
    right: 10rem;
    text-align: right;
}

.qrbtn {
    font-size: 32rem;
    border: none;
    background-color: #fff;
}

.loginbtn {
    position: absolute;
    left: 0;
    right: 0;
    margin: 20rem 50rem;
    border-radius: 40rem;
    height: 80rem;
    font-size: 40rem;
    line-height: 60rem;
    background-color: #ffbc0d;
    border: none;
}
</style>
