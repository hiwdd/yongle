import axios from 'axios'

const server = axios.create({
    timeout:5000,
    withCredentials:true
})

server.interceptors.request.use((config) => {
    return config;
},(e)=>{
    return Promise.reject(e);
})

server.interceptors.response.use((res) => {
    if(res.status === '200'){
        return res.data;
    }
},(e)=>{
    return Promise.reject(e);
})

export const http = (method,url,data={})=>{
    if(method == 'get'){
        return server.get(url,{
            params:data
        });
    }else if(method =='post'){
        return server.post(url,data);
    }else{
        return;
    }
}