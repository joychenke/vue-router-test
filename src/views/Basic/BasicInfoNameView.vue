<template>
  <div>
    <BackBtn></BackBtn>
    <h1>123</h1>
    <router-view name="default"></router-view>
    <router-view name="middle"></router-view>
    <router-view name="below"></router-view>
  </div>
</template>
<script>
import BackBtn from "../BackBtn.vue"
export default {
  components: {BackBtn},
  data(){
    return {
      
    }
  }
}
</script>
<style lang="less">

</style>


