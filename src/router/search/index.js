export default {
    path: "/search",
    name: "search",
    component: () => import("@views/search/Search"),
    meta: {
        TabBarFlag: true,
        title: "演出"
    }
}