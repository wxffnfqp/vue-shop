<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <nav>
        <ul class="list-inline">
          <li>
            <router-link :to="{ name: 'home' }">首页</router-link>
          </li>
          <li class="pull-right">
            <button @click="login()">登录</button>
<!--            <router-link :to="{ name: 'login' }">登录</router-link>-->
          </li>
          <li class="pull-right">
            <router-link :to="{ name: 'register' }">注册</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<!--
  传值：string number boolean
  引用：array object
-->
<script>
    // import axios from 'axios';
    export default {
        name:'test',
        data(){
            return{
              info:null
            }
        },
        methods: {
            login:function () {
                axios.post('http://www.blog.com/api/auth/login')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
    }
</script>
<style scoped>
  .users{
    width:100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
