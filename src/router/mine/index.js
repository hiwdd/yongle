export default {
    path: "/login",
    name: "login",
    component: () => import("@views/mine/Login"),
    meta: {
        TabBarFlag: false,
        title: "登录-永乐票务"
    }
}