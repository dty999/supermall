<template>
  <div class="tabControl">

    <div v-for="(title,index) of titles" @click="handClick(index)" :class="{active:index === curIndex}" :key='index'>
      <a >{{title}}</a>
    </div>
  </div>
</template>

<script>
  import {bus} from '../../../common/utils.js'
  export default {
    name:'TabControl',
    data(){
      return{
        curIndex:0,
        isActive:false,
        offsetTop:null
      }
    },
    methods:{
      handClick(index){
        this.curIndex = index
        // console.log(this.curIndex)
        this.$emit('tabClick',index)
        bus.$emit('tabClickInBus',index)

      },
      changeTab(index){
        this.curIndex = index
      }
    },
    mounted() {
      // this.offsetTop = this.$el.offsetTop
      // this.$emit('tabControlMounted',this.offsetTop)
      // console.log('tabControlMounted')
      bus.$on('changeTab',this.changeTab)
    },
    updated() {
      // this.offsetTop = this.$el.offsetTop
      // console.log(this.offsetTop)
    },
    props:{
      titles:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style>
  .tabControl{
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0px;
/*    position: sticky;
    top: 44px; */
    background-color: #fff;
    z-index: 9;
    box-sizing: border-box;
  }
  .active a{
    color: var(--color-tint);
    padding-bottom: 5px;
    border-bottom: 3px solid var(--color-tint);

  }
</style>
