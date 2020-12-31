<template>
  <div class="goodsItem">
    <a>
     <img :src="itemData.imgUrl" />
      <h4>{{ itemData.title}}<br>
      <span>{{itemData.price }}</span>
      </h4>
    </a>
  </div>
</template>

<script>
  export default{
    name:'GoodsItem',
    props:{
      itemData:Object
    },
    created() {
      console.log(this.itemData);
    }
  }
</script>

<style>
  .goodsItem img{
    width: 100%;

  }
  .goodsItem a h4{
    font-size: 14px;
    color: var(--color-text);
    text-align: center;

  }
  .goodsItem a h4 span{
    color: var(--color-tint);
  }
</style>
