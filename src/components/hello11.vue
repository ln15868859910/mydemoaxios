<template>
    <div class="hello">
        一起学习axios
    </div>
</template>
<script>
import axios from 'axios'
import queryString from 'queryString'
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
    }

})
export default {
    name:'hello11',
    created () {
        HTTP.post('response',{
            miaov:'ketang',
            username:'aa'
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });
    }
}
</script>
