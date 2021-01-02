<template>
  <div class="detail_navbar">
    <NavBar>
      <div slot='center'>
        <TabControl :titles='titles' class='tab_control' @tabClick='handleTabClick'></TabControl>
      </div>
      <div slot='left' class="left" @click="handleBackClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>

    </NavBar>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl'

  export default{
    name:'DetailNavBar',
    components:{
      NavBar,
      TabControl
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐']
      }
    },
    methods:{
      handleBackClick(){
        this.$router.go(-1)
      },
      handleTabClick(index){
        console.log(index);
      }
    }
  }
</script>

<style scoped>
  .tab_control{
    padding: 0;
  }
  .left{
    padding-top:  7px;
  }
  .detail_navbar{
    
  }
</style>
