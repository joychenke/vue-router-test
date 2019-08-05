<template>
  <div>
    <h2>BasicInfoRouteEmbed </h2>
    <el-switch 
      v-model="isRouteOne"
      active-text="非默认组件"
      inactive-text="默认组件"
      @change="handleChange" style="margin-right: 15px;">
    </el-switch>
    <el-checkbox @change="handleCheck">alias别名</el-checkbox>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isRouteOne: false
    }
  },
  methods: {
    handleShowEmbedOne(){
      this.$router.push({name: "oneEmbed"})
    },
    handleChange(){
      /* 不是非默认组件时 */
      if(this.isRouteOne){
        this.$router.push({name: "oneEmbed"})
      }else{
        this.$router.push({name: "defaultEmbed"})
      }
    },
    handleCheck(isCheck){
      // 别名 aliasEmbed
      if(isCheck){
        this.$router.push("/route/embed/aliasEmbed")
      }else{
        this.$router.back()
      }
    }
  }
}
</script>
<style lang="less" scoped>
  h2{
    display: inline-block;
    margin-right: 30px;
  }
</style>


