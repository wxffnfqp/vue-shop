<template>
  <div class="hello">
    <c-header></c-header>


    <!--Begin Menu Begin-->
    <v-menu></v-menu>
    <!--End Menu End-->
    <div class="i_bg bg_color">
      <div class="i_ban_bg">
        <!--Begin Banner Begin-->
        <div class="banner">
          <div class="top_slide_wrap">
            <ul class="slide_box bxslider">
              <li><img src="../assets/images/ban1.jpg" width="740" height="401" /></li>
              <li><img src="../assets/images/ban1.jpg" width="740" height="401" /></li>
              <li><img src="../assets/images/ban1.jpg" width="740" height="401" /></li>
            </ul>
            <div class="op_btns clearfix">
              <a href="#" class="op_btn op_prev"><span></span></a>
              <a href="#" class="op_btn op_next"><span></span></a>
            </div>
          </div>
        </div>
        <!--End Banner End-->
        <div class="inews">
          <div class="news_t">
            <span class="fr"><a href="#">更多 ></a></span>新闻资讯
          </div>
          <ul>
            <li><span>[ 特惠 ]</span><a href="#">掬一轮明月 表无尽惦念</a></li>
            <li><span>[ 公告 ]</span><a href="#">好奇金装成长裤新品上市</a></li>
            <li><span>[ 特惠 ]</span><a href="#">大牌闪购 · 抢！</a></li>
            <li><span>[ 公告 ]</span><a href="#">发福利 买车就抢千元油卡</a></li>
            <li><span>[ 公告 ]</span><a href="#">家电低至五折</a></li>
          </ul>
          <div class="charge_t">
            话费充值<div class="ch_t_icon"></div>
          </div>
          <form>
            <table border="0" style="width:205px; margin-top:10px;" cellspacing="0" cellpadding="0">
              <tr height="35">
                <td width="33">号码</td>
                <td><input type="text" value="" class="c_ipt" /></td>
              </tr>
              <tr height="35">
                <td>面值</td>
                <td>
                  <select class="jj" name="city">
                    <option value="0" selected="selected">100元</option>
                    <option value="1">50元</option>
                    <option value="2">30元</option>
                    <option value="3">20元</option>
                    <option value="4">10元</option>
                  </select>
                  <span style="color:#ff4e00; font-size:14px;">￥99.5</span>
                </td>
              </tr>
              <tr height="35">
                <td colspan="2"><input type="submit" value="立即充值" class="c_btn" /></td>
              </tr>
            </table>
          </form>
        </div>
      </div>

      <!--Begin 热门商品 Begin-->
      <div class="i_t mar_10">
        <span class="fl">热门商品</span>
        <span class="i_mores fr"><a href="javascript:void(0)">更多</a></span>
      </div>
      <div class="like">
        <div id="featureContainer1">
          <div id="feature1">
            <div id="block1">
              <div id="botton-scroll1" style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 1200px;">
                <ul class="featureUL" style="margin: 0px; padding: 0px; position: relative; list-style-type: none; z-index: 1; width: 3600px; left: -2400px;">
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="../assets/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot1.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>德国进口</h2>
                          德亚全脂纯牛奶200ml*48盒
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>189</span></font> &nbsp; 26R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="../assets/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot2.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>iphone 6S</h2>
                          Apple/苹果 iPhone 6s Plus公开版
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>5288</span></font> &nbsp; 25R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="../assets/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot3.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>倩碧特惠组合套装</h2>
                          倩碧补水组合套装8折促销
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>368</span></font> &nbsp; 18R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="../assets/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot4.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="h_icon"><img width="50" height="50" src="../assets/images/hot.png">
                      </div>
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot4.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot1.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>德国进口</h2>
                          德亚全脂纯牛奶200ml*48盒
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>189</span></font> &nbsp; 26R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot2.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>iphone 6S</h2>
                          Apple/苹果 iPhone 6s Plus公开版
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>5288</span></font> &nbsp; 25R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot3.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>倩碧特惠组合套装</h2>
                          倩碧补水组合套装8折促销
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>368</span></font> &nbsp; 18R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot4.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot4.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot1.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>德国进口</h2>
                          德亚全脂纯牛奶200ml*48盒
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>189</span></font> &nbsp; 26R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot2.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>iphone 6S</h2>
                          Apple/苹果 iPhone 6s Plus公开版
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>5288</span></font> &nbsp; 25R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot3.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>倩碧特惠组合套装</h2>
                          倩碧补水组合套装8折促销
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>368</span></font> &nbsp; 18R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot4.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox" style="overflow: hidden; float: left; width: 238px; height: 228px;">
                    <div class="box">
                      <div class="imgbg">
                        <a href="javascript:void(0)"><img width="160" height="136" src="../assets/images/hot4.jpg"></a>
                      </div>
                      <div class="name">
                        <a href="javascript:void(0)">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:void();" class="l_prev">Previous</a>
            <a href="javascript:void();" class="l_next">Next</a>
          </div>
        </div>
      </div>
      <!--END 热门商品 END -->

      <!--Begin 限时特卖 Begin-->
      <!--
      <div class="i_t mar_10">
        <span class="fl">限时特卖</span>
          <span class="i_mores fr"><a href="#">更多</a></span>
      </div>
      <div class="content">

          <div class="sell_right">
            <div class="sell_1">
                <div class="s_img"><a href="#"><img src="../assets/images/tm_1.jpg" width="185" height="155" /></a></div>
                <div class="s_price">￥<span>89</span></div>
                  <div class="s_name">
                    <h2><a href="#">沙宣洗发水</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
              <div class="sell_2">
                <div class="s_img"><a href="#"><img src="../assets/images/tm_2.jpg" width="185" height="155" /></a></div>
                <div class="s_price">￥<span>289</span></div>
                  <div class="s_name">
                    <h2><a href="#">德芙巧克力</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
              <div class="sell_b1">
                <div class="sb_img"><a href="#"><img src="../assets/images/tm_b1.jpg" width="242" height="356" /></a></div>
                <div class="s_price">￥<span>289</span></div>
                  <div class="s_name">
                    <h2><a href="#">东北大米</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>

              <div class="sell_3">
                <div class="s_img"><a href="#"><img src="../assets/images/tm_3.jpg" width="185" height="155" /></a></div>
                <div class="s_price">￥<span>289</span></div>
                  <div class="s_name">
                    <h2><a href="#">迪奥香水</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
              <div class="sell_4">
                <div class="s_img"><a href="#"><img src="../assets/images/tm_4.jpg" width="185" height="155" /></a></div>
                <div class="s_price">￥<span>289</span></div>
                  <div class="s_name">
                    <h2><a href="#">美妆</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
              <div class="sell_b2">
                <div class="sb_img"><a href="#"><img src="../assets/images/tm_b2.jpg" width="242" height="356" /></a></div>
                <div class="s_price">￥<span>289</span></div>
                  <div class="s_name">
                    <h2><a href="#">美妆</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
              <div class="sell_1">
                  <div class="s_img"><a href="#"><img src="../assets/images/tm_1.jpg" width="185" height="155" /></a></div>
                  <div class="s_price">￥<span>89</span></div>
                  <div class="s_name">
                      <h2><a href="#">沙宣洗发水</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
              <div class="sell_2">
                  <div class="s_img"><a href="#"><img src="../assets/images/tm_2.jpg" width="185" height="155" /></a></div>
                  <div class="s_price">￥<span>289</span></div>
                  <div class="s_name">
                      <h2><a href="#">德芙巧克力</a></h2>
                      倒计时：<span>1200</span> 时 <span>30</span> 分 <span>28</span> 秒
                  </div>
              </div>
          </div>
      </div>
      -->
      <!--End 限时特卖 End-->
      <div v-for="(v,k) in flos">
      <div class="content mar_20">
        <img src="../assets/images/mban_1.jpg" width="1200" height="110" />
      </div>
      <!--Begin 进口 生鲜 Begin-->

      <div class="i_t mar_10">
        <span class="floor_num"></span>
        <span class="fl">{{k}}</span>
        <span class="i_mores fr"><a href="#">进口咖啡</a>&nbsp; &nbsp; &nbsp; <a href="#">进口酒</a>&nbsp; &nbsp; &nbsp; <a href="#">进口母婴</a>&nbsp; &nbsp; &nbsp; <a href="#">新鲜蔬菜</a>&nbsp; &nbsp; &nbsp; <a href="#">新鲜水果</a></span>
      </div >
      <div class="content" >

        <div class="fresh_mid" >
          <ul>
            <li v-for="a in v">
              <div class="name" v-if=""><a href="#"><router-link :to="{path:'/goods',query:{id:a.id,name:a.goods_name,price:a.goods_price}}" >{{a.goods_name}}</router-link></a></div>
