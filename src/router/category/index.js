export default {
    path: "/category",
    name: "category",
    component: () => import("@views/category/Category"),
    meta: {
        TabBarFlag: true,
        title: "最新演出信息-永乐票务"
    }
}