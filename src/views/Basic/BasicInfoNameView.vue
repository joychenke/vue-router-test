<template>
  <div>
    <h1>我来自basicInfoNameView 
      <el-button type="primary" @click="handleRedirect">显示三个路由</el-button>
    </h1>
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
  },
  methods:{
    handleRedirect(){
      this.$router.push({name: "nameViews"})
    }
  }
}
</script>
<style lang="less">

</style>


