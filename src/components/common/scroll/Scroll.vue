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
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        observeDOM: true,
        click: true
      })
      // this.scroll.refresh()
      // console.log(this.scroll);
    }
  }
</script>

<style>
</style>
