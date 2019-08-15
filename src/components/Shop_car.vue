<template>
    <div>
      <c-header @myCar="getMyCar"></c-header>
      <!--Begin Menu Begin -->
      <v-menu></v-menu>
      <!--End Menu End-->
      <div class="i_bg">
        <div class="content mar_20">
          <img src="../assets/images/img1.jpg" />
        </div>

        <!--Begin 第一步：查看购物车 Begin -->
        <div class="content mar_20">
          <table border="0" class="car_tab" style="width:1200px; margin-bottom:50px;" cellspacing="0" cellpadding="0" v-if="car.length">
<!--            <table border="0" class="car_tab" style="width:1200px; margin-bottom:50px;" cellspacing="0" cellpadding="0" >-->

            <tr>
              <td class="car_th" width="50">全选<input type="checkbox" id="box" @click="checkAll" v-model="checkall" /></td>
              <td class="car_th" width="490">商品名称</td>
              <td class="car_th" width="140">属性</td>
              <td class="car_th" width="150">购买数量</td>
              <td class="car_th" width="130">小计</td>
              <td class="car_th" width="140">返还积分</td>
              <td class="car_th" width="150">操作</td>
            </tr>
<!--            <tr v-for="res in car">-->
<!--              <td>-->
<!--                <div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>-->
<!--                {{res.og_name}}-->
<!--              </td>-->
<!--              <td align="center">{{res.attr_name}}</td>-->
<!--              <td align="center">-->
<!--                <div class="c_num">-->
<!--                  <input type="button" id="jia_num" value="" @click="res.num&#45;&#45;" v-bind:disabled="res.num === 0" class="car_btn_1" />-->
<!--                  <input type="text" v-model="res.num" id="my_number"  class="car_ipt" />-->
<!--                  <input type="button" value="" @click="res.num++" class="car_btn_2" />-->
<!--                </div>-->
<!--              </td>-->
<!--              <td align="center" style="color:#ff4e00;">￥{{res.num * res.price}}</td>-->
<!--              <td align="center">26R</td>-->
<!--              <td align="center"><a onclick="ShowDiv('MyDiv','fade')">删除</a>&nbsp; &nbsp;<a href="#">加入收藏</a></td>-->
<!--            </tr>-->
            <tr v-for="(res,index) in car">
              <td><input type="checkbox" class="checkbox" v-model="checked"    @click="select(res.id,res.price,res.num,index,res)" :value="res.id" /></td>
<!--              <td><input type="checkbox" class="checkbox"  v-model="checked"     @change="select(res.id,res.num,res.price,index)" :value="res.id" /></td>-->
              <td>
                <div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>
                {{res.og_name}}
              </td>
              <td align="center">{{res.attr_name}}</td>
              <td align="center">
                <div class="c_num">
                  <input type="button" id="jia_num" value="" @click="list1(index,res.id)" v-bind:disabled="res.num === 0" class="car_btn_1" />
                  <input type="text" v-model="res.num" @change="change_num(index,$event,res.id)"  class="car_ipt" />
                  <input type="button" value="" @click="list(index,res.id)" class="car_btn_2" />
                </div>
              </td>
              <td align="center" style="color:#ff4e00;">{{res.price * res.num | money}}</td>
              <td align="center">26R</td>
<!--              <td align="center"><a onclick="ShowDiv('MyDiv','fade',res.id)">删除</a>&nbsp; &nbsp;<a href="#">加入收藏</a></td>              -->
              <td align="center"><a @click="myDel(res.id)">删除</a>&nbsp; &nbsp;<a href="#">加入收藏</a></td>

            </tr>
            <tr height="70">
              <td colspan="6" style="font-family:'Microsoft YaHei'; border-bottom:0;">
                <label class="r_rad"><input type="checkbox" name="clear" checked="checked" /></label><label class="r_txt">清空购物车</label>
<!--                <span class="fr">已选商品<a>{{count}}</a>件 商品总价：<b style="font-size:22px; color:#ff4e00;">￥{{totalPrice()}}</b></span>-->
                <span class="fr">已选商品<a>{{count}}</a>件 商品总价：<b style="font-size:22px; color:#ff4e00;">{{total | money}}</b></span>
                <span>数组{{checked}}</span>
              </td>
            </tr>
            <tr valign="top" height="150">
              <td colspan="6" align="right">
                <a href="#"><img src="../assets/images/buy1.gif" /></a>&nbsp; &nbsp; <a @click="shopCar2()"><img src="../assets/images/buy2.gif" /></a>
