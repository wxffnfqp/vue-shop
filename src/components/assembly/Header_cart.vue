<template>
  <div>
    <div class="soubg">
      <div class="sou">
        <!--Begin 所在收货地区 Begin-->
        <span class="s_city_b">
        	<span class="fl">送货至：</span>
            <span class="s_city">
            	<span>四川</span>
                <div class="s_city_bg">
                	<div class="s_city_t"></div>
                    <div class="s_city_c">
                    	<h2>请选择所在的收货地区</h2>
                        <table border="0" class="c_tab" style="width:235px; margin-top:10px;" cellspacing="0" cellpadding="0">
                          <tr>
                            <th>A</th>
                            <td class="c_h"><span>安徽</span><span>澳门</span></td>
                          </tr>
                          <tr>
                            <th>B</th>
                            <td class="c_h"><span>北京</span></td>
                          </tr>
                          <tr>
                            <th>C</th>
                            <td class="c_h"><span>重庆</span></td>
                          </tr>
                          <tr>
                            <th>F</th>
                            <td class="c_h"><span>福建</span></td>
                          </tr>
                          <tr>
                            <th>G</th>
                            <td class="c_h"><span>广东</span><span>广西</span><span>贵州</span><span>甘肃</span></td>
                          </tr>
                          <tr>
                            <th>H</th>
                            <td class="c_h"><span>河北</span><span>河南</span><span>黑龙江</span><span>海南</span><span>湖北</span><span>湖南</span></td>
                          </tr>
                          <tr>
                            <th>J</th>
                            <td class="c_h"><span>江苏</span><span>吉林</span><span>江西</span></td>
                          </tr>
                          <tr>
                            <th>L</th>
                            <td class="c_h"><span>辽宁</span></td>
                          </tr>
                          <tr>
                            <th>N</th>
                            <td class="c_h"><span>内蒙古</span><span>宁夏</span></td>
                          </tr>
                          <tr>
                            <th>Q</th>
                            <td class="c_h"><span>青海</span></td>
                          </tr>
                          <tr>
                            <th>S</th>
                            <td class="c_h"><span>上海</span><span>山东</span><span>山西</span><span class="c_check">四川</span><span>陕西</span></td>
                          </tr>
                          <tr>
                            <th>T</th>
                            <td class="c_h"><span>台湾</span><span>天津</span></td>
                          </tr>
                          <tr>
                            <th>X</th>
                            <td class="c_h"><span>西藏</span><span>香港</span><span>新疆</span></td>
                          </tr>
                          <tr>
                            <th>Y</th>
                            <td class="c_h"><span>云南</span></td>
                          </tr>
                          <tr>
                            <th>Z</th>
                            <td class="c_h"><span>浙江</span></td>
                          </tr>
                        </table>
                    </div>
                </div>
            </span>
        </span>
        <!--End 所在收货地区 End-->
        <span class="fr">
          <span class="ss" v-if="status !== 0">
            <div class="ss_list" >
                	<a href="#">{{name}}</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><router-link to='member'>个人中心</router-link></li>
                                <li><a href="#" @click="loginout()">退出</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div class="ss_list" >
                	<a href="#">我的订单</a>

                </div>
            	<div class="ss_list">
                	<a href="#">收藏夹</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">我的收藏夹</a></li>
                                <li><a href="#">我的收藏夹</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ss_list">
                	<a href="#">客户服务</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </span>
          <span class="fl" v-else>你好，请<router-link to='login'>登录</router-link>&nbsp; <a href="Regist.html" style="color:#ff4e00;">免费注册</a>&nbsp;|&nbsp;<a href="#">我的订单</a>&nbsp;|</span>
            <span class="fl">|&nbsp;关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="../../assets/images/s_tel.png" align="absmiddle" /></a></span>
        </span>
      </div>
    </div>
    <div class="top">
      <div class="logo"><a href="Index.html"><img src="../../assets/images/logo.png" /></a></div>
      <div class="search">
        <form>
          <input type="text" value="" class="s_ipt" />
          <input type="submit" value="搜索" class="s_btn" />
        </form>
        <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
      </div>
      <div class="i_car">
        <div class="car_t" v-if="status === 0">购物车 [ <span>0</span> ]</div>
        <div class="car_t" v-else>购物车 [ <span>{{my_num}}</span> ]</div>
        <div class="car_bg">
          <!--Begin 购物车未登录 Begin-->
          <div class="un_login" v-if="status === 0">还未登录！<a href="Login.html" style="color:#ff4e00;" ><router-link to="login">马上登录</router-link></a> 查看购物车！</div>
          <!--End 购物车未登录 End-->
          <!--Begin 购物车已登录 Begin-->
          <div v-else v-for="res in my_car">
            <ul class="cars" >
              <li>
                <div class="img"><a href="#"><img src="../../assets/images/car1.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">{{res.og_name}}</a></div>
                <div class="price"><font color="#ff4e00">￥{{res.price}}</font> X{{res.num}}</div>
              </li>
            </ul>
          </div>
          <div v-if="status !== 0">
            <div class="price_sum">共{{my_num}}件商品&nbsp;  共计&nbsp; <font color="#ff4e00">￥</font><span>{{totalPrice()}}</span></div>
            <div class="price_a"><a href="#"><router-link to="shop_car" @click="shop_car()">去购物车结算</router-link> </a></div>
          </div>
          <!--End 购物车已登录 End-->
        </div>
      </div>
    </div>
    <!--End Header End-->
  </div>
</template>
<script>
    import axios from 'axios';
    export default{
        name:"v-header",
        //父组件传值到子组件(number string boolean)
        // props:{
        //     title:{
        //         type:String,
        //         required:true
        //     }
        // },
        data() {
            return{
                my_car:'',
                my_num:0,
                name:localStorage.getItem("name"),
                status:1,
            }
        },
        methods:{
            loginout(){
                axios.post(this.url+'auth/logout',{
                    token:localStorage.getItem("token")
                })
                    .then(function (response) {
                        localStorage.removeItem("name");
                        localStorage.removeItem("token");
                        this.$router.push({path: '/login'});
                        // console.log(response)
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            totalPrice : function(){
                //子组件向父组件传值，用$emit
                this.$emit('myCar',this.my_car)
                var totalP = 0;
                for (var i = 0,len = this.my_car.length;i<len;i++) {
                    totalP+=this.my_car[i].price*this.my_car[i].num;
                }
                return totalP;
            },
            // shop_car:function () {
            //     // this.title = "change"
            //     //注册事件
            //     this.$emit('myCar',this.my_car)
            // }
        },
        mounted(){
            axios.post(this.url+'cart/my_car',{
                token:localStorage.getItem("token"),
            })
                .then(res => {
                    var num = 0
                    this.my_car = res.data
                    $.each(res.data,function (k,v) {
                        num = (num + Number(v.num))
                    })
                    this.my_num = num
                })
                .catch(error=>  {
                    if (localStorage.getItem("token")!==''){
                        this.status = 0
                    }
                    this.status = 0
                    console.log(error);
                });
        },
    }
</script>
<style scoped>

</style>
