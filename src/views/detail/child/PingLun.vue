<template>
  <div class="pinglun">
    <span v-for="item in commentInfo">
      {{item.created | fromatDate}}
    </span>

  </div>
</template>

<script>
  import {formatDate} from '../../../common/utils.js'
  export default {
    name: "PingLun",
    props: {
      commentInfo: {
        type: Array,
        default: []
      }
    },
    filters: {
      fromatDate(value) {
        const date = new Date(value*1000)
        return formatDate(date,'yyyy/MM/dd~hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .pinglun {
    height: 200px;
    border: #FF5777 0.0625rem solid;
    text-align: center;
    padding: 10px;
  }
</style>
