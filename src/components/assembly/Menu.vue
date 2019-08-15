<template>
  <!--Begin Menu Begin-->
  <div class="menu_bg">
    <div class="menu">
      <!--Begin 商品分类详情 Begin-->
      <div class="nav">
        <div class="nav_t">全部商品分类</div>
        <div class="leftNav none">
          <ul>
            <li v-for="arr in myarr">
              <div class="fj">
                <span class="n_img"><span></span><img src="images/nav1.png" /></span>
                <span class="fl">{{arr.name}}</span>
              </div>
              <div class="zj">
                  <div class="zj_l">
                    <div class="zj_l_c" v-for="arr2 in arr.son">
                      <h2 v-for="">{{arr2.name}}</h2>
                      <a href="#" v-for="arr3 in arr2.son">{{arr3.name}}|</a>
                    </div>
                  </div>
                <div class="zj_r">
                  <a href="#"><img src="images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--End 商品分类详情 End-->
      <ul class="menu_r">
        <li><a href="Index.html">首页</a></li>
        <li><a href="Food.html">美食</a></li>
        <li><a href="Fresh.html">生鲜</a></li>
        <li><a href="HomeDecoration.html">家居</a></li>
        <li><a href="SuitDress.html">女装</a></li>
        <li><a href="MakeUp.html">美妆</a></li>
        <li><a href="Digital.html">数码</a></li>
        <li><a href="GroupBuying.html">团购</a></li>
      </ul>
      <div class="m_ad">中秋送好礼！</div>
    </div>
  </div>
<!--  <div class="menu_bg">-->
<!--    <div class="menu">-->
<!--      &lt;!&ndash;Begin 商品分类详情 Begin&ndash;&gt;-->
<!--      <div class="nav">-->
<!--        <div class="nav_t">全部商品分类</div>-->
<!--        <div class="leftNav">-->
<!--          <ul>-->
<!--            <li v-for="arr in myarr">-->
<!--              <div class="fj">-->
<!--                <span class="n_img"><span></span><img src="../assets/images/nav1.png" /></span>-->
<!--                <span class="fl">{{arr.name}}</span>-->
<!--              </div>-->
<!--              <div class="zj" >-->
<!--                <div class="zj_l">-->
<!--                  <div class="zj_l_c" v-for="arr2 in arr.son">-->
<!--                    <h2 v-for="">{{arr2.name}}</h2>-->
<!--                    <a href="#" v-for="arr3 in arr2.son">{{arr3.name}}|</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="zj_r">-->
<!--                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>-->
<!--                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;End 商品分类详情 End&ndash;&gt;-->
<!--      <ul class="menu_r">-->
<!--        <li><a href="Index.html">首页</a></li>-->
<!--        <li><a href="Food.html">美食</a></li>-->
<!--        <li><a href="Fresh.html">生鲜</a></li>-->
<!--        <li><a href="HomeDecoration.html">家居</a></li>-->
<!--        <li><a href="SuitDress.html">女装</a></li>-->
<!--        <li><a href="MakeUp.html">美妆</a></li>-->
<!--        <li><a href="Digital.html">数码</a></li>-->
<!--        <li><a href="GroupBuying.html">团购</a></li>-->
<!--      </ul>-->
<!--      <div class="m_ad">中秋送好礼！</div>-->
<!--    </div>-->
<!--  </div>-->
  <!--End Menu End-->
</template>

<script>
    //引入axios,类似于ajax
    import axios from 'axios';
    export default {
        name: "Menu",
        data(){
            return{
                myarr:123,
                str:123,
                number2:0,
            }
        },
        mounted () {
            axios
                .get(this.url+'goods/goods_category')
                .then(a => (this.myarr = a.data))
                // .then(function (response) {
                //     console.log(response.data);
                //
                // })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },
    }
</script>

<style scoped>

</style>
