<template>
  <div class="detail">

    <DetailNavBar class='navbar'></DetailNavBar>
    <Scroll class='scroll' :probe='3' :click='true'>
      <DetailSwper :banners='swperImg'></DetailSwper>
      <GoodsBaseInfo :goods='goodsBaseInfo'></GoodsBaseInfo>
      <Shop></Shop>
      <ul>
        <li v-for="imgUrl in imgList">
          <img :src="imgUrl" class="detailImg" />
        </li>
      </ul>
      <Params />
      <PingLun />
      <ShowGoods :goodsList='goodsList'></ShowGoods>
    </Scroll>

  </div>
</template>

<script>
  import {
    getDetailData,
    getRecommend
  } from 'network/detailApi.js'
  import {
    GoodsBaseInfoClass
  } from '../../network/dataStruct.js'

  import Scroll from '../../components/common/scroll/Scroll.vue'
  import ShowGoods from '../../components/content/showGoods/ShowGoods.vue'

  import DetailNavBar from './child/DetailNavBar.vue'
  import DetailSwper from './child/DetailSwper'
  import GoodsBaseInfo from './child/GoodsBaseInfo.vue'
  import Shop from './child/Shop.vue'
  import Params from './child/Params.vue'
  import PingLun from './child/PingLun.vue'


  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        goodsData: null,
        swperImg: [],
        goodsBaseInfo: {},
        imgList: [],
        recommendList:[]
      }
    },
    components: {
      DetailNavBar,
      DetailSwper,
      GoodsBaseInfo,
      Shop,
      Scroll,
      Params,
      PingLun,
      ShowGoods
    },
    computed:{
      goodsList(){
        return this.recommendList.map(item=>{
          return {
            title:item.title,
            orgPrice:item.price,
            cfav:item.cfav,
            show:{
              img:item.image
            },
            iid:item.item_id
          }
        })
      }
    },
    created() {
      this.iid = this.$route.params.iid
      const qs = `?iid=${this.iid}`
      console.log(qs);
      getDetailData(qs).then(res => {
        this.goodsData = res.data.result
        const data = this.goodsData
        this.swperImg.push(...this.goodsData.itemInfo.topImages)
        this.goodsBaseInfo = new GoodsBaseInfoClass(data.itemInfo, data.columns, data.shopInfo.services)
        this.imgList.push(...data.detailInfo.detailImage[0].list)

        // console.log(this.imgList);
      })
      getRecommend().then((res)=>{
        this.recommendList.push(...res.data.data.list)
        // console.log(this.recommendList);
      })
      // watch :{
      //   　'$route': function (to, from) {
      //        //执行数据更新查询
      // 　　this.changePage();
      // 　　}
      // }
    },
    methods:{
      handleShowGoodsClick(){

      }
    }
  }
</script>

<style scoped="">
  .detail {
    position: relative;
    z-index: 101;
    background-color: #FFFFFF;
    height: 100vh;
  }

  .navbar {
    position: relative;
    left: 0;
    top: 0;
    z-index: 102;
    background-color: #FFFFFF;
    /* width: 100%; */
  }

  .scroll {
    height: calc(100% - 44px);
    overflow: hidden;
    /*    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 0px; */
    z-index: 101;
  }

  .detailImg {
    width: 100%;
  }
</style>
