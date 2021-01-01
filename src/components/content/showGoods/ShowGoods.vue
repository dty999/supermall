<template>
  <div class="goods">
    <GoodsItem v-for = "(item,index) of goodsList" :itemData='item.goods' class='goodsItem' :key='item.goods.id'>

    </GoodsItem>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'
  export default {
    name:"ShowGoods",
    components:{
      GoodsItem,
    },
    props:{
      goodsList:{
        type:Array,
        default:[]
      }
    },
    updated() {
      this.$emit('updated')
    }
  }
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
