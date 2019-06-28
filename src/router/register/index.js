export  default {
    path:"/register",
    name:"register",
    component:()=>import("@components/register/Register"),
    meta:{
        TabBarFlag:false,
        title:"注册-永乐票务"
    }
}