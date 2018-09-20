<template>
    <div class="hello">
        一起学习axios
    </div>
</template>
<script>
import axios from 'axios'
import queryString from 'queryString'

var CancelToken = axios.CancelToken;
var source = CancelToken.source();
var HTTP = axios.create({
       baseURL:'http://localhost:3003/',
    //超过多长时间
    timeout:0.001,
    responseType:'json',
    transformRequest:[function(data){
        data.age = 30;
        return queryString.stringify(data);
    }],
    transformResponse:[function(data){
        console.log(1)
        data.aabc = ''
        console.log(data)
        return data
    }],
    //根据返回值判断是否成功
    validateStatus(status){
        console.log(status)
        return status < 400 ? true:false;
    },
    //取消配置项
    // cancelToken:source.token
})
//请求之前的拦截
    HTTP.interceptors.request.use(function(config){
        console.log('拦截');
        console.log(config)
        return config;
    }),
    function(err){
    return Promise.reject(err);
    }
    //响应拦截，请求之后的拦截
    HTTP.interceptors.response.use(function(data){
        console.log(data);
        return data
    })
export default {
    name:'hello',
    created () {
       this.$http.get('http://localhost:3003/answer')
       .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            //用户取消的
            // if(axios.isCancel(err)){
            //     console.log(err.message)
            // }
            //服务中断
            // else{
            //     console.log(err)
            // }
            console.log(err)
        });
        // source.cancel('操作被用户取消了，时间太长了')
    }
}
</script>
