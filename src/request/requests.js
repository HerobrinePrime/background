//axxios
import axios from "axios";
//nprogress
import nprogress from 'nprogress'
//nprogress.css
import 'nprogress/nprogress.css'
//config
import { baseURL } from '@/request/config/local.json'

//create
const requests = axios.create({
    baseURL,
    timeout:20000
})
//interceptors
requests.interceptors.request.use(config =>{
    //进度条开始
    nprogress.start()
    return config
})
requests.interceptors.response.use(res =>{
    //进度条结束
    nprogress.done()
    return res
},err =>{
    console.error(`******************\n${err}\n******************`);
    return Promise.reject(new Error('failed'))
})

export default requests