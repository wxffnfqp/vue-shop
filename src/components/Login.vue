<template>
  <div class="hello">
    <v-header></v-header>
    <!--End Header End-->
    <!--Begin Login Begin-->
    <div class="log_bg">
      <div class="top">
        <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
      </div>
      <div class="login">
        <div class="log_img"><img src="../assets/images/l_img.png" width="611" height="425" /></div>
        <div class="log_c">
          <form>
            <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr height="50" valign="top">
                <td width="55">&nbsp;</td>
                <td>
                  <span class="fl" style="font-size:24px;">登录</span>
                  <span class="fr">还没有商城账号，<a href="Regist.html" style="color:#ff4e00;">立即注册</a></span>
                </td>
              </tr>
              <tr height="70">
                <td>用户名</td>
                <td><input type="text" value="" class="l_user" v-model="name" /></td>
              </tr>
              <tr height="70">
                <td>密&nbsp; &nbsp; 码</td>
                <td><input type="password" value="" class="l_pwd" v-model="pwd"/></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">请保存我这次的登录信息</label>
                    </span>
                  <span class="fr"><a href="#" style="color:#ff4e00;">忘记密码</a></span>
                </td>
              </tr>
              <tr height="60">
                <td>&nbsp;</td>
                <td><input type="button" value="登录" class="log_btn" @click="login()" /></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
    <!--End Login End-->
  </div>
</template>
<script>
    import axios from 'axios';
    import Header from "./assembly/Header";
  export default {
      name: "login",
      data() {
          return {
              name:'',
              pwd:'',
          }
      },
      methods:{
          login:function() {
              if (this.name === '' || this.pwd === ''){
                  alert("用户名或密码不能为空")
              }else{
                  axios.post(this.url+'auth/login', {
                      name: this.name,
                      password: this.pwd,
                  })
                  .then(function (response) {
                      if (response.status==200){
                          // 存储localStorage 本地存储
                          localStorage.setItem("token", response.data.access_token);
                          localStorage.setItem("name", response.data.name);
                          localStorage.setItem("id", response.data.id);
                          // this.$router.push({name: 'Index'});
                              this.$router.go(-1);
                      }
                      console.log(response)
                  }.bind(this))
                  .catch(function (error) {
                      alert("用户名或密码错误")
                      console.log(error);
                  });
              }
          }
      },
      components:{
          "v-header":Header,
      }
  }

</script>

<!--<style>-->
<!--  @import "../assets/css/style.css";-->
<!--</style>-->
