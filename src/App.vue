<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  created(){
    // axios({
    //   method:'post',
    //   url:'http://localhost:3003/response'
    // }).then((res)=>{
    //     console.log(res.data)
    // }).catch((err)=>{
    //   console.log(err)
    // })

    // axios.delete('http://localhost:3003/del').then((res)=>{
    //   console.log(res.data)
    // }).catch((err)=>{
    //   console.log(err);
    // })

    // axios.post('http://localhost:3003/response',{
    //  miaov:'课堂'
    // })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
