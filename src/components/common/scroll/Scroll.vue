<template>

  <div class="scroll-wapper" ref='scroll'>
    <div class="scroll-content">
      <slot></slot>
      <!-- <BackTop @click.native='backTop' v-show='isShowBackTop' class='backTop'></BackTop> -->
    </div>
  </div>
</template>

<script>
  // import {
  //   backTopMixin
  // } from '@/common/mixin.js'
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    // mixins: [backTopMixin],
    data() {
      return {
        scroll: null,
        hooks: null
      }
    },
    props: {
      probe: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,

        default: false
      },
      click: true
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        observeDOM: true,
        click: this.click,
        probeType: this.probe,
        pullUpLoad: this.pullUpLoad
      })
      this.hooks = this.scroll.hooks
      // this.scroll.refresh()
      // console.log(this.scroll);
    },
    methods: {
      scrollTo(position) {
        this.scroll.scrollTo(position.x, position.y, position.time)
        // console.log(this.scroll.hooks);
      },
      on(evtentName, callback) {
        // // this.print()
        // let that = this
        // const fn = function(pos) {
        //   callback(pos)
        //   // that.listenBackTop_bt(pos)
        //   // console.log('我在');
        // }
        this.scroll.on(evtentName, callback)

      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll.refresh()
      }
    }
  }
</script>

<style>
  .scroll-content{
    /* display：inline */
  }
  .backTop{
    position: fixed;
    right: 10px;
    bottom: 55px;
    z-index: 1000;
    width: 43px;
    height: 43px;
  }
</style>