<!--              <div class="name" v-if=""><a href="#" @click="go_goods(a.id)">{{a.goods_name}}</a></div>-->
              <div class="price">
                <font>￥<span>{{a.goods_price}}</span></font> &nbsp; 26R
              </div>
              <div class="img"><a href="#">

                <router-link :to="{path:'/goods/',params:{id:a.id}}" ><img v-bind:src="a.big_img"/></router-link>
              </a></div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <!--End 数码家电 End-->
      <!--Begin 猜你喜欢 Begin-->
      <div class="i_t mar_10">
        <span class="fl">猜你喜欢</span>
      </div>
      <div class="like">
        <div id="featureContainer1">
          <div id="feature1">
            <div id="block1">
              <div id="botton-scroll1">
                <ul class="featureUL">
                  <li class="featureBox">
                    <div class="box">
                      <div class="imgbg">
                        <a href="#"><img src="../assets/images/hot1.jpg" width="160" height="136" /></a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h2>德国进口</h2>
                          德亚全脂纯牛奶200ml*48盒
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>189</span></font> &nbsp; 26R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox">
                    <div class="box">
                      <div class="imgbg">
                        <a href="#"><img src="../assets/images/hot2.jpg" width="160" height="136" /></a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h2>iphone 6S</h2>
                          Apple/苹果 iPhone 6s Plus公开版
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>5288</span></font> &nbsp; 25R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox">
                    <div class="box">
                      <div class="imgbg">
                        <a href="#"><img src="../assets/images/hot3.jpg" width="160" height="136" /></a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h2>倩碧特惠组合套装</h2>
                          倩碧补水组合套装8折促销
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>368</span></font> &nbsp; 18R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox">
                    <div class="box">
                      <div class="imgbg">
                        <a href="#"><img src="../assets/images/hot4.jpg" width="160" height="136" /></a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                  <li class="featureBox">
                    <div class="box">
                      <div class="imgbg">
                        <a href="#"><img src="../assets/images/hot4.jpg" width="160" height="136" /></a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h2>品利特级橄榄油</h2>
                          750ml*4瓶装组合 西班牙原装进口
                        </a>
                      </div>
                      <div class="price">
                        <font>￥<span>280</span></font> &nbsp; 30R
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <a class="l_prev" href="javascript:void();">Previous</a>
            <a class="l_next" href="javascript:void();">Next</a>
          </div>
        </div>
      </div>
      <!--End 猜你喜欢 End-->


    </div>
  </div>
