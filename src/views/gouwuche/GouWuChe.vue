<template>
  <div class="gen">
    <NavBar class='home-nav'>
      <div slot="center">购物车({{goodsTypeCount}})</div>
    </NavBar>

    <!-- <meScroll class='mescroll' ref='meScroll'> -->
      <ProductList class='cards'></ProductList>
<!--    </meScroll> -->

  </div>

</template>

<script>
  import meScroll from '@/components/common/scroll/meScroll.vue'
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import ProductList from './child/ProductList.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'GouWuChe',
    data() {
      return {
        bscroll: null
      }
    },
    computed:{
      // goodsTypeCount(){
      //   return this.$store.getters.goodsTypeCount
      // }
      ...mapGetters(['goodsTypeCount'])
    },

    components:{
      meScroll,
      NavBar,
      ProductList
    },

    mounted() {

    }
  }
</script>

<style>
/* .bscroll {
    height: 300px;
    background-color: rgba(33, 33, 33, .1);
    overflow-y: scroll;
   overflow: hidden;

  } */
  .gen{
    height: calc(100vh - 44px);
  }
 .mescroll {
    height: calc(100vh - 88px);
    overflow: hidden;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    right: 0;
  }
  .cards{
    padding-top: 44px;
    /* margin-bottom: 194px; */
    overflow: scroll;
        height: calc(100vh - 88px);

  }
</style>
