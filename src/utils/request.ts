import axios from 'axios';
import {Method, AxiosRequestConfig} from "axios";

const service = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000
    }
)

//相应拦截器
service.interceptors.response.use(response => response.data)

//响应拦截器中无data，再次对请求方法进行封装

type Date<T> = {
    code: number,
    message: string,
    data: T
}

const request = <T>(url:string, method: Method, submitData ?: object, config ?: AxiosRequestConfig) =>{
    return service.request<T, Date<T>>({
        url,
        method,
        [method.toLowerCase() === "get" ? "params" : "data"]:submitData,
        ...config
    })
}

export default request;