</template>
<script>
    import axios from 'axios';
    import Header from './assembly/Header_cart';
    import Menu from "./assembly/Menu";
    export default {
        name:'index',
        data(){
            return{
                info:123,
                flos:123,
                number:0,
            }
        },
        methods: {
            //点击事件传ID
            go_goods(id){
                this.$router.push({
                    name: 'goods',
                    params: {
                        id: id
                    }
                });
                // console.log(id)
            },

        },
        mounted () {
            axios
              .get(this.url+'goods/goods_category')
                .then(a => (this.info = a.data))
                // .then(function (response) {
                //     console.log(response.data);
                //
                // })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            axios
                .get(this.url+'goods/goods_floor')
                .then(b => (this.flos = b.data))
                // .then(function (response) {
                //     console.log(response);
                //
                // })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },
              components:{
                  "c-header":Header,
                  'v-menu':Menu,
              }
    }
</script>
<!--<style>-->
<!--  @import "../assets/css/style.css";-->
<!--</style>-->
<!--<template>-->
<!--  <div class="hello">-->
<!--    <app-header @titleChanged="uptitle($event)" v-bind:title="title"></app-header>-->
<!--    <h1>{{ title }}</h1>-->
<!--    <p>单价：<input type="text" v-model="price"></p>-->
<!--    <p>数量：<button @click="num&#45;&#45;">-</button>-->
<!--      <input type="text" style="width: 30px" v-model="num">-->
<!--      <button @click="num++">+</button>-->
<!--      总额：<span>{{sum}}</span>-->
<!--    </p>-->
<!--    <router-link to='home'><button>去结算</button></router-link>-->
<!--    <router-link to='myclass'><button>去样式</button></router-link>-->
<!--    <router-link to='home'><button>去结算</button></router-link>-->
<!--    <app-users v-bind:users="users"></app-users>-->
<!--    <app-footer  v-bind:title="title"></app-footer>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
  // import Header from './Header'
  // import Footer from './Footer'
  // import Users from './Users'
  //   export default {
  //       name: 'Index',
  //       data () {
  //           return {
  //               title:"计算属性",
  //               num:0,
  //               price:100,
  //               users:[
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //                   {name:"henry",job:"web开发",show:false},
  //               ],
  //               title:"传递的是一个值，(number string boolean)"
  //           }
  //       },
  //       methods:{
  //           //上面的点击事件是header.vue页面注册的一个事件，括号里面是行参
  //         uptitle(title){
  //             this.title = title;
  //         }
  //       },
  //       computed:{
  //         sum:function () {
  //             if (this.num<0){
  //                 this.num = 0
  //             }
  //             if (this.price<0){
  //                 this.price = 0
  //             }
  //            return this.price*this.num
  //         }
  //       },
  //       components:{
  //           "app-header":Header,
  //           "app-footer":Footer,
  //           "app-users":Users,
  //       }
  //   }
<!--</script>-->
<!--scoped域,只对自己这个类的样式有序-->
<!--<style scoped>-->
<!--  h1{-->
<!--    color:palegoldenrod;-->
<!--  }-->
<!--</style>-->
