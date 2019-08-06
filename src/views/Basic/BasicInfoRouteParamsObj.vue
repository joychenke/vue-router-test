<template>
  <div>
    prop 传参是对象 btnType: {{btnType}},id: {{id}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  props: {
    btnType: { type: String},
    id: {type: String}
  }
}
</script>
<style lang="less">

</style>


