<template>
	<div id="home">
			<nav-bar class="home-nav">
        <div slot='center'>购物街</div>
      </nav-bar>
      <home-swaper :banners='banners'></home-swaper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tabControl :titles="tabControlTitle"></tabControl>
      <ShowGoods :goodsList='goods["new"].datalist'></ShowGoods>

      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>



      </ul>
	</div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import ShowGoods from 'components/content/showGoods/ShowGoods.vue'

  import HomeSwaper from './childComponents/HomeSwaper.vue'
  import RecommendView from './childComponents/RecommendView.vue'
  import FeatureView from './childComponents/FeatureView.vue'
  // 网络请求函数
  import {getHomeMultidata,getDemoData} from 'network/homeApi'
	export default {
		name:'Home',
    components:{
      NavBar,
      HomeSwaper,
      RecommendView,
      FeatureView,
      ShowGoods,
      TabControl
    },
    data(){
      return {
       banners:[],
       recommends:[],
       tabControlTitle:['流行','新款','精选'],
       goods:{
         pop:{page:0,datalist:[]},
         new:{page:0,datalist:[]},
         sell:{page:0,datalist:[]}
       }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getDemoData('pop')
      this.getDemoData('new')
      this.getDemoData('sell')
    },
    methods:{
      getDemoData(type){
        const qs = `type=${type}&page=${this.goods[type].page+1}`
        this.goods[type].page += 1
        console.log(qs)
        getDemoData(qs).then(res=>{
          this.goods[type].datalist.push(...res.data)

        })
      },
      getHomeMultidata(){

        getHomeMultidata().then(res=>{
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      }
    }
	}
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    right: 0;
  }
</style>
