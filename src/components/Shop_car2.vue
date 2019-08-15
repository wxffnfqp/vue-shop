<template>
  <div>
    <c-header @myCar="getMyCar"></c-header>
    <v-menu></v-menu>
    <!--End Menu End-->
    <div class="i_bg">
      <div class="content mar_20">
        <img src="../assets/images/img2.jpg" />
      </div>

      <!--Begin 第二步：确认订单信息 Begin -->
      <div class="content mar_20">
        <div class="two_bg">
          <div class="two_t">
            <span class="fr"><a href="#">修改</a></span>商品列表
          </div>
          <div  v-if="newarr != ''">
          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
            <tr>
              <td class="car_th" width="550">商品名称</td>
              <td class="car_th" width="140">属性</td>
              <td class="car_th" width="150">购买数量</td>
              <td class="car_th" width="130">小计</td>
              <td class="car_th" width="140">返还积分</td>
            </tr>
            <tr v-for="res in newarr">
              <td>
                <div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>
                {{res.og_name}}
              </td>
              <td align="center">{{res.attr_name}}</td>
              <td align="center">{{res.num}}</td>
              <td align="center" style="color:#ff4e00;">{{res.price * res.num | money}}</td>
              <td align="center">26R</td>
            </tr>
            <tr>
              <td colspan="5" align="right" style="font-family:'Microsoft YaHei';">
                <span style="color:#ff4e00;">商品总价：{{totalPrice() | money}}</span>
              </td>
            </tr>
          </table>

          <div class="two_t">
            <span class="fr"><a href="#">修改</a></span>
            <b>选择收货人</b>
          </div>
          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
            <tr>
              <th class="car_th" width="80">请选择</th>
              <th class="car_th" width="80">ID</th>
              <th class="car_th" width="200">收货人姓名</th>
              <th class="car_th" width="200">收货人电话</th>
              <th class="car_th" width="550">收货人地址</th>
            </tr>
            <tr v-for="(res,index) in my_address">
              <td align="center"><input type="radio" name="address" @change="getAddress(res)"></td>
              <td align="center">{{res.id}}</td>
              <td align="center">{{res.name}}</td>
              <td align="center">{{res.phone}}</td>
              <td align="center">{{res.address}}</td>
            </tr>
          </table>


          <div>


          <div class="two_t">
            配送方式
          </div>
<!--          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">-->
<!--            <tr>-->
<!--              <th class="car_th" width="80"></th>-->
<!--              <th class="car_th" width="200">名称</th>-->
<!--              <th class="car_th" width="370">订购描述</th>-->
<!--              <th class="car_th" width="150">费用</th>-->
<!--              <th class="car_th" width="135">免费额度</th>-->
<!--              <th class="car_th" width="175">保价费用</th>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center"><input type="checkbox" name="ch" checked="checked" /></td>-->
<!--              <td align="center" style="font-size:14px;"><b>申通快递</b></td>-->
<!--              <td>江、浙、沪地区首重为15元/KG，其他地区18元/KG，续重均为5-6元/KG， 云南地区为8元</td>-->
<!--              <td align="center">￥15.00</td>-->
<!--              <td align="center">￥0.00</td>-->
<!--              <td align="center">不支持保价</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center"><input type="checkbox" name="ch" /></td>-->
<!--              <td align="center" style="font-size:14px;"><b>城际快递</b></td>-->
<!--              <td>运费固定</td>-->
<!--              <td align="center">￥15.00</td>-->
<!--              <td align="center">￥0.00</td>-->
<!--              <td align="center">不支持保价</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center"><input type="checkbox" name="ch" /></td>-->
<!--              <td align="center" style="font-size:14px;"><b>邮局平邮</b></td>-->
<!--              <td>运费固定</td>-->
<!--              <td align="center">￥15.00</td>-->
<!--              <td align="center">￥0.00</td>-->
<!--              <td align="center">不支持保价</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td colspan="6">-->
<!--                <span class="fr"><label class="r_rad"><input type="checkbox" name="baojia" /></label><label class="r_txt">配送是否需要保价</label></span>-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->

          <div class="two_t">
            支付方式
          </div>
          <ul class="pay">
            <li class="checked">余额支付<div class="ch_img"></div></li>
            <li>银行亏款/转账<div class="ch_img"></div></li>
            <li>货到付款<div class="ch_img"></div></li>
            <li>支付宝<div class="ch_img"></div></li>
          </ul>






