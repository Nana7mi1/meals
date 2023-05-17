import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/Home.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // store.commit('getAccessToken')
    const token = localStorage.token
    if (!token && to.name !== 'Login') {
        next({ name: 'Login' })
    } else if (token && to.name === 'Login') {
        next({ name: 'Home' })
    } else (
        next()
    )
})

export default router
