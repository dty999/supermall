<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:'BackTop'
  }
</script>

<style scoped>
.backTop{
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 1000;
  width: 43px;
  height: 43px;
}
.backTop img{
   width: 43px;
   height: 43px;

}
</style>
