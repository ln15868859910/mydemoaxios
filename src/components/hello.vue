<template>
    <div class="hello">
        一起学习axios
    </div>
</template>
<script>
import axios from 'axios'
var HTTP = axios.create({
    baseURL:'http://localhost:3003/',
    //超过多长时间
    timeout:0.001,
    headers:{
        "custom-header":'miaov'
    },
    responseType:'json',
    params:{
        books:'123'
    }
})
export default {
    name:'hello',
    created () {
        HTTP.get('answer').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });
    }
}
</script>
