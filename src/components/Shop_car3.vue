<template>
  <div>
    <c-header></c-header>
    <v-menu></v-menu>
    <!--End Menu End-->
    <div class="i_bg">
      <div class="content mar_20">
        <img src="../assets/images/img3.jpg" />
      </div>

      <!--Begin 第三步：提交订单 Begin -->
      <div class="content mar_20">

        <!--Begin 银行卡支付 Begin -->
        <div class="warning">
          <table border="0" style="width:1000px; text-align:center;" cellspacing="0" cellpadding="0">
            <tr height="35">
              <td style="font-size:18px;">
                感谢您在本店购物！您的订单已提交成功，请记住您的订单号: <font color="#ff4e00">{{order_id}}</font>
              </td>
            </tr>
            <tr>
              <td style="font-size:14px; font-family:'宋体'; padding:10px 0 20px 0; border-bottom:1px solid #b6b6b6;">
                您选定的配送方式为: <font color="#ff4e00">申通快递</font>； &nbsp; &nbsp;您选定的支付方式为: <font color="#ff4e00">支付宝</font>； &nbsp; &nbsp;您实付款金额为: <font color="#ff4e00">{{total_price}}</font>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 0 30px 0; font-family:'宋体';">
                银行名称 收款人信息：全称 ××× ；帐号或地址 ××× ；开户行 ×××。 <br />
                注意事项：办理电汇时，请在电汇单“汇款用途”一栏处注明您的订单号。
              </td>
            </tr>
            <tr>
              <td>
                <router-link to="/">首页</router-link> &nbsp; &nbsp; <router-link to="member">用户中心</router-link>
              </td>
            </tr>
          </table>
        </div>
        <!--Begin 银行卡支付 Begin -->


        <div>

<!--        &lt;!&ndash;Begin 支付宝支付 Begin &ndash;&gt;-->
<!--        <div class="warning">-->
<!--          <table border="0" style="width:1000px; text-align:center;" cellspacing="0" cellpadding="0">-->
<!--            <tr height="35">-->
<!--              <td style="font-size:18px;">-->
<!--                感谢您在本店购物！您的订单已提交成功，请记住您的订单号: <font color="#ff4e00">2015092598275</font>-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td style="font-size:14px; font-family:'宋体'; padding:10px 0 20px 0; border-bottom:1px solid #b6b6b6;">-->
<!--                您选定的配送方式为: <font color="#ff4e00">申通快递</font>； &nbsp; &nbsp;您选定的支付方式为: <font color="#ff4e00">银行卡</font>； &nbsp; &nbsp;您的应付款金额为: <font color="#ff4e00">￥888.00</font>-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td style="padding:20px 0 30px 0; font-family:'宋体';">-->
<!--                支付宝网站(www.alipay.com) 是国内先进的网上支付平台。<br />-->
<!--                支付宝收款接口：在线即可开通，零预付，免年费，单笔阶梯费率，无流量限制。<br />-->
<!--                <a href="#" style="color:#ff4e00;">立即在线申请</a>-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td>-->
<!--                <div class="btn_u" style="margin:0 auto; padding:0 20px; width:120px;"><a href="#">立即使用支付宝支付</a></div>-->
<!--                <a href="#">首页</a> &nbsp; &nbsp; <a href="#">用户中心</a>-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->
<!--        </div>-->
<!--        &lt;!&ndash;Begin 支付宝支付 Begin &ndash;&gt;-->

<!--        &lt;!&ndash;Begin 余额不足 Begin &ndash;&gt;-->
<!--        <div class="warning">-->
<!--          <table border="0" style="width:1000px; text-align:center;" cellspacing="0" cellpadding="0">-->
<!--            <tr>-->
<!--              <td>-->
<!--                <p style="font-size:22px;">提示 !</p>-->
<!--                <b style="color:#ff4e00; font-size:16px; font-family:'宋体';">您的余额不足以支付整个订单，请选择其他支付方式</b>-->
<!--                <div class="backs"><a href="#">返回上一页</a></div>-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->
<!--        </div>-->
<!--        &lt;!&ndash;Begin 余额不足 Begin &ndash;&gt;-->

        </div>


      </div>
      <!--End 第三步：提交订单 End-->

      <!--Begin Footer Begin -->
      <!--End Footer End -->
    </div>
  </div>
</template>

<script>
    //引入axios,类似于ajax
    import axios from 'axios';
    //引入组件
    import Header from "./assembly/Header_cart";
    import Menu from "./assembly/Menu";
    export default {
        name: "Shop_car3",
        data(){
            return{
                order_id:'',
                total_price:'',
                order_time:'',
            }
        },
        mounted () {
            this.order_id = this.$route.query.order_id;    //订单id
            this.total_price = this.$route.query.total_price;    //付款金额
            this.order_time = this.$route.query.order_time;    //订单生成时间
        },
        //组件
        components:{
            "c-header":Header,
            "v-menu":Menu,
        },
        filters:{
            money(val){
                return '￥'+ Math.round(val*100)/100
            }
        },
    }
</script>

<style scoped>

</style>

