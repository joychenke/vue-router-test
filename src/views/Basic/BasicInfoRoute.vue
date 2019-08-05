<template>
  <div>
    <el-button type="primary" @click="handleDyamic">动态路由匹配</el-button>
    <el-button type="primary" @click="handleEmbed">嵌套路由</el-button>
    <el-button type="primary" @click="handeParams">组建传参</el-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 100
    };
  },
  methods: {
    handleDyamic() {
      this.id ++
      this.$router.push({name: "dynamic", params: {id: this.id}})
    },
    handleEmbed() {
      this.$router.push("/route/embed")
    },
    handeParams() {
      this.$router.push({name: "params"})
    }
  }
};
</script>
<style lang="less">
</style>


