<template>
  <div class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
<!--    <div class="info-other">
      <span>{{ goods.columns[0]}}</span>
      <span>{{ goods.columns[1]}}</span>
      <span>{{ goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{ goods.services[index-1].name}}</span>
      </span>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "GoodsBaseInfo",
    // data(){
    //   return{
    //     goods:this.info
    //   }
    // },
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
  }
</script>

<style scoped>
  .base-info{
    width: 100%;
    height: 150px;
    font-size: .8rem;
    /* margin: 10px 0px; */
    /* box-shadow: 0 0 3px rgba(22,22,22,.2); */
    /* border: #FF5777 1px solid; */
  }
  .info-title{
    padding: 10px;
    color: var(--color-text);
    font-size: 1.2rem;
  }
  .info-price,.info-other,.info-service{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 0;
  }
  .info-service img{
    width: 15px;
  }
  .n-price{
    color: var(--color-tint);
  }
  .o-price{
    text-decoration: line-through;
  }
</style>