<!--                <a href="#"><img src="../assets/images/buy1.gif" /></a>&nbsp; &nbsp; <a><router-link :to="{path:'/shop_car2',query:{arr:newcar}}"><img src="../assets/images/buy2.gif" /></router-link></a>-->
              </td>
            </tr>
          </table>
          <div v-else style="font-size: 25px;text-align: center; margin-top: 30px;height: 100px;">购物车空空如也，请先<router-link to="/">去购买商品</router-link>~</div>
        </div>
        <!--End 第一步：查看购物车 End-->


        <!--Begin 弹出层-删除商品 Begin-->
        <div id="fade" class="black_overlay"></div>
        <div id="MyDiv" class="white_content">
          <div class="white_d">
            <div class="notice_t">
              <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="../assets/images/close.gif" /></span>
            </div>
            <div class="notice_c">

              <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                <tr valign="top">
                  <td>您确定要把该商品移除购物车吗？</td>
                </tr>
                <tr height="50" valign="bottom">
                  <td><a href="#" class="b_sure">确定</a><a href="#" class="b_buy">取消</a></td>
                </tr>
              </table>

            </div>
          </div>
        </div>
        <!--End 弹出层-删除商品 End-->
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
        name: "Shop_car",
        data(){
            return{
                checkall: false,
                checked: [],
                newcar:[],
                count:0,
                num:0,
                total:0,
                car:'',
            }
        },
        computed:{

        },
        // 父组件接收子组件传的值，<v-header @myCar="getMyCar"></v-header>
        //myCar子组件自己定义的名字，getMyCar自己定义的方法
        methods:{
            select(id,price,num,index,myres){
                    var my_id = myres.id
                // console.log(myres)
                    if (this.newcar[my_id]===undefined||this.newcar[my_id]===''){
                        this.newcar[my_id] = myres
                    }else{
                        this.newcar[my_id]= '';
                    }
                    var totalp = 0;
                    var number = 0;
                    this.newcar.forEach(function (val) {
                        if (val!==''){
                            number += val.num
                            totalp += val.price * val.num;
                        }
                    })
                    this.count=number
                    this.total=totalp
                // var totalAll = 0
                // this.checked.forEach(function(res) {
                //     if (myres[index] !== '' || myres[index] !== undefined){
                //         totalAll += myres[index].num * myres[index].price
                //     }else {
                //         myres[index] = ''
                //     }
                //     console.log(totalAll)
                //     // _this.price+=parseInt(res.price*res.num);
                //     // _this.count+=parseInt(res.num);
                //     // _this.checked.push(res.id)
                // })
                // for(var i = 0; i < this.checked.length; i++){
                //     console.log(this.checked[i])
                //     // _this.total+= (myres[index].num * myres[index].price)
                // }
                // return false;
                // console.log(num)
                // console.log(999)
                // return false;
                    // item.num = !item.num;
                    // console.log(this.car);

                // console.log(Number(price))
                // this.total=0;
                // var _this = this
                // // // this.checked = []
                // this.total=0;
                // this.count=0;
                // for(var i = 0; i < this.checked.length; i++){
                //     console.log(this.checked)
                //     _this.total+= (myres[index].num * myres[index].price)
                // }
                // this.checked.forEach(function(res) {
                //     // console.log(JSON.stringify(res).indexOf(JSON.stringify(myres)) === -1)
                //     console.log(myres)
                //     console.log(res)
                //     _this.total+=myres[index].num * myres[index].price
                //     _this.count+=myres[index].num;
                //     // _this.price+=parseInt(res.price*res.num);
                //     // _this.count+=parseInt(res.num);
                //     // _this.checked.push(res.id)
                // })
            },
            checkAll: function() {
                /**
                 *控制全选反选
                 */
                var _this = this
                //true的时候是全选，false是不选
                if(this.checkall) {
                    // 实现反选，按钮选中时 实现了反选，列表为空
                    this.checked = []
                    this.total=0;
                    this.count=0;
                } else {
                    // 实现全选
                    this.price=0;
                    this.count=0;
                    this.checked = []
                    this.car.forEach(function(res) {
                        _this.total+=res.price*res.num;
                        _this.count+=parseInt(res.num);
                        _this.checked.push(res.id)
                    })
                }
                if(this.checked.length === this.car.length) {
                    this.checkall = true
                    // console.log(this.checkall)
                    // console.log(this.checked)
                }
            },
            /**
             * 当单选框选中时
             */
            checkAll: function() {

                var _this = this
                //true的时候是全选，false是不选
                if(this.checkall) {
                    // 实现反选，按钮选中时 实现了反选，列表为空
                    this.checked = []
                    this.total=0;
                    this.count=0;
                } else {
                    // 实现全选
                    this.total=0;
                    this.count=0;
                    this.checked = []
                    this.car.forEach(function(res) {
                        _this.total+=res.price*res.num;
                        _this.count+=parseInt(res.num);
                        _this.checked.push(res.id)
                    })
                }
                if(this.checked.length === this.car.length) {
                    this.checkall = true
                    // console.log(this.checkall)
                    // console.log(this.checked)
                }
            },



            myDel(id){
                var del = confirm("你确定要删除吗")
                if (del ===true){
                    axios.post(this.url+'cart/del',{
                        token:localStorage.getItem("token"),//token验证
                        id:id,
                    })
                        .then(res => {//后台传过来的值，判断是否添加成功
                            this.$router.go(0);
                        })
                        .catch(function (error) {//判断身份是否过期，如果token还存在，但是验证不通过说明已过期

                        }.bind(this));
                }
            },
            change_num(index,e,id) {
                var val = e.target.value;
                if (val < 1){
                    this.$router.go(0);
                    alert("数量不能小于1")
                    return false;
                    // this.car[index].num=1
                }
                axios.post(this.url+'cart/up_car',{
                    token:localStorage.getItem("token"),//token验证
                    num:val,
                    id:id,
                })
                    .then(res => {//后台传过来的值，判断是否添加成功

                    })
                    .catch(function (error) {//判断身份是否过期，如果token还存在，但是验证不通过说明已过期

                    }.bind(this));

            },
            list:function(index,id){
                console.log(this.newcar)
                this.car[index].num++;
                axios.post(this.url+'cart/up_car',{
                    token:localStorage.getItem("token"),//token验证
                    num:this.car[index].num,
                    id:id,
                })
                    .then(res => {//后台传过来的值，判断是否添加成功
                        var number2 = 0
                        var totalp2 = 0
                        this.newcar.forEach(function (val) {
                            if (val!==''){
                                number2 += val.num
                                totalp2 += val.price * val.num;

                            }
                        })
                        this.total = totalp2
                    })
                .catch(function (error) {//判断身份是否过期，如果token还存在，但是验证不通过说明已过期

                }.bind(this));
               },
            list1:function(index,id){
                this.car[index].num--;
                if (this.car[index].num<1){
                    this.car[index].num=1
                    return false
                }
                axios.post(this.url+'cart/up_car',{
                    token:localStorage.getItem("token"),//token验证
                    num:this.car[index].num,
                    id:id,
                })
                .then(res => {//后台传过来的值，判断是否添加成功
                    var number1 = 0
                    var totalp1 = 0
                    this.newcar.forEach(function (val) {
                        console.log(val)
                        if (val!==''){
                            number1 += val.num
                            totalp1 += val.price * val.num;

                        }
                    })
                    this.total = totalp1
                })
                .catch(function (error) {//判断身份是否过期，如果token还存在，但是验证不通过说明已过期

                }.bind(this));
            },

//                    总计：
//             total:function(){
//                 for(var i=0,tot=0;i<this.arr.length;i++){
//                     tot+=this.arr[i].five;
//                 }
//                 this.arrs=tot;
//             },

            getMyCar(data){
                this.car = data
            },
            totalPrice : function(){
                var totalP = 0;
                for (var i = 0,len = this.car.length;i<len;i++) {
                    totalP+=this.car[i].price*this.car[i].num;
                }
                return totalP;

            },
            shopCar2(){
                // var arr = Object.entries(this.newcar);//对象转数组
                // var arr = JSON.stringify(this.newcar);//对象转字符串
                if(this.newcar == ''){
                    alert("请选择商品")
                    return false
                }
                var newarr = []
                this.newcar.forEach(function (v) {
                    if (v != ''){
                        newarr.push(v.id)
                    }
                })
                var str = newarr.join();//数组转字符串,括号里面不加默认为逗号分隔
                this.$router.push({
                        path: '/shop_car2',
                        query: {
                            str: str
                        }
                    });
            },

        },
        //过滤器，防止总价有小数点乘不尽
        filters:{
            money(val){
                return '￥'+ Math.round(val*100)/100
            }
        },
        //组件
        components:{
            "c-header":Header,
            'v-menu':Menu,
        },
    }
</script>

<style scoped>

</style>
