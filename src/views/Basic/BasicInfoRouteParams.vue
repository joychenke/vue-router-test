<template>
  <div>
    <h2>BasicInfoRouteParams</h2>
    <el-button round type="success" @click="handlePropBoolean">props传Boolean</el-button>
    <el-button round type="success" @click="handlePropObj">props传对象</el-button>
    <el-button round type="success" @click="handlePropFunc">props传函数</el-button>  
    <router-view class="view"></router-view>  
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
      // 两种写法
      // this.$router.push(`/route/params/propBoolean/${this.count}`)
      this.$router.push({name: "propBoolean", params: {id: `${this.count}`}})
    },
    handlePropObj(){
      this.$router.push({name: "propObj"})
    },
    handlePropFunc(){
      this.$router.push({name: "propFuncs", query: { plan: "private" } })
    }
  }
}
</script>
<style lang="less">
.view{
  margin-top: 20px;
}
</style>


