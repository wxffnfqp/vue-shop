<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>

    <p>多个复选框</p>
    <input type="checkbox" id="runoob" value="runoob" v-model="checkedNames">
    <label for="runoob">runoob</label>
    <input type="checkbox" id="google" value="google" v-model="checkedNames">
    <label for="google">google</label>
    <input type="checkbox" id="taobao" value="taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为：{{checkedNames}}</span>
    <br>
    <ul>
      <li v-for="(che,index) in checkedNames">
        {{index+1}}、{{che}}
      </li>
    </ul>
    <router-link to='index'><button>返回商品</button></router-link>
    <Assembly></Assembly>
  </div>

</template>
<script>
  //引入局部注册组
    export default {
        name: 'Home',
        data () {
            return {
                title:"购物车",
                checked:false,
                checkedNames:[]
            }
        },
        methods:{

        },
        //计算属性
        computed:{
            sum:function () {
                return this.price * this.num
            }
        },
    }
</script>
<style scoped>
  h1{
    color: green;
  }
</style>
