<template>
  <div class="detail">

    <DetailNavBar class='navbar'></DetailNavBar>
    <Scroll :click='true' :probe='3' class='scroll' ref='scroll'>
      <DetailSwper :banners='swperImg' ref='shangpin'></DetailSwper>
      <GoodsBaseInfo :goods='goodsBaseInfo'></GoodsBaseInfo>
      <Shop></Shop>
      <ul>
        <li v-for="imgUrl in imgList">
          <img :src="imgUrl" class="detailImg" />
        </li>
      </ul>
      <Params ref='canshu' />
      <PingLun :commentInfo='commentInfo' ref='pinglun' />
      <ShowGoods :goodsList='goodsList' ref='tuijian'></ShowGoods>
    </Scroll>
    <ToolBar class='toolBar' :goodsId='iid'></ToolBar>

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


  import {
    bus,debounce
  } from '../../common/utils.js'

  import Scroll from '../../components/common/scroll/Scroll.vue'
  import ShowGoods from '../../components/content/showGoods/ShowGoods.vue'

  import DetailNavBar from './child/DetailNavBar.vue'
  import DetailSwper from './child/DetailSwper'
  import GoodsBaseInfo from './child/GoodsBaseInfo.vue'
  import Shop from './child/Shop.vue'
  import Params from './child/Params.vue'
  import PingLun from './child/PingLun.vue'
  import ToolBar from './child/ToolBar.vue'


  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        goodsData: null,
        swperImg: [],
        goodsBaseInfo: {},
        imgList: [],
        recommendList: [],
        commentInfo: [],
        offset: [],
        enterTime:null
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
      ShowGoods,
      ToolBar
    },
    computed: {
      goodsList() {
        return this.recommendList.map(item => {
          return {
            title: item.title,
            orgPrice: item.price,
            cfav: item.cfav,
            show: {
              img: item.image
            },
            iid: item.item_id
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
        this.commentInfo.push(...data.rate.list)
        // console.log(this.commentInfo);
      })
      getRecommend().then((res) => {
        this.recommendList.push(...res.data.data.list)
        // console.log(this.recommendList);
      })

      bus.$on('tabClickInBus', this.handle)
      this.enterTime = new Date()


    },
    mounted() {
      console.log('mounted');
      this.$refs['scroll'].on('scroll',this.onScroll)
        // this.offset = []
        // this.offset.push(0)
        // this.offset.push(-1*this.$refs['canshu'].$el.offsetTop)
        // this.offset.push(-1*this.$refs['pinglun'].$el.offsetTop)
        // this.offset.push(-1*this.$refs['tuijian'].$el.offsetTop)
    },


    destroyed() {
      bus.$off('tabClickInBus', this.handle)
    },


    methods: {
      handleShowGoodsClick() {

      },
      handle(index) {
        this.getoffset()
        console.log(this.offset[index]);
        this.$refs['scroll'].scrollTo({x:0,y:this.offset[index],time:1000})

      },
      onScroll(pos){
        // console.log('scroll');
        // debounce(this.getoffset,50)()
        const curTime = new Date()
        if(curTime.getTime() - this.enterTime.getTime() < 6000){
          this.getoffset()
          console.log('xxxxx');
        }

        let y = - pos.y
        if(y >=-this.offset[1] && y <-this.offset[2]){
          bus.$emit('changeTab',1)
        }
        if(y >=-this.offset[2] && y <-this.offset[3]){
           bus.$emit('changeTab',2)
        }
        if(y >=-this.offset[3]){
           bus.$emit('changeTab',3)
        }
        if(y <-this.offset[1]){
           bus.$emit('changeTab',0)
        }

      },
      getoffset(){
        this.offset = []
        this.offset.push(0)
        this.offset.push(-1*this.$refs['canshu'].$el.offsetTop)
        this.offset.push(-1*this.$refs['pinglun'].$el.offsetTop)
        this.offset.push(-1*this.$refs['tuijian'].$el.offsetTop)
        // console.log('getoffset');
      }
    },
  };
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
    height: calc(100% - 88px);
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
  .toolBar{
/*    position: relative;
    z-index: 102; */
  }

</style>
