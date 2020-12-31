<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default: []
      }
    },
  }
</script>

<style>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  justify-content: space-evenly;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
}
.recommendItem img{
  flex-grow:1;
  width:70px;
  height: 70xp;
}
</style>
