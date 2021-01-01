<template>
  <div class="scroll-wapper" ref='scroll'>
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null,
        hooks:null
      }
    },
    props:{
      probe:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,

        default:false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        observeDOM: true,
        click: true,
        probeType:this.probe,
        pullUpLoad:this.pullUpLoad
      })
      this.hooks = this.scroll.hooks
      // this.scroll.refresh()
      // console.log(this.scroll);
    },
    methods:{
      scrollTo(position){
        this.scroll.scrollTo(position.x,position.y,position.time)
        // console.log(this.scroll.hooks);
      },
      on(evtentName,callback){
        this.scroll.on(evtentName,callback)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style>
</style>
