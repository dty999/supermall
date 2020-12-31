<template>
  <div class="showGoods">
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
    }
  }
</script>

<style>
 .showGoods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .goodsItem{
    width: 46%;
    height: 170px;
    /* border: 1px solid red; */
    box-shadow: 1px 1px 3px rgba(33,33,33,.5);
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--color-text);
    text-align: center;
    line-height: 20px;
  }
</style>
