<template>
  <div class="productItem">
    <!-- <img :src="productData.img" alt="" class="productImg"> -->
    <h3>{{productData.title}}</h3>
    <span>X{{productData.count}}</span>
    <input type="checkbox" >
  </div>
</template>

<script>
  export default {
    name:'ProductItem',
    props:{
      productData:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
.productItem{
  width: 100%;
  height: 100px;
  border: 1px solid black;

}
h3{
  /* width: calc(100% - 100px); */
}
span{
  color: #FF5777;
  /* line-height: 100px; */
}
/* .productImg{
  width: 70px;
  height: 70px;
  display: inline-block;
} */
</style>
