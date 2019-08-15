<template>
  <div>
    <c-header></c-header>
    <!--End Header End-->
    <div class="i_bg bg_color">
      <!--Begin 用户中心 Begin -->
      <div class="m_content">
        <!--        用户中心左边菜单列表-->
        <v-userconter></v-userconter>
        <div class="m_right">
          <p></p>
          <div class="mem_tit"><b>收货地址</b></div>
          <div class="address">

              <table border="1" class="car_tab" style="width:1000px; margin-bottom:50px;" cellspacing="0" cellpadding="0" >
                <tr>
                  <th class="car_th" width="20">ID</th>
                  <th class="car_th" width="50">收货人姓名</th>
                  <th class="car_th" width="100">收货人电话</th>
                  <th class="car_th" width="100">收货人地址</th>
                  <th class="car_th" width="100">操作</th>
                </tr>
                <tr v-for="(res,index) in my_address">
                  <td align="center">{{res.id}}</td>
                  <td align="center">{{res.name}}</td>
                  <td align="center">{{res.phone}}</td>
                  <td align="center">{{res.address}}</td>
                  <td align="center"><a @click="delAddress(res.id)">删除</a></td>
                </tr>
              </table>



          </div>

          <div class="mem_tit">
            <span><b>添加收货地址</b></span>
          </div>
          <table border="0" class="add_tab" style="width:930px;"  cellspacing="0" cellpadding="0">
            <tr>
              <td width="135" align="right">配送地区</td>
              <td colspan="3" style="font-family:'宋体';">
                <select class="cate"  data-flag="1" id="f1" @change="getProvince">
                  <option value="0">请选择省/直辖市</option>
                  <option v-for="prov in province" :value="prov.area_id" :id="'my_prov'+prov.area_id">{{prov.area_name}}</option>
                </select>
                <select class="cate" data-flag="2" id="f2" @change="getCity">
                  <option value="0">请选择城市</option>
                  <option v-for="mycity in city" :value="mycity.area_id" :id="'my_city'+mycity.area_id">{{mycity.area_name}}</option>
                </select>
                <select class="cate" data-flag="3" id="f3" @change="getDistrict">
                  <option value="0">请选择城区/县</option>
                  <option v-for="mydistrict in district" :value="mydistrict.area_id" :id="'my_district'+mydistrict.area_id">{{mydistrict.area_name}}</option>
                </select>
                （必填）
              </td>
            </tr>
            <tr>
              <td align="right">收货人姓名</td>
              <td style="font-family:'宋体';"><input type="text" v-model="my_name" value="姓名" class="add_ipt" />（必填）</td>
            </tr>
            <tr>
              <td align="right">详细地址</td>
              <td style="font-family:'宋体';"><input type="text" v-model="address" value="世外桃源" class="add_ipt" />（必填）</td>
            </tr>
            <tr>
              <td align="right">手机</td>
              <td style="font-family:'宋体';"><input type="text" v-model="phone" value="1361234587" class="add_ipt" maxlength="11"  οnkeyup="this.value=this.value.replace(/^[1][3,4,5,7,8][0-9]{9}$/,'');" />（必填）</td>
            </tr>
          </table>
          <p align="right">
            <a href="#">删除</a>&nbsp; &nbsp; <a  class="add_b" @click="add_address()">保存地址</a>
          </p>



        </div>
      </div>
      <!--End 用户中心 End-->
    </div>

  </div>
</template>
<script>

    import axios from 'axios';
    import Header from "./assembly/Header_cart";
    import UserConter from "./assembly/UserConter";
    export default {
        name:'member',
        data(){
            return{
                user:localStorage.getItem("name"),
                my_name:'',//收货人姓名
                address:'',//收货人地址
                phone:'',//收货人电话
                province:'',//收货的省，三级联动
                city:'',//收货的城市，三级联动
                district:'',//收货的区/县，三级联动
                my_province:'',//要传到后台的省
                my_city:'',//要传到后台的城市
                my_district:0,//要传到后台的区/县
                my_address:'',//我的地址
            }
        },
        methods:{
            //获取省/直辖市地址
            getProvince(){
                let id = document.getElementById('f1').value
                let name = document.getElementById('my_prov'+id).innerHTML
                this.my_province = name
                document.getElementById('f2').value = 0
                document.getElementById('f3').value = 0
                axios.post(this.url+'address/areashow',{
                    pid:id,
                })
                    .then(res => {
                        this.city = res.data
                    })
                    .catch(error => {
                        if (localStorage.getItem("token") !== null){
                            this.$router.push({path: 'login'});
                        }
                        console.log(error);
                    });
            },
            //获取城市地址
            getCity(){
                let id = document.getElementById('f2').value
                let name = document.getElementById('my_city'+id).innerHTML
                this.my_city = name
                document.getElementById('f3').value = 0
                axios.post(this.url+'address/areashow',{
                    pid:id,
                })
                    .then(res => {
                        this.district = res.data
                    })
                    .catch(error => {
                        if (localStorage.getItem("token") !== null){
                            this.$router.push({path: 'login'});
                        }
                        console.log(error);
                    });
            },
            //获取区/县地址
            getDistrict(){
                let id = document.getElementById('f3').value
                let name = document.getElementById('my_district'+id).innerHTML
                this.my_district = name
            },
            //添加收货地址
            add_address(){
                if (this.my_district==='' ||  document.getElementById('f3').value == 0 || this.my_name === '' || this.phone === '' || this.address === ''){
                    alert("信息请填全")
                    return false;
                }
                axios.post(this.url+'address/add',{
                    token:localStorage.getItem("token"),
                    name:this.my_name,
                    phone:this.phone,
                    address:this.my_province+this.my_city+"市"+this.my_district+this.address,
                })
                    .then(res => {
                        if (res.data.status==='success'){
                            alert("添加成功")
                            this.my_name = ''
                            this.phone = ''
                            this.address = ''
                            document.getElementById('f1').value = 0
                            document.getElementById('f2').value = 0
                            document.getElementById('f3').value = 0
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            delAddress(id){
                axios.post(this.url+'address/del',{
                    id:id,
                    token:localStorage.getItem("token")
                })
                    .then(res => {
                        if (res.data.status==='success'){
                            alert("删除成功")
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        mounted(){
            //三级联动地址
            axios.post(this.url+'address/areashow',{
                pid:1
            })
                .then(res => {
                    this.province = res.data
                })
                .catch(error => {
                    if (localStorage.getItem("token") !== null){
                        this.$router.push({path: 'login'});
                    }
                    console.log(error);
                });
            //我的地址展示
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
        components:{
            "c-header":Header,
            'v-userconter':UserConter
        }
    }
    // $(".cate").change(function(){
    //     var type = $(this).val();
    //     var id = $(this).attr("data-flag");
    //     if (id != 3) {
    //         if (id == 1) {
    //             $("#f"+id).next().next().html("");
    //         }
    //         $.ajax({
    //             url:"http://www.blog.com/api/address/areashow",
    //             type:"get",
    //             data:{"flag":1, "type":type},
    //             async:false,
    //             success:function(a) {
    //                 console.log(a)
    //                 var a = eval("("+ a + ")");
    //                 // alert(a.status);
    //                 if(a.status == 0) {
    //                     alert(a.mess);
    //                 } else if (a.status == 1) {
    //                     $("#f"+id).next().html(a.data);
    //                 }
    //             }
    //         });
    //     }
    // });
</script>
