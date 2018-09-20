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
    //根据返回值判断是否成功
    validateStatus(status){
        console.log(status)
        return status < 400 ? true:false;
    },
    //取消配置项
    // cancelToken:source.token
})
export default {
    name:'hello',
    created () {
      function http1(){
          return HTTP.get('answer')
      }
    function http2(){
          return HTTP.post('response')
      }

      axios.all([http1(),http2()]).then(
          axios.spread((res1,res2)=>{
              console.log(res1);
              console.log(res2);
          })
      ).catch((err)=>{
            //用户取消的
            if(axios.isCancel(err)){
                console.log(err.message)
            }
            //服务中断
            else{
                console.log(err)
            }
            
        });
        // source.cancel('操作被用户取消了，时间太长了')
    }
}
</script>