<!--          <div class="two_t">-->
<!--            商品包装-->
<!--          </div>-->
<!--          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">-->
<!--            <tr>-->
<!--              <td class="car_th" width="80"></td>-->
<!--              <td class="car_th" width="490">名称</td>-->
<!--              <td class="car_th" width="180">费用</td>-->
<!--              <td class="car_th" width="180">免费额度</td>-->
<!--              <td class="car_th" width="180">图片</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center"><input type="checkbox" name="pack" checked="checked" /></td>-->
<!--              <td><b style="font-size:14px;">不要包装</b></td>-->
<!--              <td align="center">￥15.00</td>-->
<!--              <td align="center">￥0.00</td>-->
<!--              <td align="center"></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center"><input type="checkbox" name="pack" /></td>-->
<!--              <td><b style="font-size:14px;">精品包装</b></td>-->
<!--              <td align="center">￥15.00</td>-->
<!--              <td align="center">￥0.00</td>-->
<!--              <td align="center"><a href="#" style="color:#ff4e00;">查看</a></td>-->
<!--            </tr>-->
<!--          </table>-->

<!--          <div class="two_t">-->
<!--            祝福贺卡-->
<!--          </div>-->
<!--          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">-->
<!--            <tr>-->
<!--              <td class="car_th" width="80"></td>-->
<!--              <td class="car_th" width="490">名称</td>-->
<!--              <td class="car_th" width="180">费用</td>-->
<!--              <td class="car_th" width="180">免费额度</td>-->
<!--              <td class="car_th" width="180">图片</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center"><input type="checkbox" name="wish" checked="checked" /></td>-->
<!--              <td><b style="font-size:14px;">不要贺卡</b></td>-->
<!--              <td align="center">￥15.00</td>-->
<!--              <td align="center">￥0.00</td>-->
<!--              <td align="center"></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="center" style="border-bottom:0; padding-bottom:0;"><input type="checkbox" name="wish" /></td>-->
<!--              <td style="border-bottom:0; padding-bottom:0;"><b style="font-size:14px;">祝福贺卡</b></td>-->
<!--              <td align="center" style="border-bottom:0; padding-bottom:0;">￥15.00</td>-->
<!--              <td align="center" style="border-bottom:0; padding-bottom:0;">￥0.00</td>-->
<!--              <td align="center" style="border-bottom:0; padding-bottom:0;"><a href="#" style="color:#ff4e00;">查看</a></td>-->
<!--            </tr>-->
<!--            <tr valign="top">-->
<!--              <td align="center"></td>-->
<!--              <td colspan="4">-->
<!--                <span class="fl"><b style="font-size:14px;">祝福语：</b></span>-->
<!--                <span class="fl"><textarea class="add_txt" style="width:860px; height:50px;"></textarea></span>-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->

