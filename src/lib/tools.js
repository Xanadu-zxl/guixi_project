import request from './util'
//这就是把要请求的URL封装成API，便于管理，输出后是一个promise对象。
//为什么是一个promise对象？因为axios就是在promise的基础上实现的呀。
//封装成了promise对象，就可以直接.then操作了
//fetche函数可以加入param参数，例如下侧：
//export function fetch(param){
//    return request({
//        url : '/',
//        method: 'get',
//        params: param
//    })
//}
export function fetch(){
    return request({
        url : '/',
        method: 'get'
    })
}