<template>

  <!--  <div class="scroll-wapper" ref='scroll'>
    <div class="scroll-content">
      <slot></slot>
      <BackTop @click.native='backTop' v-show='isShowBackTop' class='backTop'></BackTop>
    </div>

  </div> -->
  <div>
    <Scroll class="mescroll" ref='scroll' :probe='3'>
      <slot></slot>
    </Scroll>
    <BackTop @click.native='backTop' v-show='isShowBackTop' class='backTop'></BackTop>

  </div>
</template>

<script>
  import {
    backTopMixin
  } from '@/common/mixin.js'
  import Scroll from './Scroll.vue'
  export default {
    name: "meScroll",
    mixins: [backTopMixin],
    components: {
      Scroll
    },
    mounted() {
      this.$refs.scroll.on('scroll', this.listenBackTop_bt)
    }

  }
</script>

<style>
 .mescroll {
    height: calc(100vh - 88px);
    overflow: hidden;
  }
</style>
