<template>
  <div class="toolBar">
    <img src="~assets/img/detail/cart.png"  @click="shouCang"/>
  </div>
</template>

<script>
  export default {
    name:'ToolBar',
    props:{
      goodsId:{
        type:String,
        default:''
      }
    },
    methods:{
      shouCang(){
        console.log(this.goodsId);
      }
    }
  }
</script>

<style scoped>
.toolBar{
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 0px;
  background-color: #FFFFFF;
  box-shadow: 0 -1px 5px rgba(22,22,22,.5);
  display: flex;
  justify-content: center;
}
.toolBar img{
  width: 40px;
}
</style>