<!--          <div class="two_t">-->
<!--            其他信息-->
<!--          </div>-->
<!--          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">-->
<!--            <tr>-->
<!--              <td width="145" align="right" style="padding-right:0;"><b style="font-size:14px;">使用红包：</b></td>-->
<!--              <td>-->
<!--                <span class="fl" style="margin-left:50px; margin-right:10px;">选择已有红包</span>-->
<!--                <select class="jj" name="city">-->
<!--                  <option value="0" selected="selected">请选择</option>-->
<!--                  <option value="1">50元</option>-->
<!--                  <option value="2">30元</option>-->
<!--                  <option value="3">20元</option>-->
<!--                  <option value="4">10元</option>-->
<!--                </select>-->
<!--                <span class="fl" style="margin-left:50px; margin-right:10px;">或者输入红包序列号</span>-->
<!--                <span class="fl"><input type="text" value="" class="c_ipt" style="width:220px;" /></span>-->
<!--                    <span class="fr" style="margin-left:10px;"><input type="submit" value="验证红包" class="btn_tj" /></span>-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr valign="top">-->
<!--              <td align="right" style="padding-right:0;"><b style="font-size:14px;">订单附言：</b></td>-->
<!--              <td style="padding-left:0;"><textarea class="add_txt" style="width:860px; height:50px;"></textarea></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" style="padding-right:0;"><b style="font-size:14px;">缺货处理：</b></td>-->
<!--              <td>-->
<!--                <label class="r_rad"><input type="checkbox" name="none" checked="checked" /></label><label class="r_txt" style="margin-right:50px;">等待所有商品备齐后再发</label>-->
<!--                <label class="r_rad"><input type="checkbox" name="none" /></label><label class="r_txt" style="margin-right:50px;">取下订单</label>-->
<!--                <label class="r_rad"><input type="checkbox" name="none" /></label><label class="r_txt" style="margin-right:50px;">与店主协商</label>-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->



          </div>



          <table border="0" style="width:900px; margin-top:20px;" cellspacing="0" cellpadding="0">
            <tr>
              <td align="right">
                该订单完成后，您将获得 <font color="#ff4e00">1815</font> 积分 ，以及价值 <font color="#ff4e00">￥0.00</font> 的红包 <br />
                商品总价: <font color="#ff4e00">{{totalPrice() | money}}</font>  + 配送费用: <font color="#ff4e00">￥15.00</font>
              </td>
            </tr>
            <tr height="70">
              <td align="right">
                <b style="font-size:14px;">应付款金额：<span style="font-size:22px; color:#ff4e00;">{{totalPrice() | money}}</span></b>
              </td>
            </tr>
            <tr height="70">
              <td align="right"><a @click="add_order()"><img src="../assets/images/btn_sure.gif" /></a></td>
            </tr>
          </table>



        </div>
          <div v-else style="font-size: 25px;text-align: center; margin-top: 30px;height: 100px;">购物车空空如也，请先<router-link to="/">去购买商品</router-link>~</div>
        </div>
      <!--End 第二步：确认订单信息 End-->
      </div>
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
        name: "Shop_car2",
        data(){
            return{
                newarr:'',//定义的新值，为查询购物车选中结算的商品
                my_address:'',//我的收货地址
                user_name:'',
                user_phone:'',
                order_address:'',
                total_price:0,
                goods_name:'',
            }
        },
        methods:{
            // 父组件接收子组件传的值，<v-header @myCar="getMyCar"></v-header>
            //myCar子组件自己定义的名字，getMyCar自己定义的方法
            getMyCar(data){
                this.car = data
            },
            //总价计算
            totalPrice : function(){
                var totalP = 0;
                for (var i = 0,len = this.newarr.length;i<len;i++) {
                    totalP+=this.newarr[i].price*this.newarr[i].num;
                }
                this.total_price = totalP
                return totalP;
            },
            getAddress(res){
                this.user_name = res.name//收货人姓名
                this.user_phone = res.phone//收货人电话
                this.order_address = res.address//收货人地址
            },
            add_order(){
                if (this.order_address == ''){
                    alert("请选择地址")
                    return false
                }
                var now = new Date();
                var time = now.getTime()
                axios.post(this.url+'order/add',{
                    token:localStorage.getItem("token"),//token验证
                    user_name : this.user_name,
                    user_phone : this.user_phone,
                    order_address : this.order_address,
                    total_price:this.total_price,//订单总价
                    order_time : time,//下单时间，时间戳格式
                    arr:this.newarr,
                })
                  .then(res => {//后台传过来的值，判断是否添加成功
                      var token = localStorage.getItem("token")
                      var order_sn = res.data.order_sn
                      window.location.href = this.url+'pay/index?order_sn='+order_sn+'&token='+token;
                  })
                  .catch(function (error) {//判断身份是否过期，如果token还存在，但是验证不通过说明已过期
                      console.log(error)
                  }.bind(this));
            }
        },
        //组件
        components:{
            "c-header":Header,
            "v-menu":Menu,
        },
        mounted(){
            var id = this.$route.query.str
            // this.arr = JSON.parse(arr);//字符串转对象
            var ids = id.split(',');//字符串转数组，分隔符为逗号
            //展示购物车选中的商品
            axios.post(this.url+'cart/myCarTwo',{
                token:localStorage.getItem("token"),//token验证
                ids:ids,
            })
            .then(res => {//后台传过来的值，判断是否添加成功
                this.newarr = res.data
                console.log(this.newarr)
            })
            .catch(function (error) {//判断身份是否过期，如果token还存在，但是验证不通过说明已过期
                console.log(error)
            }.bind(this));
            //查询出用户的收货地址
            axios.post(this.url+'address/show',{
                token:localStorage.getItem("token")
            })
                .then(res => {
                    this.my_address = res.data
                })
                .catch(error => {
                    this.$router.push({path: 'login'});
                    console.log(error);
                });
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
