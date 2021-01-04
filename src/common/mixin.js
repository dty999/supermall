import BackTop from 'components/content/backTop/BackTop.vue'

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
        isShowBackTop: false,
    }
  },
  methods:{
    backTop() {
      this.$refs.scroll.scrollTo({
        x: 0,
        y: 0,
        time: 1000,
      })
      // console.log('backTopCkick');
    },
    listenBackTop(pos){
      if (pos.y < -1500) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
    },
    listenBackTop_bt(pos){
      if (pos.y < -500) {
        this.isShowBackTop = true
        console.log('到达临界值');
      } else {
        this.isShowBackTop = false
      }
      console.log('listenBackTop_bt')
    },
    print(){
      console.log('混入函数');
    }
  }
}
