
<template>
  <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <swipe-item v-for='(item,index) of banners' :key='index'>
     <a :href="item">
       <img :src="item" @load = 'handleOnload'></img>
      </a>

    </swipe-item>
  </Swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';

  export default{
    name:'MeSwaper',
    components:{
      Swipe,
      SwipeItem
    },
    props:{
      banners:{
        type:Array,
        default:[]
      }
    },
    methods:{
      handleOnload(){
        this.$emit('imgOnload')
      }
    }
    ,
  }
</script>
<style scoped>
.my-swipe{
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.my-swipe img{
  width: 100%;
/*  position: relative;
  right: -50%;
  top: -50%;
  transform: translate(-50%,-50%); */
}
</style>
