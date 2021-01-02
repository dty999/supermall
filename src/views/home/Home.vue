<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <tabControl :titles="tabControlTitle" @tabClick='handleTabClick' ref='tabControl_bt' v-show='isTabFixed'
    class='tabControl-bt'></tabControl>
    <scroll class="scroll" ref='scroll' :probe='3' :pullUpLoad='true' :click='true'>
      <home-swaper :banners='banners' @imgOnload='getTabControlOffset'></home-swaper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tabControl :titles="tabControlTitle" @tabClick='handleTabClick' ref='tabControl'></tabControl>
      <ShowGoods :goodsList='goodsList' @updated='handleUpdated'></ShowGoods>
    </scroll>
    <BackTop @click.native='backTop' v-show='isShowBackTop'></BackTop>
  </div>

</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import ShowGoods from 'components/content/showGoods/ShowGoods.vue'
  import BackTop from 'components/content/backTop/BackTop.vue'

  import HomeSwaper from './childComponents/HomeSwaper.vue'
  import RecommendView from './childComponents/RecommendView.vue'
  import FeatureView from './childComponents/FeatureView.vue'
  // 网络请求函数
  import {
    getHomeMultidata,
    getDemoData,
    getHomeData
  } from 'network/homeApi'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwaper,
      RecommendView,
      FeatureView,
      ShowGoods,
      TabControl,
      Scroll,
      BackTop,
    },
    computed: {
      goodsList() {
        return this.goods[this.curTab].datalist
      }
    },
    data() {
      return {
        isShowBackTop: false,
        bscroll: null,
        curTab: 'pop',
        banners: [],
        recommends: [],
        tabControlTitle: ['流行11', '新款', '精选'],
        goods: {
          pop: {
            page: 0,
            datalist: []
          },
          new: {
            page: 0,
            datalist: []
          },
          sell: {
            page: 0,
            datalist: []
          }
        },
        tabControlOffsetTop:null,
        isTabFixed:false,
        TabPos:{
          pop:0,
          new:0,
          sell:0,
        },
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    mounted() {
      // this.$nextTick(function(){
      //   this.bscroll = new BScroll('.bscroll-home')
      //   console.log(this.bscroll);
      // })
      this.$refs.scroll.on('scroll', this.onScroll)
      this.$refs.scroll.on('pullingUp', this.pullingUp)
    },
    methods: {
      //事件监听
      handleTabClick(index) {
        switch (index) {
          case 0:
            this.curTab = 'pop'
            break
          case 1:
            this.curTab = 'new'
            break
          case 2:
            this.curTab = 'sell'
            break
        }
        this.$refs.tabControl.curIndex = index
        this.$refs.tabControl_bt.curIndex = index
        this.$refs.scroll.scrollTo({
          x: 0,
          y: this.tabControlOffsetTop>-this.TabPos[this.curTab]?-this.tabControlOffsetTop:this.TabPos[this.curTab],
          time: 0,
        })
      },

      //返回顶部
      backTop() {
        this.$refs.scroll.scrollTo({
          x: 0,
          y: 0,
          time: 1000,
        })
        // console.log('backTopCkick');
      },
      //滚动监听
      onScroll(pos) {
        if (pos.y < -1500) {
          this.isShowBackTop = true
        } else {
          this.isShowBackTop = false
        }
        //处理tabControl的吸顶效果
        this.isTabFixed = (-pos.y) > this.tabControlOffsetTop
        //记录当前tab滚动的距离
        this.TabPos[this.curTab] = pos.y
      },
      //上拉加载数据,数据加载完成结束下拉刷新
      pullingUp() {
        setTimeout(()=>{
          this.getHomeData(this.curTab).then(()=>{
            // this.$refs.scroll.hooks.on('refresh', () => {  })

            // console.log(this.goods[this.curTab].datalist);
            this.$refs.scroll.finishPullUp()
          })
        },1000)

        console.log('上拉加载更多');
      },
      //内容更新回调刷新
      handleUpdated(){
        this.$refs.scroll.refresh()
        console.log('刷新');
      }
      ,//图片加载完成获取tabControl的偏移
      getTabControlOffset(){
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
        console.log(this.$refs.tabControl.$el.offsetTop)
      },
      //网络请求
      getHomeData(type) {
        const qs = `type=${type}&page=${this.goods[type].page+1}`
        this.goods[type].page += 1
        // console.log(qs)
        return getHomeData(qs).then(res => {
          this.goods[type].datalist.push(...res.data.data.list)
          // console.log(res.data.data.list)
        })
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    /* box-sizing: border-box; */
    position: relative;
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

  .scroll {
    /* height: calc(100% - 93px); */
    /* overflow: hidden; */
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 49px;
  }
.tabControl-bt{
  position: relative;
  z-index: 100;
}
  /* .bscroll-home{
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
} */
</style>
