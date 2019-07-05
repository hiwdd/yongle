export default {
    path: "/home",
    name: "home",
    component: () => import("@views/home/Home"),
    meta: {
        TabBarFlag: true,
        title: "永乐票务-中国领先的专业票务网"
    }
}