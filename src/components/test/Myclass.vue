<template>
  <div>
    <h1>动态CSS Class</h1>
    <h2>示例2</h2>
    <div v-bind:class="compClasses">
      <span>Henry</span>
    </div>
    <button @click="changeColor = !changeColor">changColor</button>
    <button @click="changeLength = !changeLength">changLength</button>
  </div>
</template>
<script>
  export default {
      data(){
          return{
              changeColor:false,
              changeLength:false,
          }
      },
      computed:{
        compClasses:function () {
            return {
                changeColor : this.changeColor,
                changeLength : this.changeLength
            }
        }
      }
  }
</script>
<style>
  span{
    background: red;
    display: inline-block;
    padding: 10px;
    color: #fff;
    margin: 10px 0;
  }
  .changeColor span{
    background:green;
  }
  .changeLength span:after{
    content:"length";
    margin-left: 10px;
  }
</style>
