<template>
  <h2>
    当前id是：{{ $route.params.id}}
  </h2>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  watch: {
    // 监听$route 或者 $route.params
    "$route"(val){
      console.log(val) // {id: 105}
    }
  },
  /* 生命周期钩子函数不会被触发 */
  mounted(){
    console.log("mounted被触发了")
  }
}
</script>
<style lang="less">

</style>


