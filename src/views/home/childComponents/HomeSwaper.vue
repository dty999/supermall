<!-- <template>
  <div id="homeSwaper">
    <Swiper>
      <SwiperItem v-for='(item,index) of banners' :key='index'>
        <a :href="item.link">
          <img :src="item.image"></img>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default{
    name:'homeSwaper',
    props:{
      banners:{
        type:Array,
        default:[]
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>
 -->

<template>
  <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <swipe-item v-for='(item,index) of banners' :key='index'>
      <a :href="item.link">
        <img :src="item.image" @load = 'handleOnload' />
      </a>
    </swipe-item>
  </Swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';

  export default{
    name:'HomeSwaper',
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
<style>
.my-swipe{
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.my-swipe img{
  width: 100%;
  height: 100%;
}
</style>
