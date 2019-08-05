<template>
  <div>
    <h2>BasicInfoRouteParams</h2>
    <el-button round type="success" @click="handlePropBoolean">props传Boolean</el-button>
    <el-button round type="success" @click="handlePropObj">props传对象</el-button>
    <el-button round type="success" @click="handlePropFunc">props传函数</el-button>  
    <router-view></router-view>  
  </div>
</template>
<script>
export default {
  data(){
    return {
      count: 0 // 计数器
    }
  },
  methods: {
    handlePropBoolean(){
      this.count ++
      // this.$router.push(`/route/params/propBoolean/${this.count}`)
      this.$router.push({name: "propBoolean", params: {id: `${this.count}`}})
    },
    handlePropObj(){

    },
    handlePropFunc(){

    }
  }
}
</script>
<style lang="less">

</style>


