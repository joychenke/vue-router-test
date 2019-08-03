<template>
  <div class="basicInfo">
    <el-button type="text" @click="handleNameView">命名视图</el-button>
    <el-button type="text" @click="handleNestView">嵌套视图</el-button>
    <router-view name="default"></router-view>
    <router-view name="middle"></router-view>
    <router-view name="below"></router-view>
  </div>
</template>
<script>
import { log } from 'util';

export default {
  data(){
    return {

    }
  },
  methods: {
    handleNameView(){
      this.$router.push({name: "basicInfoNameView"})
      
    },
    handleNestView(){
      console.log("view");
      
    }
  }
};
</script>


