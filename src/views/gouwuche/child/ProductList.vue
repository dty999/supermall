<template>
  <div>
  <ProductItem v-for='item in productInfo' :productData='item'></ProductItem>

  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'

  export default {
    name:'ProductList',
    components:{
      ProductItem
    },
    data(){
      return {
        productInfo:this.$store.state.cartList
      }
    }
  }
</script>

<style scoped></style>

</style>
